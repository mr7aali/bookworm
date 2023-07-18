import Cart from "../components/Cart";

const AllBook = () => {
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
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBook;
