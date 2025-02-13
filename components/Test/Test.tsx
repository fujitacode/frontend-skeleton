type TestProps = {
  label: string;
  color?: "primary" | "secondary";
};

const Test: React.FC<TestProps> = ({ label, color = "primary" }) => {
  return (
    <div
      className={`px-6 py-3 rounded-lg text-xl font-semibold shadow-md ${
        color === "primary" ? "bg-blue-500 text-white" : "bg-gray-500 text-white"
      }`}
    >
      {label}
    </div>
  );
};

export default Test;
