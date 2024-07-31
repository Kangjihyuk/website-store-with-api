import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import CardProduct from "../Fragments/CardProduct";

const Popup = ({ orderPopup, setOrderPopup, cart, products }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm overflow-scroll">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-blue-900 rounded-md duration-200 w-[300px] h-[90vh] overflow-scroll">
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="poppins-bold text-white">Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer tew"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              <div>
                {cart.length > 0 ? (
                  cart.map((cartItem) => {
                    const product = products.find(
                      (item) => item.id === cartItem.id
                    );
                    return (
                      <div key={cartItem.id}>
                        <CardProduct>
                          <CardProduct.CardImages
                            image={product.image}
                          ></CardProduct.CardImages>
                          <CardProduct.CardText
                            title={product.title.substring(0, 10)}
                            price={product.price}
                            count={product.rating.count}
                            rate={product.rating.rate}
                          >
                            {product.description.substring(0, 50)}...
                          </CardProduct.CardText>
                        </CardProduct>
                      </div>
                    );
                  })
                ) : (
                  <p>Keranjang belanja kosong</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
