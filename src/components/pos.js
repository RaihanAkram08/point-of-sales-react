import { BeakerIcon, FunnelIcon, SparklesIcon, MagnifyingGlassIcon, CakeIcon, ChartPieIcon, CloudIcon, Cog6ToothIcon, MinusIcon, ShoppingCartIcon, PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { LuCroissant } from "react-icons/lu";
import { FaStroopwafel } from "react-icons/fa6";
import { PiCoffee } from "react-icons/pi";
import { LuIceCream2 } from "react-icons/lu";
import Products from "./product";
import Carts from "./cart";

export function Pos() {
  return (

  <div className="flex">
      <div className="bg-[#e5e5e5] flex flex-col gap-5 px-[30px] pt-[30px] pb-[0px] w-[70%]  ">
        <header className="flex justify-between items-center ">
          <div className="flex flex-col gap-[15px]">
            <h1 className="text-[32px] leading-[1.3] font-bold">Welcome, Gorry</h1>
            <p className="opacity-50 leading-[1.3]">Discover Whatever You Need Easily</p>
          </div>

          <div className="flex gap-5 mr-[45px]">
            <div className="relative">
              <MagnifyingGlassIcon className="w-7 absolute left-[9px] top-[9px]" />
              <input type="search" placeholder="Search Product ..." className="pt-[10px] pr-[55px] pb-[10px] pl-[40px] bg-white border-none rounded-lg"/>
            </div>

            <button type="submit" className="bg-white border-none py-2 px-2.5 rounded-lg transition[background-color] ease-linear duration-[0.4s] cursor-pointer hover:bg-[#f46803] hover:text-[#fedcc5]">
              <FunnelIcon className="w-[23px]"/>
            </button>
          </div>
        </header>

        <div className="flex gap-[30px] mt-[25px]">
          <a href="/" className="py-[15px] px-[23px] flex gap-3 font-semibold no-underline text-black bg-white border-none rounded-lg transition[background-color] ease-linear duration-[0.4s] hover:bg-[#f46803] hover:text-[#fedcc5]">
            <SparklesIcon className="w-5" /> Signature
          </a>
          <a href="/" className="py-[15px] px-[23px] flex items-center gap-[10px] font-semibold no-underline text-black bg-white border-none rounded-lg transition[background-color] ease-linear duration-[0.4s] hover:bg-[#f46803] hover:text-[#fedcc5]">
            <LuCroissant className="text-[20px]"/> Croissant
          </a>
          <a href="/" className="py-[15px] px-[23px] flex items-center gap-[10px] font-semibold no-underline text-black bg-white border-none rounded-lg transition[background-color] ease-linear duration-[0.4s] hover:bg-[#f46803] hover:text-[#fedcc5]">
            <FaStroopwafel className="text-[20px]"/> Waffle
          </a>
          <a href="/" className="py-[15px] px-[23px] flex items-center gap-[10px] font-semibold no-underline text-black bg-white border-none rounded-lg transition[background-color] ease-linear duration-[0.4s] hover:bg-[#f46803] hover:text-[#fedcc5]">
            <PiCoffee className="text-[20px]"/> Coffee
          </a>
          <a href="/" className="py-[15px] px-[23px] flex items-center gap-[10px] font-semibold no-underline text-black bg-white border-none rounded-lg transition[background-color] ease-linear duration-[0.4s] hover:bg-[#f46803] hover:text-[#fedcc5]">
            <LuIceCream2 className="text-[20px]" /> Ice Cream
          </a>
        </div>

        <Products />

      </div>

      <div className="flex flex-col h-[100vh] px-[30px] pt-[30px] pb-[100px] gap-[30px] fixed w-[30%] ml-[70%]">
        <div className="flex justify-between items-center">
          <h2 className="text-[25px] leading-[1.2] font-bold">Current Order</h2>
          <button type="submit" className="py-2 px-3 text-xl border-none rounded-[5px] cursor-pointer bg-[#ebebeb] text-[black] transition[background-color] ease-linear duration-[0.4s] hover:bg-[#cccccc]">
            <Cog6ToothIcon className="w-6"/>
          </button>
        </div>

        <Carts /> 

        <div className="flex flex-col rounded-[5px] mt-[13px]">
          <div className="flex flex-col gap-2.5 p-5 rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[15px] rounded-br-[15px] bg-[#e4e4e4]">
            <p className="text-[16px] leading-[1.25] text-[#838383] flex justify-between">
              Subtotal <span id="subtotal" className="text-black font-semibold">$37.61</span>
            </p>
            <p className="text-[16px] leading-[1.25] text-[#838383] flex justify-between">
              Discount Sales <span id="discount" className="text-black font-semibold"> -$5.00</span>
            </p>
            <p className="text-[16px] leading-[1.25] text-[#838383] flex justify-between">
              Total sales tax <span id="total-sementara" className="text-black font-semibold">$2.25</span>
            </p>
          </div>
          <hr className="w-[94%] my-0 mx-auto border-[1px] border-dashed border-[#838383]"/>
          <p className="flex justify-between text-[20px] p-5 rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[4px] rounded-br-[4px] bg-[#e4e4e4] font-semibold">
            Total 
            <span id="total" className="font-[1000]"></span>
          </p>
        </div>

        <button className="text-[13.333px] leading-[1.25] text-white bg-[#ff7410] border-none rounded-[5px] p-[15px] cursor-pointer transition[background-color] ease-linear duration-[0.4s] hover:bg-[#fab581] hover:text-[#E8E8E8]">Continue To Payment</button>
      </div>
    </div>

  );
}
