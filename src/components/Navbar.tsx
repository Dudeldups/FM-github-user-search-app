import { useEffect } from "react";
import useToggle from "../hooks/useToggle";

export default function Navbar() {
  const [isDarkMode, toggleIsDarkMode] = useToggle(true);

  useEffect(() => {
    if (
      // user manually switched to light mode or did not choose yet but prefers light mode -> activate light mode. Else keep dark mode as default
      localStorage.theme === "light" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: light)").matches)
    ) {
      toggleIsDarkMode();
    }
  }, []);

  useEffect(() => {
    // save user preference in localStorage on change of state
    if (isDarkMode) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  return (
    <nav className="flex justify-between">
      <a href="https://fm-github-user-search-9000.netlify.app/">devfinder</a>
      <button aria-pressed={isDarkMode} onClick={toggleIsDarkMode}>
        {isDarkMode ? "light" : "dark"}
      </button>
    </nav>
  );
}
