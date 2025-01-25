import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageCard from "../imagecard/ImageCard";
import images from "../../utils/loadImages";

function Gallery() {
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 6));
  const [hasMore, setHasMore] = useState(true);

  const loadMoreImages = () => {
    console.log("Loading more images..."); // Debugging: Log when the function is called
    if (visibleImages.length >= images.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setVisibleImages((prev) => [
        ...prev,
        ...images.slice(prev.length, prev.length + 6),
      ]);
    }, 1000);
  };

  return (
    <InfiniteScroll
      dataLength={visibleImages.length}
      next={loadMoreImages}
      hasMore={hasMore}
      loader={<h4 className="text-white text-center py-4">Loading...</h4>}
      endMessage={<p className="text-white text-center py-4">No more images</p>}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {visibleImages.map((image, index) => (
          <ImageCard
            key={index}
            image={{ id: index, src: image }}
            onLike={() => {}}
            onComment={() => {}}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default Gallery;
