import nextConfigVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextConfigVitals,
  {
    rules: {
      "react-hooks/set-state-in-effect": "off",
    }
  }
];

export default eslintConfig;
