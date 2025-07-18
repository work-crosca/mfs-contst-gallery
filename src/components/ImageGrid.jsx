import React, { useEffect, useState, useRef } from "react";
import { XMLParser } from "fast-xml-parser";
import LoadingIndicator from "./LoadingIndicator";
import LazyImageCard from "./LazyImageCard";
import "../styles/ImageGrid.css";

const BATCH_SIZE = 6;

const ImageGrid = () => {
  const [allImages, setAllImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const loadingRef = useRef(false);
  const baseUrl = import.meta.env.VITE_MINIO_BASE_URL;

  useEffect(() => {
    fetch("/bucket-list.xml")
      .then((res) => res.text())
      .then((xmlText) => {
        const parser = new XMLParser({ ignoreAttributes: false });
        const json = parser.parse(xmlText);
        const contents = json.ListBucketResult?.Contents || [];
        const files = Array.isArray(contents) ? contents : [contents];

        const parsed = files.map((item) => ({
          key: item.Key,
          size: item.Size,
          lastModified: item.LastModified,
        }));

        setAllImages(parsed);
        setVisibleImages(parsed.slice(0, BATCH_SIZE));
        setCurrentIndex(BATCH_SIZE);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (loadingRef.current || isLoading) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const nearBottom = scrollY + viewportHeight >= fullHeight - 100;

      if (nearBottom && currentIndex < allImages.length) {
        loadingRef.current = true;
        setIsLoading(true);

        setTimeout(() => {
          const nextBatch = allImages.slice(currentIndex, currentIndex + BATCH_SIZE);
          setVisibleImages((prev) => [...prev, ...nextBatch]);
          setCurrentIndex((prev) => prev + BATCH_SIZE);
          setIsLoading(false);
          loadingRef.current = false;
        }, 600);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allImages, currentIndex, isLoading]);

  return (
    <>
      <div className="masonry">
        {visibleImages.map((img) => (
          <LazyImageCard
            key={img.key}
            src={`${baseUrl}/${img.key}`}
            alt={img.key}
            date={img.lastModified}
          />
        ))}
      </div>

      {isLoading && <LoadingIndicator />}
    </>
  );
};

export default ImageGrid;