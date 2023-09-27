import React from "react";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import { MyQueryResult } from "./interface";
import { useAppSelector } from "../redux/hook";
import Cart from "../components/Cart";
import { IBook } from "../types/book";

const Wishlist = () => {
  const email = useAppSelector((state) => state.user.user.email) ?? "-1";
  const { data } = useGetBooksQuery(undefined) as MyQueryResult;

  const wishList = data?.data?.filter((b) => b.wishList.includes(email));
  console.log("w", wishList);
  const contained = wishList?.map((b: IBook) => <Cart key={b._id} book={b} />);
  return (
    <div>
      {/* {wishList.map((b) => (
        <Cart key={b._id} book={b} />
      ))} */}

      <div className="grid grid-cols-4 container mx-auto"> {contained}</div>
    </div>
  );
};

export default Wishlist;
