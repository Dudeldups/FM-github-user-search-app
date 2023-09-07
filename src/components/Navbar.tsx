import { useEffect } from "react";
import useToggle from "../hooks/useToggle";

export default function Navbar() {
  const [isDarkMode, toggleIsDarkMode] = useToggle(true);

  useEffect(() => {
    try {
      if (
        // user manually switched to light mode or did not choose yet but prefers light mode -> activate light mode. Else keep dark mode as default
        localStorage.theme === "light" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: light)").matches)
      ) {
        toggleIsDarkMode();
      }
    } catch (error) {
      console.error("Could not access localStorage: ", error);
    }
  }, []);

  useEffect(() => {
    // save user preference in localStorage on change of state
    if (isDarkMode) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const icon = isDarkMode
    ? "/assets/images/icon-sun.svg"
    : "/assets/images/icon-moon.svg";

  const inactiveTheme = isDarkMode ? "light" : "dark";

  return (
    <nav className="flex gap-6 items-center justify-between font-bold">
      <a
        href="https://fm-github-user-search-9000.netlify.app/"
        className="text-[1.625rem]">
        devfinder
      </a>
      <button
        aria-pressed={isDarkMode}
        aria-label="toggle dark theme"
        onClick={toggleIsDarkMode}
        className="flex gap-4 items-center uppercase p-1 text-[0.8125rem] tracking-[0.15625rem]">
        {inactiveTheme}
        <img src={icon} alt="" aria-hidden="true" className="inline-block" />
        <span aria-live="polite" className="sr-only">{`${
          isDarkMode ? "dark" : "light"
        } mode is active`}</span>
      </button>
    </nav>
  );
}
