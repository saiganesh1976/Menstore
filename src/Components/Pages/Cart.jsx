import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, changeQuantity } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.new_price * item.quantity,
    0
  );
  const gst = subtotal * 0.04;
  const total = subtotal + gst;

  const handleBuyNow = () => {
    const orderId= Math.floor(Math.random()*10000)
    alert(`Order #${orderId} placed!`);
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl mb-5 font-semibold p-4">Shopping Cart</h1>
      <div className="lg:flex justify-center gap-10 items-center">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 border">S.no</th>
                  <th className="py-2 px-4 border">Product Name</th>
                  <th className="py-2 px-4 border">Size</th>
                  <th className="py-2 px-4 border">Price</th>
                  <th className="py-2 px-4 border">Quantity</th>
                  <th className="py-2 px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={`${item.id}-${item.size}`} className="text-center">
                    <td className="py-2 px-4 border">{index + 1}</td>
                    <td className="py-2 px-4 border">{item.name}</td>
                    <td className="py-2 px-4 border">{item.size}</td>
                    <td className="py-2 px-4 border">₹{item.new_price}</td>
                    <td className="py-2 px-4 border">
                      <button
                        className="px-2 py-1 bg-slate-500 text-white rounded hover:bg-slate-600"
                        onClick={() => changeQuantity(item.id, item.size, 1)}
                      >
                        +
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-slate-500 text-white rounded hover:bg-slate-600"
                        onClick={() => changeQuantity(item.id, item.size, -1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                    </td>
                    <td className="py-2 px-4 border">
                      <button
                        className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => removeFromCart(item.id, item.size)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="mt-10 text-left">
          <p className="text-m font-medium">
            Subtotal:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ₹{subtotal.toLocaleString()}
          </p>
          <p className="text-m font-medium">
            GST :
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ₹{gst.toLocaleString()}
          </p>
          <hr className=" w-48 mt-1 ml-auto" />
          <p className="text-xl mt-2 font-semibold">
            Order Total:&nbsp;&nbsp;&nbsp;&nbsp; ₹{total.toLocaleString()}
          </p>
          <div className="text-right mt-6">
            <button
              className=" bg-orange-400 p-2 w-full text-white rounded-lg "
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
