import {
  AiOutlineQuestionCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsPhoneVibrate, BsArrowLeftRight } from "react-icons/bs";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import logo from "./../assets/logo.jpg";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { setUser } from "../redux/features/user/userSlice";

const Header = () => {
  const { user } = useAppSelector((state) => state.user);
  const Icons = [
    { path: "/location", Icon: <MdOutlineAddLocationAlt /> },
    { path: "/location", Icon: <BsArrowLeftRight /> },
    { path: "/wishlist", Icon: <AiOutlineHeart /> },
    { path: "/location", Icon: <FiUsers /> },
    { path: "/location", Icon: <AiOutlineShoppingCart /> },
  ];

  const NavLinkText = [
    { path: "/", text: "Home" },
    { path: "/addbook", text: "Add Book" },
    { path: "/allbook", text: "All Book" },
    { path: "/allbook", text: " Blog" },
  ];
  const linkStyle =
    "font-semibold hidden md:block text-sm lg:text-xl p-5 hover:text-[#cf2e2e]";

  const dispatch = useAppDispatch();
  const singOUT = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };
  return (
    <header className="border-bottom">
      <div className="topbar border-bottom ">
        <div className="justify-between flex px-5 container mx-auto">
          <ul className="flex text-[16px] my-3 text-[#19110b]">
            <li className="mr-20 flex items-center">
              <AiOutlineQuestionCircle />
              <a href="#" className="ml-2">
                Can we help you?
              </a>
            </li>
            <li className="flex items-center">
              <BsPhoneVibrate />
              <a href="#" className="ml-2">
                +880 1967519057
              </a>
            </li>
          </ul>
          <div className="flex items-center">
            <ul className="flex text-[20px] items-center ">
              {Icons.map((icon, index) => (
                <Link key={index} to={icon.path}>
                  {" "}
                  <li className="mx-5 cursor-pointer">{icon.Icon}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:container mx-auto flex justify-between items-center ">
        <div className="flex items-center text-[#161619]  ">
          <Link
            to={"/"}
            className="font-semibold text-xl p-5  md:hidden hover:text-[#cf2e2e]"
          >
            <HiMenuAlt2 />
          </Link>
          <Link
            to={"/"}
            className="font-semibold text-xl p-0 hover:text-[#cf2e2e]"
          >
            {" "}
            <img src={logo} className="h-[50px]" alt="" />
          </Link>


          {NavLinkText.map((nav ,index) => (
            <Link key={index} to={nav.path} className={linkStyle}>
              {nav.text}
            </Link>
          ))}


          <Link to={"/"} className={`${linkStyle} lg:block hidden`}>
            Others
          </Link>
        </div>

        <div>
          {user?.email ? (
            <Link
              onClick={singOUT}
              to={"/signup"}
              className="btn reg-btn cursor-pointer"
            >
              Log Out
            </Link>
          ) : (
            <>
              <Link
                to={"/signin"}
                className="btn log-btn cursor-pointer hidden md:inline"
              >
                Sign In
              </Link>
              <Link to={"/signup"} className="btn reg-btn cursor-pointer">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
