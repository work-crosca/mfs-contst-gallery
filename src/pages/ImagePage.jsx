import { useParams, Link } from "react-router-dom";
import "../styles/ImagePage.css";
const baseUrl = import.meta.env.VITE_MINIO_BASE_URL;

export default function ImagePage() {
  const { filename } = useParams();
  const imageUrl = `${baseUrl}/${filename}`;

  return (
    <div style={{width: "100%", display: "flex", justifyContent: "center", boxSizing: "border-box"}}>
      <div className="image-page">
        <div className="image-card">
          <img src={imageUrl} alt={filename} className="image-full" />
          <p className="image-name">{filename}</p>
          <Link to="/" className="back-button">
            ← Înapoi la galerie
          </Link>
        </div>
      </div>
    </div>
  );
}
