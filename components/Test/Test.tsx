"use client";

import { useEffect, useState } from "react";

type TestProps = {
  color?: "primary" | "secondary";
};

const Test: React.FC<TestProps> = ({ color = "primary" }) => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to fetch data"));
  }, []);

  return (
    <div
      className={`px-6 py-3 rounded-lg text-xl font-semibold shadow-md ${color === "primary" ? "bg-blue-500 text-white" : "bg-gray-500 text-white"
        }`}
    >
      {message}
    </div>
  );
};

export default Test;