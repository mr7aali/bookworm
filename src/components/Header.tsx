import { AiOutlineQuestionCircle ,AiOutlineHeart,AiOutlineShoppingCart} from "react-icons/ai";
import { BsPhoneVibrate ,BsArrowLeftRight} from "react-icons/bs";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { FiUsers } from "react-icons/fi";

const Header = () => {
  return (
    <header>
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
              <li className="mx-5 cursor-pointer"> <MdOutlineAddLocationAlt/></li>
              <li className="mx-5 cursor-pointer"><BsArrowLeftRight/></li>
              <li className="mx-5 cursor-pointer"><AiOutlineHeart/></li>
              <li className="mx-5 cursor-pointer"><FiUsers/></li>
              <li className="mx-5 cursor-pointer"><AiOutlineShoppingCart/></li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
