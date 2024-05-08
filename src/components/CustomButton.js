// "use client";

import Button from "@mui/material/Button";

const CustomButton = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      sx={{
        backgroundColor: "transparent",
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
