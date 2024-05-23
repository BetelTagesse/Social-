// CustomTypography.tsx
"use client";
import React, { ReactNode } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface CustomTypographyProps extends TypographyProps {
  children: ReactNode;
}

const CustomTypography: React.FC<CustomTypographyProps> = ({ variant, children, ...rest }) => {
  return (
    <Typography variant={variant} {...rest}>
      {children}
    </Typography>
  );
};

export default CustomTypography;
