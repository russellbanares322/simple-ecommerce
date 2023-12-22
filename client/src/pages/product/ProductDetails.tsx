import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/productsApi";
import ProductDescriptions from "./ProductDescriptions";
import ProductImages from "./ProductImages";
import ProductImageViewer from "./ProductImageViewer";

const ProductDetails = () => {
  const { productId } = useParams();
  const { data } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  const productDescriptionsData = {
    title: data?.title,
    rating: data?.rating,
    price: data?.price,
    description: data?.description,
    quantity: 1,
  };

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const currentlyViewedImage = data?.images[selectedImageIndex];

  const handleSelectImageIndex = (index: number) => {
    setSelectedImageIndex(index);
  };

  const isImageSelected = (index: number) => {
    if (selectedImageIndex === index) {
      return true;
    }
    return false;
  };

  return (
    <div className="page-layout min-h-screen h-full mt-16">
      <div className="flex h-full gap-3">
        {/* Left */}
        <div className="w-96 p-1">
          <ProductImages
            handleSelectImageIndex={handleSelectImageIndex}
            images={data?.images}
            isImageSelected={isImageSelected}
          />
        </div>
        {/* Center */}
        <div className="w-full p-1">
          <ProductImageViewer currentlyViewedImage={currentlyViewedImage} />
        </div>
        {/* Right */}
        <div className="w-full p-1">
          <ProductDescriptions
            productDescriptionsData={productDescriptionsData}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
