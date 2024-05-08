"use client";
import Typography from "@mui/material/Typography";

const CustomTypography = ({ variant, children, ...rest }) => {
  return (
    <Typography variant={variant} {...rest}>
      {children}
    </Typography>
  );
};

export default CustomTypography;
