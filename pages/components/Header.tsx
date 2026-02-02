import React from "react";
import config from "../index.json";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const navigation = config.navigation;
  return (
    <div className="header">
      <div className="header__menu h-10 bg-white">
        <ul className="flex px-8 lg:px-32 gap-x-10 content-center leading-0">
          {navigation.map((item) => (
            <li className="mt-6 cursor-pointer" key={item.title}>
              <a href={`#${item.title}`}>
                {item.title}
              </a>
            </li>
          ))}
            <li className="mt-4">
              <ThemeSwitcher />
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;