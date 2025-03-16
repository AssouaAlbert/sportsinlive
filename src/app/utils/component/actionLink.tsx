import { styled } from "@mui/material";

const ActionLink = styled('span', {
  shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'color' && prop !== 'component'
})(({ theme }) => {
  const action = theme.palette.action;
  return {
    color: action.focus,
    textDecoration: 'underline',
    fontWeight: 500,
    cursor: 'pointer',
    '&:hover': {
      color: action.hover,
      textDecoration: 'underline',
    },
  };
});

// Define default values directly using the props in the component usage
ActionLink.displayName = 'ActionLink'; // For better debugging in React DevTools

export default ActionLink;
