import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import ProductDescription from "../ProductDetails";

interface IPrams{
    productID?: string
}
const Product = ({ params } : {params: IPrams}) => {
   console.log('params', params);
   product
    return ( <div className="p-8">
        <Container>
            <ProductDescription product = {product}/>
        </Container>
    </div> );
}
 
export default Product;