"use Client";

import { useCart } from "@/hooks/useCart";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";
import Heading from "../product/[productId]/Heading";
import Button from "../components/Button";

const CartClient = () => {
const {cartProducts} = useCart();  

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your Cart is Empty</div>
        <div>
            <Link href={"/"} className="
            text-slate-500 flex items-center gap-1 mt-2">
                <MdArrowBack />
            <span>Start Shopping</span>
            </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 mt-8 items-center">
        <div className="col-span-2 justify-self-start">Product</div>
        <div className="justify-self-center">Price</div>
        <div className="justify-self-center">Quantity</div>
        <div className="justify-self-end">Total</div>
        {cartProducts.map((item) => (
          <div key={item.id} className="col-span-2 justify-self-start">
            {item.name}
          </div>
        ))}
        
   <div className="item-start"> {/* Container for Clear Cart button */}
          <Button label="Clear Cart" onClick={() => {}} small outline />
        </div>
        <div className="w-full"></div> 
        <div className="justify-self-end"> {/* Container for Subtotal */}
          <div className="text-sm flex flex-col gap-1 items-start">
            <div className="flex justify-between w-full text-base font-semibold">
              <span>Subtotal</span>
              <span>0.00</span>
            </div>
            <p className="text-slate-500">Taxes and Shipping calculate at checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartClient;





