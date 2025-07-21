import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { MdOutlineMoreHoriz } from "react-icons/md";

const formatDate = (d) =>
  new Date(d).toLocaleDateString("ro-RO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const LazyImageCard = ({ src, alt, date }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const fileKey = decodeURIComponent(src.split("/").pop());

  return (
    <div className="masonry-card" ref={ref}>
      {inView && (
        <div className="image-wrapper">
          <img src={src} alt={alt} className="masonry-img" loading="lazy" />
          <Link
            to={`/image/${encodeURIComponent(fileKey)}`}
            className="open-icon"
            title="Deschide imaginea"
          >
            <MdOutlineMoreHoriz />
          </Link>
        </div>
      )}
      <p className="img-title">{alt}</p>
      <small className="img-date">{formatDate(date)}</small>
    </div>
  );
};

export default LazyImageCard;