import Heading from "./Heading";
import moment from "moment";
import { Rating } from "@mui/material";

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div>
      <Heading title="Product Review" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => (
            <div key={review.id} className="max-w-300px">
              <div className="flex gap-2 items-center">
              <div className="text-sm text-slate-500">{review.comment}</div>
                <div className="font-semibold">{review?.user.name}</div>
                <div className="font-light">{moment(review.createdDate).fromNow()}</div>
              </div>
              <div className="flex gap-2 items-center">
                <Rating value={review.rating} readOnly />
                
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListRating;
