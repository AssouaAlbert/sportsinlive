import { styled } from "@mui/material";

const Form = styled("form", {
  shouldForwardProp: (prop) =>
    prop !== "variant" &&
    prop !== "color" &&
    prop !== "component" &&
    prop !== "onSubmit",
})(() => ({
 
}));

export default Form;
