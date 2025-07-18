import { ImSpinner } from "react-icons/im";

const LoadingIndicator = () => {
  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <ImSpinner
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