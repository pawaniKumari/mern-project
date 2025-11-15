import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";
import ChatBox from "./chatBox";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <>
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-green-500 via-lime-400 to-green-900 rounded-lg text-white">
            Think
          </span>
          Elephant
        </Link>
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            placeholder="Search Docs..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray">
          <AiOutlineSearch />
        </Button>
        <Button
          className="flex items-center gap-2 px-3 py-2"
          color="gray"
          onClick={() => setShowChat((prev) => !prev)}
          aria-label="Open Chatbot"
        >
          {/* Elephant Robot SVG Icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="14" cy="14" rx="10" ry="8" fill="#7B8C8E" />
            <rect x="10" y="10" width="8" height="6" rx="3" fill="#A3C1AD" />
            <rect
              x="12.5"
              y="16"
              width="3"
              height="6"
              rx="1.5"
              fill="#7B8C8E"
            />
            <circle cx="12" cy="13" r="1" fill="#222" />
            <circle cx="16" cy="13" r="1" fill="#222" />
            <rect x="8" y="12" width="2" height="4" rx="1" fill="#A3C1AD" />
            <rect x="18" y="12" width="2" height="4" rx="1" fill="#A3C1AD" />
            <rect
              x="13.25"
              y="7"
              width="1.5"
              height="3"
              rx="0.75"
              fill="#A3C1AD"
            />
            <rect x="11" y="20" width="6" height="2" rx="1" fill="#A3C1AD" />
          </svg>
          <span className="hidden md:inline text-sm font-medium text-gray-700 dark:text-gray-200">
            Ask
          </span>
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10 hidden sm:inline"
            color="gray"
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={"/dashboard?tab=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button gradientDuoTone="greenToBlue" outline>
                Sign In
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      {showChat && (
        <div className="fixed bottom-4 right-4 z-50">
          <ChatBox onClose={() => setShowChat(false)} />
        </div>
      )}
    </>
  );
}
