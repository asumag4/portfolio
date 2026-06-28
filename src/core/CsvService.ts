/**
 * CsvService.ts — CSV parsing + the DataLemur tracker service.
 *
 * CsvParser handles quoted fields, escaped quotes, CRLF, and skips
 * blank lines. DataLemurService fetches the CSV (e.g. from a raw
 * GitHub URL), detects an optional header row, and tallies an
 * optional difficulty column.
 */

export class CsvParser {
  static parse(text: string): string[][] {
    const rows: string[][] = [];
    let row: string[] = [];
    let field = '';
    let inQuotes = false;

    const pushField = () => {
      row.push(field);
      field = '';
    };
    const pushRow = () => {
      pushField();
      if (row.some((cell) => cell.trim() !== '')) rows.push(row);
      row = [];
    };

    for (let i = 0; i < text.length; i += 1) {
      const ch = text[i];
      if (inQuotes) {
        if (ch === '"') {
          if (text[i + 1] === '"') {
            field += '"';
            i += 1;
          } else {
            inQuotes = false;
          }
        } else {
          field += ch;
        }
      } else if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        pushField();
      } else if (ch === '\n' || ch === '\r') {
        if (ch === '\r' && text[i + 1] === '\n') i += 1;
        pushRow();
      } else {
        field += ch;
      }
    }
    pushRow();
    return rows;
  }
}

export interface DifficultyCount {
  label: string;
  count: number;
}

export interface DataLemurStats {
  total: number;
  byDifficulty: DifficultyCount[];
  /** true when fetched live from the CSV (vs. fallback number) */
  live: boolean;
}

const HEADER_HINT = /question|title|problem|difficulty|level|date|category|topic|name|status|solved/;
const DIFFICULTY_ORDER = ['Easy', 'Medium', 'Hard'];

function isSolvedValue(raw: string): boolean {
  const v = raw.trim().toLowerCase();
  return v === 'true' || v === '1' || v === 'yes' || v === 'y';
}

export class DataLemurService {
  constructor(private readonly csvUrl: string) {}

  async fetchStats(): Promise<DataLemurStats> {
    const res = await fetch(this.csvUrl, { cache: 'no-store' });
    if (!res.ok) throw new Error(`CSV fetch failed (${res.status})`);
    const rows = CsvParser.parse(await res.text());
    if (rows.length === 0) throw new Error('CSV is empty');

    const firstRowLower = rows[0].map((c) => c.trim().toLowerCase());
    const hasHeader = firstRowLower.some((c) => HEADER_HINT.test(c));
    const dataRows = hasHeader ? rows.slice(1) : rows;
    const difficultyIdx = hasHeader
      ? firstRowLower.findIndex((c) => c.includes('difficulty') || c === 'level')
      : -1;
    const solvedIdx = hasHeader
      ? firstRowLower.findIndex((c) => c.includes('solved') || c.includes('status'))
      : -1;

    const tally = new Map<string, number>();
    let solvedTotal = 0;

    for (const row of dataRows) {
      if (solvedIdx >= 0 && !isSolvedValue(row[solvedIdx] ?? '')) continue;
      solvedTotal += 1;
      if (difficultyIdx >= 0) {
        const raw = (row[difficultyIdx] ?? '').trim();
        if (!raw) continue;
        const label = raw[0].toUpperCase() + raw.slice(1).toLowerCase();
        tally.set(label, (tally.get(label) ?? 0) + 1);
      }
    }

    const byDifficulty: DifficultyCount[] = [...tally.entries()]
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => {
        const ai = DIFFICULTY_ORDER.indexOf(a.label);
        const bi = DIFFICULTY_ORDER.indexOf(b.label);
        return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
      });

    const total = solvedIdx >= 0 ? solvedTotal : dataRows.length;
    return { total, byDifficulty, live: true };
  }
}
