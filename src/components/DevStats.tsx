type DevStatsProps = {
  userData: {
    id: number;
    name: string;
    login: string;
    avatar_url: string;
    bio: string | null;
    blog: string;
    company: string | null;
    created_at: string;
    followers: number;
    following: number;
    location: string;
    public_repos: number;
    twitter_username: string | null;
    html_url: string;
  };
};

export default function DevStats({ userData }: DevStatsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-us", { month: "short" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const classNames = {
    svg: {
      regular: "dark:fill-white",
      inactive: "fill-gray-900 dark:fill-gray-300 opacity-70 dark:opacity-50",
    },
    svgText: {
      regular: "text-blue-gray dark:text-white",
      inactive: "text-gray-900 dark:text-gray-300 opacity-70 dark:opacity-50",
    },
  };

  // if user didn't set their real name (null), show their GitHub username
  const userName = userData.name || userData.login;

  return (
    <article className="grid pt-8 px-6 pb-14 lg:p-[3.7rem] bg-white dark:bg-blue-dark rounded-[0.9375rem] shadow-[0_1rem_1.875rem_-.625rem_rgba(70,96,187,0.20)] dark:shadow-none">
      <header className="grid grid-cols-[auto_1fr] gap-[1.22rem] lg:gap-x-12 lg:gap-y-0 items-center lg:items-start">
        <img
          src={userData.avatar_url}
          alt={`${userName}'s profile picture`}
          className="rounded-full w-[5.25rem] sm:w-[9rem] aspect-square lg:row-span-2"
        />

        <div className="lg:flex justify-between">
          <div>
            <h2 className="lg:mb-3 text-gray-700 dark:text-white text-[1.25rem] sm:text-[1.8rem] font-bold">
              {userName}
            </h2>
            <a
              href={userData.html_url}
              className="mt-1 text-blue sm:text-[1.1rem] hover:underline"
              target="_blank"
              rel="noopener noreferrer">
              @{userData.login}
            </a>
          </div>
          <p className="mt-1 text-gray-500 dark:text-white sm:text-lg">
            Joined {formatDate(userData.created_at)}
          </p>
        </div>

        <p
          className={`col-span-2 lg:col-start-2 lg:col-end-2 mt-2 ${
            userData.bio ? "" : "opacity-85 dark:opacity-50"
          }`}>
          {userData.bio || "This profile has no bio."}
        </p>
      </header>

      <dl className="grid grid-cols-3 gap-4 mt-6 sm:mt-8 lg:ml-[12rem] p-5 sm:px-8 bg-gray-300 dark:bg-gray-900 rounded-[0.625rem]">
        <div>
          <a
            href={`https://github.com/${userData.login}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer">
            <dt className="text-[0.82rem] sm:text-[0.95rem] text-blue-dark dark:text-white opacity-70 text-center sm:text-left">
              Repos
            </dt>
            <dd className="text-lg sm:text-[1.375rem] font-bold mt-2 text-center sm:text-left">
              {userData.public_repos}
            </dd>
          </a>
        </div>
        <div>
          <a
            href={`https://github.com/${userData.login}?tab=followers`}
            target="_blank"
            rel="noopener noreferrer">
            <dt className="text-[0.82rem] sm:text-[0.95rem] text-blue-dark dark:text-white opacity-70 text-center sm:text-left">
              Followers
            </dt>
            <dd className="text-lg sm:text-[1.375rem] font-bold mt-2 text-center sm:text-left">
              {userData.followers}
            </dd>
          </a>
        </div>
        <div>
          <a
            href={`https://github.com/${userData.login}?tab=following`}
            target="_blank"
            rel="noopener noreferrer">
            <dt className="text-[0.82rem] sm:text-[0.95rem] text-blue-dark dark:text-white opacity-70 text-center sm:text-left">
              Following
            </dt>
            <dd className="text-lg sm:text-[1.375rem] font-bold mt-2 text-center sm:text-left">
              {userData.following}
            </dd>
          </a>
        </div>
      </dl>

      <ul className="grid gap-4 sm:gap-6 sm:grid-cols-2 mt-6 lg:mt-[2.3rem]  lg:ml-[12rem]">
        <li>
          <a
            href={
              userData.location
                ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    userData.location
                  )}`
                : undefined
            }
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-[2.75rem_1fr]">
            <svg height="20" width="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z"
                fill="#4b6a9b"
                className={
                  userData.location
                    ? classNames.svg.regular
                    : classNames.svg.inactive
                }
              />
            </svg>
            <p
              className={
                userData.location
                  ? classNames.svgText.regular
                  : classNames.svgText.inactive
              }>
              {userData.location || "Not available"}
            </p>
          </a>
        </li>

        <li>
          <a
            href={
              userData.twitter_username
                ? `https://twitter.com/${userData.twitter_username}`
                : undefined
            }
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-[2.75rem_1fr]">
            <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z"
                fill="#4b6a9b"
                className={
                  userData.twitter_username
                    ? classNames.svg.regular
                    : classNames.svg.inactive
                }
              />
            </svg>
            <p
              className={
                userData.twitter_username
                  ? classNames.svgText.regular
                  : classNames.svgText.inactive
              }>
              {userData.twitter_username || "Not available"}
            </p>
          </a>
        </li>

        <li>
          <a
            href={userData.blog || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-[2.75rem_1fr]">
            <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <g
                fill="#4b6a9b"
                className={
                  userData.blog
                    ? classNames.svg.regular
                    : classNames.svg.inactive
                }>
                <path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z" />
                <path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z" />
              </g>
            </svg>
            <p
              className={
                userData.blog
                  ? classNames.svgText.regular
                  : classNames.svgText.inactive
              }>
              {userData.blog || "Not available"}
            </p>
          </a>
        </li>

        <li>
          <a
            href={
              userData.company
                ? `https://github.com/${userData.company.replace("@", "")}`
                : undefined
            }
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-[2.75rem_1fr]">
            <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <g
                fill="#4b6a9b"
                className={
                  userData.company
                    ? classNames.svg.regular
                    : classNames.svg.inactive
                }>
                <path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z" />
              </g>
            </svg>
            <p
              className={
                userData.company
                  ? classNames.svgText.regular
                  : classNames.svgText.inactive
              }>
              {userData.company || "Not available"}
            </p>
          </a>
        </li>
      </ul>
    </article>
  );
}
