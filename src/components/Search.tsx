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
      className="flex items-center flex-wrap justify-center gap-2 md:gap-[1.67rem] mt-[2.2rem] mb-4 md:mb-6 py-[0.6rem] pl-4 md:pl-8 pr-[0.6rem] bg-white dark:bg-blue-dark rounded-[0.9375rem] shadow-[0_1rem_1.875rem_-.625rem_rgba(70,96,187,0.20)] dark:shadow-none">
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
        className="flex-auto bg-transparent min-w-[25ch] leading-[1.5625rem] caret-blue"
      />
      <button
        type="submit"
        className="bg-blue text-white py-[0.78rem] px-4 rounded-[0.625rem]">
        Search
      </button>
    </form>
  );
}
