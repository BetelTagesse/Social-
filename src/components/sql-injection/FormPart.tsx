import React, { useState, ChangeEvent } from "react";
import { Box, TextField, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import CodeReview from "./CodeReview";

// Define the types for props
interface FormPartProps {}

const FormPart: React.FC<FormPartProps> = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Username:", emailInput);
    console.log("Password:", passwordInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          fullWidth
          onChange={handleEmailChange}
          sx={{ my: 1 }}
        />
        {emailInput}
        <TextField
          label="Password"
          fullWidth
          type="password"
          onChange={handlePasswordChange}
          sx={{ my: 1 }}
        />
        {passwordInput}
        <CustomButton type="submit"  fullWidth sx={{ mt: 2 }}>
          Log in
        </CustomButton>
      </form>
      <Box>
        <CodeReview emailInput={emailInput} passwordInput={passwordInput} />
      </Box>
    </div>
  );
};

export default FormPart;
