import styled from "styled-components";
import { Grid } from "react-styled-flexboxgrid";

export const StyledGrid = styled(Grid)`
  max-width: ${(props) =>
    props.fullWidth
      ? "100%"
      : !isNaN(parseInt(props.maxWidth, 10))
      ? props.maxWidth + "px"
      : "100%"};
  margin: 0 auto;
  transition: max-width 0.2s;
`;

export const theme = {
  flexboxgrid: {
    gutterWidth: 3, // rem (30px)
    outerMargin: 1.5, // rem (15px)
    container: {
      sm: 73.6, // rem - 736px
      md: 97.6, // rem - 976px
      lg: 120, //rem - 1200px
    },
    breakpoints: {
      xs: 0,
      sm: 48, // em - 480px
      md: 76.8, // em - 768px
      lg: 96, // em - 960px
    },
  },
};
