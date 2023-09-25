import Cart from "../components/Cart";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/book";
import "./style/Home.css";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  type MyData = {
    data: IBook[];
    // Other properties specific to your data structure
  };
  type MyQueryResult = {
    data: MyData;
    isLoading: boolean;
    isError: boolean;

    // Other properties returned by your specific hook
  };
  const { data } = useGetBooksQuery(undefined) as MyQueryResult;

  return (
    <div className="container mx-auto mb-20">
      <div className="flex justify-center items-center">
        <h2 className="mx-auto text-[#161619] text-4xl font-semibold my-20">
          Featured Books
        </h2>
        <div className="border rounded flex items-center relative ">
          <input 
            type="text"
            className="h-14 w-96 pr-8 pl-5 rounded z-0 bg-slate-50 focus:shadow focus:outline-none"
            placeholder="Search anything..."
          />
     
            <BsSearch className="mr-5 text-xl cursor-pointer hover:text-[#f75454] absolute right-0" />
      
        </div>
      </div>
      <div className="">
        <div
          //  style={{ border: "1px solid red" }}
          className="featured-card-container"
        >
          {data?.data?.map((b: IBook) => (
            <Cart key={b._id} book={b} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
