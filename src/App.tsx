import DevStats from "./components/DevStats";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

export default function App() {
  return (
    <div className="grid place-content-center bg-gray-300 dark:bg-gray-900 text-blue-gray dark:text-white h-screen">
      <Navbar />
      <main className="max-w-[45.625rem] px-6">
        <h1 className="sr-only">GitHub user search</h1>
        <Search />
        <DevStats />
      </main>
      <Footer />
    </div>
  );
}
