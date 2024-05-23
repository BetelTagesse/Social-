import React from "react";
import CustomPage from "./CustomPage";

// Since FirstPage doesn't use any props, we define it as an empty interface
interface FirstPageProps {}

const FirstPage: React.FC<FirstPageProps> = () => {
  return (
    <CustomPage
      title="SECURE BANK"
      description="This is the vulnerable application we will be trying to hack with"
      seconddescription="You can trust us with your money, we almost never get hacked."
    />
  );
};

export default FirstPage;
