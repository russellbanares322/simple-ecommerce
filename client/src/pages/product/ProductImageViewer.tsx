type ProductImageViewerProps = {
  currentlyViewedImage: string | undefined;
};

const ProductImageViewer = ({
  currentlyViewedImage,
}: ProductImageViewerProps) => {
  return (
    <img
      className="object-cover rounded-md h-[27rem] w-80 mx-auto"
      src={currentlyViewedImage}
      alt={currentlyViewedImage}
    />
  );
};

export default ProductImageViewer;
