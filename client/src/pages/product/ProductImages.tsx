type ProductImagesProps = {
  handleSelectImageIndex: (index: number) => void;
  images: string[] | undefined;
  isImageSelected: (index: number) => boolean;
};

const ProductImages = ({
  handleSelectImageIndex,
  images,
  isImageSelected,
}: ProductImagesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {images?.map((image, index) => (
        <img
          onClick={() => handleSelectImageIndex(index)}
          className={`h-16 w-16 object-cover rounded-md shadow-sm cursor-pointer ${
            isImageSelected(index) ? "border border-black" : "border-none"
          }`}
          key={index}
          src={image}
          alt={image}
        />
      ))}
    </div>
  );
};

export default ProductImages;
