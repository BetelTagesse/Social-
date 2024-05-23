// CustomButton.tsx
"use client";
import React, { ReactNode } from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      sx={{
        // backgroundColor: "transparent",
        borderRadius: "4px",
        padding: "8px 16px",
        // border: "1px solid #333",
        // color: "#333",
        // "&:hover": {
        //   backgroundColor: "#333",
        //   color: "#fff",
        // },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
