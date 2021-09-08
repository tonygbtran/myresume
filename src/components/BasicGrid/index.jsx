import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { Row, Col } from "react-styled-flexboxgrid";
import { theme, StyledGrid } from "./styles";

export const BasicGrid = (props) => (
  <ThemeProvider theme={theme}>
    <StyledGrid {...props}>{props.children}</StyledGrid>
  </ThemeProvider>
);

export const BasicRow = (props) => (
  <ThemeProvider theme={theme}>
    <Row {...props}>{props.children}</Row>
  </ThemeProvider>
);

export const BasicCol = (props) => (
  <ThemeProvider theme={theme}>
    <Col {...props}>{props.children}</Col>
  </ThemeProvider>
);

BasicGrid.propTypes = {
  // The maximum width of the grid container.
  maxWidth: PropTypes.oneOf([
    "320",
    "480",
    "768",
    "980",
    "1164",
    "1366",
    "auto",
  ]),
  // Create a responsive fixed width container or a full width container, spanning the entire width of your viewport. Default: false
  fluid: PropTypes.bool,
  // Rows of the grid inserted here, can also have other elements
  children: PropTypes.node,
  // New
  fullWidth: PropTypes.bool,
};

BasicGrid.defaultProps = {
  maxWidth: "1164",
};

BasicRow.propTypes = {
  //Use flex-direction: row-reverse. Default: false
  reverse: PropTypes.bool,
  // Align columns to the start of a row at the specified breakpoint.
  start: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  // Align columns to the center of a row at the specified breakpoint.
  center: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  // Align columns to the end of a row at the specified breakpoint.
  end: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  // Align columns to the top of a row at the specified breakpoint.
  top: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  // Align columns to the middle of a row at the specified breakpoint.
  middle: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  // Align columns to the bottom of a row at the specified breakpoint.
  bottom: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  // Align columns to have space around them in a row at the specified breakpoint.
  around: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  // Align columns to have space between them in a row at the specified breakpoint.
  between: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  // Move the row to the top of the grid at the specified breakpoint.
  first: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  // Move the row to the bottom of the grid at the specified breakpoint.
  last: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  // The columns within the rows can be anything at the moment, should lock this down to just columns.
  children: PropTypes.node,
};

BasicCol.propTypes = {
  // When True, enable auto sizing column
  // When False, hdie column for the breakpoint
  // When integer valye, it specify the column size on the grid (1 to 12)
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  // Offset of the column
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  // Use flex-direction: column-reverse. Default: false
  reverse: PropTypes.bool,
  // Content inside the column.
  children: PropTypes.node,
};
