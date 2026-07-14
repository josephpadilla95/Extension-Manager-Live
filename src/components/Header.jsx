import LogoDark from "../assets/images/logo-dark.svg";
import LogoLight from "../assets/images/logo.svg";
import IconSun from "../assets/images/icon-sun.svg";
import IconMoon from "../assets/images/icon-moon.svg";
import { useState, useEffect } from "react";

export const Header = () => {
  const savedTheme = localStorage.getItem("dark");
  // Si es null, JSON.parse(null) da null, y el operador || lo convierte en false por defecto
  const valSavedTheme = JSON.parse(savedTheme) || false;
  const root = document.documentElement;

  const [isDark, setIsDark] = useState(valSavedTheme);

  /*if (valSavedTheme) {
    root.classList.add("dark");
  }*/

  useEffect(() => {
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("dark", isDark);
  }, [isDark]);

  const handleClick = () => {
    setIsDark((prevDark) => !prevDark);
  };

  return (
    <div className="bg-Neutral-0 dark:bg-Neutral-800 text-Neutral-0 flex justify-between h-[66px] px-3 py-2 rounded-[10px] items-center">
      <img
        className=""
        src={isDark ? LogoDark : LogoLight}
        alt="Logo Empresa"
      />
      <button
        onClick={handleClick}
        className="bg-Neutral-100 dark:bg-Neutral-700 size-[50px] grid place-content-center rounded-lg cursor-pointer hover:bg-Neutral-200 dark:hover:bg-Neutral-600"
      >
        <img src={isDark ? IconSun : IconMoon} alt="Icon Button Moon" />
      </button>
    </div>
  );
};
