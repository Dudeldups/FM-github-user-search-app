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
    followers_url: string;
    following: number;
    following_url: string;
    location: string;
    public_repos: number;
    repos_url: string;
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

  // if user didn't set their real name (null), show their GitHub username
  const userName = userData.name ? userData.name : userData.login;

  return (
    <article className="grid lg:grid-cols-[auto_1fr] pt-8 px-6 pb-12 bg-white dark:bg-blue-dark rounded-[0.9375rem] shadow-[0_1rem_1.875rem_-.625rem_rgba(70,96,187,0.20)] dark:shadow-none">
      <header className="grid grid-cols-[auto_1fr] gap-[1.22rem] items-center">
        <img
          src={userData.avatar_url}
          alt={`${userName}'s profile picture`}
          className="rounded-full max-w-[4.375rem] aspect-square"
        />
        <div>
          <h2 className="text-gray-700 dark:text-white text-[1.25rem] md:text-[1.625rem] font-bold">
            {userName}
          </h2>
          <a href={userData.html_url} className="text-blue md:text-[1.25rem]">
            @{userData.login}
          </a>
          <p className="text-gray-500 dark:text-white">
            Joined {formatDate(userData.created_at)}
          </p>
        </div>

        <p className="min-w-full col-span-2 mt-3">
          {userData.bio ? userData.bio : "This profile has no bio."}
        </p>
      </header>
      <dl className="flex gap-4 justify-between mt-6 p-5 text-center md:text-left bg-gray-300 dark:bg-gray-900 rounded-[0.625rem]">
        <a href={userData.repos_url}>
          <dt>Repos</dt>
          <dd>{userData.public_repos}</dd>
        </a>
        <a href={userData.followers_url}>
          <dt>Followers</dt>
          <dd>{userData.followers}</dd>
        </a>
        <a href={userData.following_url}>
          <dt>Following</dt>
          <dd>{userData.following}</dd>
        </a>
      </dl>
      <ul className="grid gap-4 mt-6">
        <li className="grid grid-cols-[2.75rem_1fr]">
          <img
            src="/assets/images/icon-location.svg"
            alt=""
            aria-hidden="true"
            className=""
          />
          <p className="">{userData.location}</p>
        </li>
        <li className="grid grid-cols-[2.75rem_1fr]">
          <img
            src="/assets/images/icon-website.svg"
            alt=""
            aria-hidden="true"
            className=""
          />
          <p className="">{userData.blog}</p>
        </li>
        <a href=""></a>
        <li className="grid grid-cols-[2.75rem_1fr]">
          <img
            src="/assets/images/icon-twitter.svg"
            alt=""
            aria-hidden="true"
            className=""
          />
          <p className="">{userData.twitter_username}</p>
        </li>
        <li className="grid grid-cols-[2.75rem_1fr]">
          <img
            src="/assets/images/icon-company.svg"
            alt=""
            aria-hidden="true"
            className=""
          />
          <p className="">{userData.company}</p>
        </li>
      </ul>
    </article>
  );
}
