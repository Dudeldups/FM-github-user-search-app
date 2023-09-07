export default function Footer() {
  return (
    <footer className="sticky top-full max-w-[45.625rem] px-6 py-8 text-center bg-gray-300 dark:bg-gray-900">
      <p>
        Challenge by{" "}
        <span className="inline-block">
          <a
            href="https://www.frontendmentor.io/profile/Dudeldups"
            target="_blank"
            className="text-error">
            Frontend Mentor
          </a>
          .
        </span>{" "}
        Coded by{" "}
        <span className="inline-block">
          <a
            href="https://github.com/Dudeldups"
            target="_blank"
            className="text-error">
            Arne Jacob
          </a>
          .
        </span>
      </p>
    </footer>
  );
}
