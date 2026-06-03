import React from "react";

// 1. Define the props interface, inheriting standard div attributes
interface TextContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "narrow" | "wide" | "standard";
}

// 2. Build the component
export const TextContainer: React.FC<TextContainerProps> = ({
  children,
  variant = "standard",
  className = "",
  ...props
}) => {
  // Define styles or classes based on variants
  const maxWidths = {
    narrow: "600px",
    standard: "800px",
    wide: "1124px",
  };

  return (
    <div
      style={{
        maxWidth: maxWidths[variant],
        margin: "0 auto",
        padding: "0 16px",
        lineHeight: "1.6",
        width: "95%",
        ...props.style,
      }}
      className={`text-container ${className}`}
      {...props} // Spreads native attributes like id, onClick, data-*
    >
      {children}
    </div>
  );
};
