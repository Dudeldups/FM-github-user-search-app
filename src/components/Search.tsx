export default function Search() {
  return (
    <form
      action="#"
      className="flex items-center gap-[0.55rem] md:gap-[1.67rem] mt-[2.2rem] py-[0.6rem] pl-4 md:pl-8 pr-[0.6rem] bg-white dark:bg-blue-dark rounded-[0.9375rem]">
      <label htmlFor="search" className="">
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
        className="grow bg-transparent min-w-[25ch] leading-[1.5625rem] caret-blue"
      />
      <button
        type="submit"
        className="bg-blue text-white py-[0.78rem] px-4 rounded-[0.625rem]">
        Search
      </button>
    </form>
  );
}
