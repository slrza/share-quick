"use client";

import { useRouter } from "next/navigation";

const GetStartedButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <button
      onClick={handleClick}
      className="btn text-white font-medium"
      style={{ backgroundColor: "#266dda" }}
    >
      Get Started
    </button>
  );
};

export default GetStartedButton;
