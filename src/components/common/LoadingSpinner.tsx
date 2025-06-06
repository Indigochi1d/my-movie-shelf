"use client";

interface SpinnerProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function LoadingSpinner({
  size = "medium",
  className = "",
}: SpinnerProps) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-[#ff2d55] rounded-full animate-spin`}
        role="status"
        aria-label="loading"
      />
    </div>
  );
}
