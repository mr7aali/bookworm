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
              <li className="mx-5 cursor-pointer">
                {" "}
                <MdOutlineAddLocationAlt />
              </li>
              <li className="mx-5 cursor-pointer">
                <BsArrowLeftRight />
              </li>
              <li className="mx-5 cursor-pointer">
                <AiOutlineHeart />
              </li>
              <li className="mx-5 cursor-pointer">
                <FiUsers />
              </li>
              <li className="mx-5 cursor-pointer">
                <AiOutlineShoppingCart />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex items-center text-[#161619]  ">
          <Link
            to={"/"}
            className="font-semibold text-xl p-5 hover:text-[#cf2e2e]"
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
          <Link
            to={"/"}
            className="font-semibold text-xl p-5 hover:text-[#cf2e2e]"
          >
            Home
          </Link>
          <Link
            to={"/"}
            className="font-semibold text-xl p-5 hover:text-[#cf2e2e]"
          >
            Categories
          </Link>
          <Link
            to={"/"}
            className="font-semibold text-xl p-5 hover:text-[#cf2e2e]"
          >
            All Books
          </Link>
          <Link
            to={"/"}
            className="font-semibold text-xl p-5 hover:text-[#cf2e2e]"
          >
            Blog
          </Link>
          <Link
            to={"/"}
            className="font-semibold text-xl p-5 hover:text-[#cf2e2e]"
          >
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
              <Link to={"/signin"} className="btn log-btn cursor-pointer">
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
