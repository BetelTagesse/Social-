import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

const CustomTypography: React.FC<TypographyProps> = ({ variant, children, ...rest }) => {
  return (
    <Typography variant={variant} {...rest}>
      {children}
    </Typography>
  );
};

export default CustomTypography;
