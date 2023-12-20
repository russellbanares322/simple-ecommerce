import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/productsApi";

const ProductDetails = () => {
  const { productId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="max-w-[1640px] section-padding min-h-screen h-full">
      {JSON.stringify(data)}
    </div>
  );
};

export default ProductDetails;
