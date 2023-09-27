import { useState } from "react";
import Cart from "../components/Cart";
import {  useGetBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/book";
import { BsSearch } from "react-icons/bs";
import { MyQueryResult } from "./interface";
const AllBook = () => {
  const { data } = useGetBooksQuery(undefined) as MyQueryResult;
  const [query, setQuery] = useState<string>("");
  // eslint-disable-next-line prefer-const
  let contained;
  console.log(data);
  const filteredData: IBook[] = data?.data?.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.author.toLowerCase().includes(query) ||
      item.genre.toLowerCase().includes(query)
  );
  if (!query) {
    contained = data?.data?.map((b: IBook) => <Cart key={b._id} book={b} />);
  } else if (query) {
    contained = filteredData?.map((b: IBook) => <Cart key={b._id} book={b} />);
  }
  if (query && !filteredData.length) {
    contained = <h1 className="mx-auto text-red-500">No data to show !</h1>;
  }
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex  justify-center items-center">
          <h2 className="mx-auto text-[#161619] text-4xl font-semibold my-20">
            All Books
          </h2>
          <div className="border rounded flex items-center ">
            <input
              type="text"
              className="h-14 w-96 pr-8 pl-5 rounded z-0 bg-slate-50 focus:shadow focus:outline-none"
              placeholder="Search anything..."
              onChange={(e) =>
                setQuery(
                  (e.target as HTMLInputElement).value.toLowerCase() || ""
                )
              }
            />
            <span className="mr-5 text-xl cursor-pointer hover:text-[#f75454] absolute right-0">
              <BsSearch />
            </span>
          </div>
        </div>

        <div className="">
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container  mx-auto"> {contained}</div>
        </div>
      </div>
    </div>
  );
};

export default AllBook;
