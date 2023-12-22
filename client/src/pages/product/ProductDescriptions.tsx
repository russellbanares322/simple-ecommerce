import { RiStarFill } from "react-icons/ri";

type TProductDescriptionsData = {
  title: string | undefined;
  rating: number | undefined;
  price: number | undefined;
  description: string | undefined;
  quantity: number | undefined;
};

type ProductDescriptionProps = {
  productDescriptionsData: TProductDescriptionsData;
};

const ProductDescriptions = ({
  productDescriptionsData,
}: ProductDescriptionProps) => {
  const { title, rating, price, description, quantity } =
    productDescriptionsData;
  return (
    <div className="flex flex-col items-start justify-start gap-2">
      <h1 className="font-medium text-3xl">{title}</h1>
      <div className="flex items-center justify-start gap-1">
        <RiStarFill className="text-yellow-400 text-lg" />
        <RiStarFill className="text-yellow-400 text-lg" />
        <RiStarFill className="text-yellow-400 text-lg" />
      </div>
      <p className="font-semibold text-2xl">${price?.toLocaleString()}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default ProductDescriptions;
