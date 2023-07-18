import { IBook } from "../types/book";
import "./styles/cart.css";

interface IProps {
  book: IBook;
}
const Cart = ({ book }: IProps) => {
  return (
    <div
      onClick={() => {
        console.log(book);
      }}
      className="cart-container cursor-pointer"
    >
      <div className="p-[5px]">
        <div>
          <img
            className="mx-auto"
            width={120}
            height={183}
            src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/12-120x183.jpg"
            alt=""
          />
        </div>
        <div className="p-5 w-[250px]">
          <div>
            <p className="text-[#f75454] uppercase text-[13px] mt-[-10px] mb-1">
              {book.genre}
            </p>
          </div>
          <h2 style={{ lineHeight: "1" }} className="text-lg">
            {book.title}
          </h2>
          <p className="text-gray-700 hover:text-[#f75454] cursor-pointer mt-2">
            {book.author}
          </p>
          <div className="flex items-center justify-between">
            <h3 className="text-xl">$4.72</h3>
            <p className="text-[#f75454]">23 Jun 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
