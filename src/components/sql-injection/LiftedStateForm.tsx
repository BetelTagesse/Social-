// import React, { useState } from "react";
// import FormPart from "./FormPart";
// import CodeReview from "../code_review";

// const LiftedStateForm = () => {
//   const [emailInput, setEmailInput] = useState("");
//   const [passwordInput, setPasswordInput] = useState("");

//   const handleEmailChange = (event) => {
//     setEmailInput(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPasswordInput(event.target.value);
//   };

//   return (
//     <div>
//       <FormPart
//         emailInput={emailInput}
//         passwordInput={passwordInput}
//         onEmailChange={handleEmailChange}
//         onPasswordChange={handlePasswordChange}
//       />
//       <CodeReview emailInput={emailInput} passwordInput={passwordInput} />
//     </div>
//   );
// };

// export default LiftedStateForm;