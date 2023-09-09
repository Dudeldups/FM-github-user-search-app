type DevStatsProps = {
  userData: {
    id: number;
    avatar_url: string;
    bio: string | null;
    blog: string;
    company: string | null;
    created_at: string;
    followers: number;
    followers_url: string;
    following: number;
    following_url: string;
  };
};

export default function DevStats({ userData }: DevStatsProps) {
  return <article>{userData.id}</article>;
}
