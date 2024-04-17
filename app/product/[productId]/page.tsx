import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import ProductDescription from "../ProductDetails";
import ListRating from "./ListRating";

interface IPrams{
    productID?: string
}
const Product = ({ params } : {params: IPrams}) => {
   console.log('params', params);
   product
    return ( <div className="p-8">
        <Container>
            <ProductDescription product = {product}/>
            <div className="flex flex-col mt-20 gap-4">
                <div>Add Ratings</div>
                <ListRating product={product} />
            </div>
        </Container>
    </div> );
}
 
export default Product;