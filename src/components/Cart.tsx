/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link } from "react-router-dom";
import { IBook } from "../types/book";
import "./styles/cart.css";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useAppSelector } from "../redux/hook";
import { IPostResponse } from "../types/InterfaceResponse";
import { useUpdateBookMutation } from "../redux/api/apiSlice";
import { toast } from "react-toastify";
interface IProps {
  book: IBook;
}
const Cart = ({ book }: IProps) => {
  const [added, setAdded] = useState(false);
  const [makeRead, setmakeRead] = useState(false);
  const email = useAppSelector((state) => state.user.user.email) ?? "";
  const [updateBook] = useUpdateBookMutation();

  console.log(email);
  console.log(book.wishList.includes(email));

  const handleWishLisst = async () => {
    const updateWishList = [...book.wishList, email];
    const data = {
      wishList: updateWishList as string[],
    };

    if (!added) {
      const result: IPostResponse = await updateBook({
        id: book?._id,
        data: data,
      });
      if ("data" in result) {
        toast.success("Added to wish list!");
        setAdded(!added);
      }
    }
  };
  const handleMakeRead = async () => {
    const updateMakeRead = [...book.markAsReadList, email];
    const data = {
      markAsReadList: updateMakeRead as string[],
    };

    if (!makeRead) {
      const result: IPostResponse = await updateBook({
        id: book?._id,
        data: data,
      });
      if ("data" in result) {
        toast.success("Update to make read!");
        setmakeRead(!makeRead);
      }
    }

    setmakeRead(!makeRead);
  };

  useEffect(() => {
    const WishListconditon = book.wishList.includes(email);
    setAdded(WishListconditon);
    const MakeListContion = book.markAsReadList.includes(email);
    setmakeRead(MakeListContion);
  }, [book, email]);

  return (
    //   <Link to={`/allbook/${book._id}`}>

    <div
      className={`cart-container cursor-pointer mx-auto max-w-[300px] ${
        makeRead ? "bg-red-300 rounded shadow-sm" : ""
      }`}
    >
      <div className="p-[5px] relative">
        <div className="relative">
          {added ? (
            <span
              onClick={handleWishLisst}
              className="text-2xl absolute right-0  m-2"
            >
              <BsSuitHeartFill />
            </span>
          ) : (
            <span
              onClick={handleWishLisst}
              className="text-2xl absolute right-0  m-2"
            >
              <BsSuitHeart />
            </span>
          )}

          <img
            className="mx-auto"
            width={120}
            height={183}
            src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/12-120x183.jpg"
            // src={book.image}
            alt=""
          />
        </div>

        <div className="p-5 w-[250px] min-h-[180px] relative">
          <div>
            <p className="text-[#f75454] uppercase text-[13px] mt-[-10px] mb-1">
              {book?.genre}
            </p>
          </div>
          <h2 style={{ lineHeight: "1" }} className="text-lg">
            {book?.title}
          </h2>
          <p className="text-gray-700 hover:text-[#f75454] cursor-pointer mt-2">
            {book?.author}
          </p>

          <div className="flex items-center justify-between absolute w-4/5 bottom-4">
            <h3 className="text-xl">$4.72</h3>
            <p className="text-[#f75454]">23 Jun 2023</p>
          </div>
        </div>

        <div className="mt-auto bottom-0 flex">
          <Button
            sx={{ margin: "1px" }}
            variant="outlined"
            fullWidth
            className="mx-2"
            disabled={makeRead}
            onClick={handleMakeRead}
          >
            Make Read
          </Button>
          <Link to={`/allbook/${book._id}`} className="w-full">
            <Button
              sx={{ margin: "1px" }}
              variant="outlined"
              fullWidth
              className="mx-2"
            >
              Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
    //  </Link>
  );
};

export default Cart;
