import React from "react";
import Skeleton from "react-loading-skeleton";
import { TDealsSkeletonProps } from "./types";

const DealsSkeletonLoader: React.FC<TDealsSkeletonProps> = ({
  loaderLength,
}) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {Array.from({ length: loaderLength }).map((_, index) => (
        <div key={index} className="mt-10">
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
          <Skeleton className="rounded-md h-[1rem] mt-2" borderRadius={10} />
          <Skeleton
            className="rounded-md h-[1.5rem] mt-2"
            borderRadius={10}
            width={200}
          />
          <Skeleton
            className="rounded-md h-[2.8rem] mt-2"
            borderRadius={20}
            width={150}
          />
        </div>
      ))}
    </div>
  );
};

export default DealsSkeletonLoader;
