import React from "react";

// Define the types for props
interface CodeReviewProps {
  emailInput: string;
  passwordInput: string;
}

const CodeReview: React.FC<CodeReviewProps> = ({ emailInput, passwordInput }) => {
  return (
    <div>
      <p>Email: {emailInput}</p>
      <p>Password: {passwordInput}</p>
      {/* <FormPart/> */}
    </div>
  );
};

export default CodeReview;
