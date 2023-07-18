import Cart from "../components/Cart";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/book";
import "./style/Home.css";

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
  const { data, isLoading, isError } = useGetBooksQuery(
    undefined
  ) as MyQueryResult;
  console.log(data?.data, isError, isLoading);
  return (
    <div className="container mx-auto mb-20">
      <div className="flex">
        <h2 className="mx-auto text-[#161619] text-4xl font-semibold my-20">
          Featured Books
        </h2>
      </div>
      <div className="">
        <div
          //  style={{ border: "1px solid red" }}
          className="featured-card-container"
        >
          {data?.data?.map((b: IBook) => (
            <Cart book={b} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
