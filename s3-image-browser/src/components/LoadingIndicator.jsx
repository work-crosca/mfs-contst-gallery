import { FaSpinner } from "react-icons/fa";

const LoadingIndicator = () => {
  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <FaSpinner
        style={{
          fontSize: "2rem",
          color: "#990ae3",
          animation: "spin 1s linear infinite",
        }}
      />
      <p style={{ marginTop: "0.5rem" }}>Se încarcă mai multe imagini...</p>
    </div>
  );
};

export default LoadingIndicator;