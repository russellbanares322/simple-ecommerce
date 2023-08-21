import React from "react";
import Skeleton from "react-loading-skeleton";

const DealsSkeletonLoader: React.FC = () => {
  return (
    <div className="mt-10">
      <Skeleton borderRadius={10} className="h-[17rem]" />
      <div className="flex items-center justify-between mt-2">
        <Skeleton
          className="rounded-md h-[2rem]"
          borderRadius={10}
          width={200}
        />
        <Skeleton
          className="rounded-md h-[2rem]"
          borderRadius={10}
          width={100}
        />
      </div>
    </div>
  );
};

export default DealsSkeletonLoader;
