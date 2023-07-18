import Cart from "../components/Cart";
import { useGetAllBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/book";

const AllBook = () => {
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
  const { data, isLoading, isError } = useGetAllBooksQuery(
    undefined
  ) as MyQueryResult;

  console.log(data?.data, isLoading, isError);

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex">
          <h2 className="mx-auto text-[#161619] text-4xl font-semibold my-20">
            All Books
          </h2>
        </div>
        <div className="">
          <div
            //  style={{ border: "1px solid red" }}
            className="featured-card-container"
          >
            {data?.data?.map((b: IBook) => (
              <Cart 
              key={b._id}
               book={b} />
            ))}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBook;
