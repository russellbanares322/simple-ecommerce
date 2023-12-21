type ProductImageViewerProps = {
  currentlyViewedImage: string | undefined;
};

const ProductImageViewer = ({
  currentlyViewedImage,
}: ProductImageViewerProps) => {
  return <div>{JSON.stringify(currentlyViewedImage)}</div>;
};

export default ProductImageViewer;
