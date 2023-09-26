import { Link } from "react-router-dom";
import { IBook } from "../types/book";
import "./styles/cart.css";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useState } from "react";
import Button from "@mui/material/Button";
interface IProps {
  book: IBook;
}
const Cart = ({ book }: IProps) => {
  const [added, setAdded] = useState(false);
  console.log(book)
  return (
    //   <Link to={`/allbook/${book._id}`}>
   
    <div className="cart-container cursor-pointer">
      <div className="p-[5px] relative">
        <div className="relative">
          {added ? (
            <span
              onClick={() => setAdded(!added)}
              className="text-2xl absolute right-0  m-2"
            >
              <BsSuitHeartFill />
            </span>
          ) : (
            <span
              onClick={() => setAdded(!added)}
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
