import Cart from "../components/Cart";
import "./style/Home.css";

const Home = () => {
  return (
    <div className="container mx-auto">
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
  );
};

export default Home;
