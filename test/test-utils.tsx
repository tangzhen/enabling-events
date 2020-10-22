import MomentUtils from "@date-io/moment";
import { MuiThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { render } from "@testing-library/react";
import * as React from "react";
import { MemoryRouter } from "react-router";
import { AppTheme } from "../src/AppTheme";

export const AllTheProviders = ({
  children
}: {
  children?: React.ReactNode;
}) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <MuiThemeProvider theme={AppTheme}>
        <MemoryRouter>{children}</MemoryRouter>
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

const customRender = (
  ui: any,
  options?: any,
) =>
  render(ui, {
    wrapper: (props) => (
      <AllTheProviders
        {...props}
      />
    ),
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
