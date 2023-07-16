import "./styles/cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
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
            <p className="text-[#f75454] uppercase text-[13px] mt-[-10px] mb-1">book Name</p>
          </div>
          <h2 style={{lineHeight:"1"}} className="text-lg">My name is ali i like to do good thing</h2>
          <p className="text-gray-700 hover:text-[#f75454] cursor-pointer mt-2">Author Name</p>
         <h3 className="text-xl">$4.72</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
