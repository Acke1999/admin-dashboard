import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { cartData } from "../data/dummy";
import { Button } from ".";

const Cart = () => {
  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
      <div className="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484b52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <Button
            icon={<MdOutlineCancel />}
            color="#99abb4"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />
        </div>
        {cartData.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center gap-5 border-b-1 border-color leading-8 dark:border-gray-600 p-4">
                <img className="rounded-lg h-80 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600 text-sm font-semibold dark:text-gray-400">
                    {item.category}
                  </p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="flex-semibold text-lg">{item.price}</p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <button
                        type="button"
                        className="p-2 border-r-1 border-color text-red-600 dark:border-gray-600 "
                      >
                        <AiOutlineMinus />
                      </button>
                      <p
                        className="p-2 border-r-1 border-color text-gray-600 dark:border-gray-600 {count > 0 ? 'positive' : count < 0 ? 'negative' : null}"
                        id="count"
                      >
                        0
                      </p>
                      <button
                        type="button"
                        className="p-2 border-r-1 border-color text-green-600 dark:border-gray-600"
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
