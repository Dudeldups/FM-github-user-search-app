import { useState } from "react";
import DevStats from "./components/DevStats";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import useFetch from "./hooks/useFetch";

export default function App() {
  const [user, setUser] = useState("octocat");
  const {
    data: userData,
    isLoading,
    error,
  } = useFetch(`https://api.github.com/users/${user}`);

  return (
    <div className="flex flex-col items-center px-6 bg-gray-300 dark:bg-gray-900 text-blue-gray dark:text-white h-screen">
      <div className="flex-auto grid content-center w-full max-w-[44rem] lg:max-w-[56rem]">
        <Navbar />
        <main>
          <h1 className="sr-only">GitHub user search</h1>
          <Search setUser={setUser} />
          {isLoading && <div>Loading...</div>}
          {error && (
            <p className="mt-8 mb-8 text-center">
              {error === "This site does not exist"
                ? "This user does not exist"
                : "There was an error loading the data. Please try again."}
            </p>
          )}
          {!error && userData && <DevStats userData={userData} />}
        </main>
      </div>
      <Footer />
    </div>
  );
}
