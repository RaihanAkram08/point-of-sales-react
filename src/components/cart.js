import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function Carts() {
    const [cart, setCart] = useState([]);

    const saveCartsToLocalStorage = (arg) => {
      localStorage.setItem("cart", JSON.stringify(arg));
    }
  
  const getCartsFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }
  
  const saveProductsToLocalStorage = (arg) => {
    localStorage.setItem("products", JSON.stringify(arg));
  }
  
  const getProductsFromLocalStorage = () => {
    const products = localStorage.getItem("products");
    return products ? JSON.parse(products) : [];
  }

    const addToCart = (id) => {
        const cart = getCartsFromLocalStorage();
        const products = getProductsFromLocalStorage();
        const productSelected = products.find((product) => product.id === id);
        console.log(productSelected);
        const findProduct = cart.find((product) => product.id === id);
        const existingProduct = cart.some((product) => product.id === id);
        if (existingProduct) {
            findProduct.counter += 1
        } else {
            cart.push({
                id: 1,
                title: productSelected.title,
                description: productSelected.description,
                image: productSelected.image,
                price: productSelected.price,
                counter : 1,
            })
        };
        setCart(cart);
        saveCartsToLocalStorage(cart);
        updateOrder(cart);
        console.log(cart)
        
    }

    const updateOrder = (carts) => {
      return (
        <div>
          {cart.map((product, index) => {
            return (
              <div className="card-order flex gap-5 pr-3.5">
                  <div className="wrap-image w-[70px]">
                    <img src={product.img} alt="" className="w-full rounded-[5px]"/>
                  </div>
                <div className="teks flex flex-col w-[95%] justify-around">
                  <h3 className="text-[19px] leading-[1.25] font-bold">{product.title}</h3>
                  <div className="harga flex justify-between items-center">
                    <h3 className="text-[18.72px] leading-[1.25] font-bold text-[#f46803]">{product.price}</h3>
                    <div className="counter flex gap-5">
                      <button type="submit" className="text-[13.333px] leading-[1.25] text-white bg-[#ff7410] border-none rounded-[5px] p-1 cursor-pointer transition[background-color] ease-linear duration-[0.5s] hover:bg-[#fab581]">
                        <MinusIcon className="w-[15px]" />
                      </button>
                      <p  className="text-[#838383]">1</p>
                      <button type="submit" className="text-[13.333px] leading-[1.25] text-white bg-[#ff7410] border-none rounded-[5px] p-1 cursor-pointer transition[background-color] ease-linear duration-[0.5s] hover:bg-[#fab581]">
                        <PlusIcon className="w-[15px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
            
          })}
        </div>
      )
    }

    
}