import { useInView } from "react-intersection-observer";

const LazyImageCard = ({ src, alt, date }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="masonry-card" ref={ref}>
      {inView && (
        <img
          src={src}
          alt={alt}
          className="masonry-img"
          loading="lazy"
        />
      )}
      <p className="img-title">{alt}</p>
      <small className="img-date">{date}</small>
    </div>
  );
};

export default LazyImageCard;