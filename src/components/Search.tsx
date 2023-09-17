import { useState } from "react";

type SearchProps = {
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

export default function Search({ setUser }: SearchProps) {
  const [formInput, setFormInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(formInput);
  };

  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      className="flex items-center flex-wrap justify-center gap-2 sm:gap-[1.67rem] mt-[2.2rem] mb-4 sm:mb-6 py-[0.6rem] pl-4 sm:pl-8 pr-[0.6rem] bg-white dark:bg-blue-dark rounded-[0.9375rem] shadow-[0_1rem_1.875rem_-.625rem_rgba(70,96,187,0.20)] dark:shadow-none">
      <label htmlFor="search" className="shrink-0">
        <img
          src="/assets/images/icon-search.svg"
          alt=""
          aria-hidden="true"
          className=""
        />
        <span className="sr-only">Search for GitHub username</span>
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search GitHub username..."
        value={formInput}
        onChange={handleChange}
        className="flex-auto px-1 bg-transparent min-w-[25ch] lg:text-xl leading-[1.5625rem] caret-blue outline-offset-4 sm:outline-offset-8"
      />
      <button
        type="submit"
        className="bg-blue text-white font-bold lg:text-lg py-[0.78rem] sm:py-4 px-4 sm:px-8 rounded-[0.625rem] hover:text-blue hover:bg-white transition-colors duration-200">
        Search
      </button>
    </form>
  );
}
