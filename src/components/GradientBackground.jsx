const GradientBackground = () => {
  return (
    <div
      style={{
        background: "radial-gradient(circle at top left, rgba(0, 255, 200, 0.1), rgba(0, 0, 0, 0.1))",
        height: "18rem",
        width: "18rem",
        position: "absolute",
        top: "0",
        left: "0",
        overflow: "hidden",
      }}
    ></div>
  );
};

export default GradientBackground;
