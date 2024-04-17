"use client";

import SetColor from "@/app/components/products/SetColor";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";
import SetQuantity from "../components/products/SetQuantity";
import Button from "../components/Button";
import ProductImage from "../components/products/ProductImg";

interface ProductDescriptionProps {
  product: any;
}
export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: selectedImgType;
  quantity: number;
  price: number;
};

export type selectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: { ...product.images[0] },
        quantity: 1,
        price: product.price,
      });

      console.log('cartProduct', cartProduct);

      const handleColorSelect = useCallback(
        (value: selectedImgType) => {
          setCartProduct((prev) => ({ ...prev, selectedImg: value }));
        }, 
        []
      );

  const productRating =
    product.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product.reviews.length;

  const handleQtyIncrease = useCallback(() => {
    setCartProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  },[cartProduct])
  const handleQtyDecrease = useCallback(() => {
    if(cartProduct.quantity === 1) return;
    setCartProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  },[cartProduct])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImage cartProduct={cartProduct}
      product={product}
      handleColorSelect={handleColorSelect}/>
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">
          {product.description}
          <Horizontal />
          <div>
            <span className="font-semibold"> Category: </span>
            {product.category}
          </div>
          <div>
            <span className="font-semibold"> Brand: </span>
            {product.brand}
          </div>
          <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
            {product.inStock ? "Instock" : "Out of stock"}
          </div>
          <Horizontal />
          <SetColor
            cartProduct={cartProduct}
            images={product.images}
            handleColorSelect={handleColorSelect}
          />
          <Horizontal />
          <SetQuantity
          cartProduct={cartProduct}
          handleQtyIncrease={handleQtyIncrease}
          handleQtyDecrease={handleQtyDecrease}
        />
          <Horizontal />
          <div className="max-w-[300px]"><Button
          label="Add to cart"
          onClick={() => console.log('Add to cart')}
          /></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
