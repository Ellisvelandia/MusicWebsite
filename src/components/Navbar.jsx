import { Link } from "react-router-dom";
import Emusic from "/eMusic.webp";

const Navbar = () => {
  return (
    <nav className="bg-[rgb(0,0,0)] w-full">
      <div className="w-full flex justify-evenly items-center">
        <Link to="/">
          <img
            src={Emusic}
            alt="logo emusic"
            className="md:w-28 md:h-20 w-20 h-16"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div
          className="md:p-2 md:text-base text-sm font-normal"
          id="navbarSupportedContent"
        >
          <form
            className="flex"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="px-1 focus:border-blue-600 focus:border outline-none md:w-96 w-full"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="border border-[#fff] p-1  bg-red-600 text-gray-100 rounded ml-1 text-center"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <Link to="/trending">
            <span className="md:text-base text-sm font-normal text-white">
              Trending
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
