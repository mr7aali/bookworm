import { useState } from "react";
import Cart from "../components/Cart";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/book";
import "./style/Home.css";
import { BsSearch } from "react-icons/bs";
import { MyQueryResult } from "./interface";
import { CiCircleRemove } from "react-icons/ci";
import { searchIconStyle } from "../components/helpers/PageStyle";

const Home = () => {
  const { data } = useGetBooksQuery(undefined) as MyQueryResult;

  const [query, setQuery] = useState<string>("");

  // eslint-disable-next-line prefer-const
  let contained;
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
    <div className="container mx-auto  mb-20">
      <div className="flex  justify-center items-center relative">
        <h2 className="mx-auto text-[#161619]  text-[30px] md:text-4xl font-semibold my-20">
          {/* Featured Books */}
        </h2>
        <div className="border rounded flex items-center relative ">
          <input
            type="text"
            className="h-14 w-96 pr-8 pl-5 rounded z-0 bg-slate-50 focus:shadow focus:outline-none"
            placeholder="Search anything..."
            value={query}
            onChange={(e) =>
              setQuery((e.target as HTMLInputElement).value.toLowerCase() || "")
            }
          />

          <BsSearch
            // className={`mr-5 ${
            //   query ? "hidden" : ""
            // } text-xl cursor-pointer hover:text-[#f75454] absolute right-0`}
            className={searchIconStyle(query, "search")}
          />
          <span
            className={searchIconStyle(query, "close")}
            onClick={() => setQuery("")}
          >
            <CiCircleRemove />
          </span>
        </div>
      </div>
      <div>
        <div className="featured-card-container"> {contained}</div>
      </div>
    </div>
  );
};

export default Home;
