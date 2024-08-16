import React from "react";

interface SimpleButtonProps {
  variant?: "success" | "danger" | "warning";
  isDisabled?: boolean;
  children?: React.ReactNode;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
  variant = "success",
  isDisabled = false,
  children,
}) => {
  const buttonTheme = () => {
    switch (variant) {
      case "success":
        return "bg-green-600 hover:bg-green-700";
      case "danger":
        return "bg-red-600 hover:bg-red-700";
      case "warning":
        return "bg-yellow-600 hover:bg-yellow-700"; // Changed to yellow for the warning case
      default:
        break;
    }
  };

  return (
    <button
      disabled={isDisabled}
      className={
        buttonTheme() +
        " py-2 px-4 my-2 mx-2 rounded disabled:opacity-60 disabled:cursor-not-allowed"
      }
    >
      {children}
    </button>
  );
};

SimpleButton.defaultProps = {
  variant: "success",
  isDisabled: false,
};

export default SimpleButton;
