import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        saveProductsToLocalStorage(data);
      });
  }, []);

  return (
    <div className="wrap-card flex gap-5 flex-wrap overflow-y-scroll h-[calc(100vh-200px)] pb-[50px]" id="wrap-card">
      {products.map((product, index) => {
        return (
                <div className="card flex flex-col w-[290px] gap-2.5 bg-[#ffffff] py-[15px] px-2.5 rounded cursor-pointer transition-[transform] duration-[800ms] ease-in-out hover:translate-y-[15px]" key={product.id}>
                    <div className="wrap-image w-full relative" >
                      <img src={`${product.img}`} alt={product.title} className="w-full rounded-lg"/>
                      <button type="submit" className="absolute right-2.5 top-2.5 bg-[#f5f8f7] text-[#f46803] border-none p-2 text-xl rounded cursor-pointer transition[background-color] ease-linear duration-[0.3s] hover:bg-[#c2c2c2] hover:text-[#ff7410] ">
                      <ShoppingCartIcon className="w-[22px]"/>
                      </button>
                      <p className="absolute top-[48px] right-3.5 leading-[1.25] text-white font-bold">Buy</p>
                    </div>
                    <h2 className="text-[24px] leading-[1.25] font-bold">{product.title}</h2>
                    <p className="opacity-50">{product.description}</p>
                    <div className="wrap-price flex gap-[5px] items-center">
                    <h2 className="text-[#f46803] text-[24px] leading-[1.25] font-bold">{product.price}</h2>
                    <p className="opacity-50">/ 3 pcs </p>
                    </div>
                </div>)
      })}
    </div>
  );

  function addToCart(id) {
    const carts = getCartsFromLocalStorage();
    const products = getProductsFromLocalStorage();
    const productSelected = products.find((product) => product.id == id)
    const productSelectedFromCart = carts.some((product) => product.id == id)
    console.log(productSelectedFromCart);
  }

  function saveCartsToLocalStorage(arg) {
    localStorage.setItem("cart", JSON.stringify(arg));
  }

  function getCartsFromLocalStorage() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }

  function saveProductsToLocalStorage(arg) {
    localStorage.setItem("products", JSON.stringify(arg));
  }

  function getProductsFromLocalStorage() {
    const products = localStorage.getItem("products");
    return products ? JSON.parse(products) : [];
  }

}
