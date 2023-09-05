/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NavigationDetails } from "./NavigationDetails";
import { ThemeProvider } from "styled-components";
import Theme from "../../../style/Theme";
import productsMock from "../../utils/productsMock.json";
import userEvent from "@testing-library/user-event";

describe("Screens / <NavigationDetails/>", () => {
  it("render component", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <NavigationDetails products={productsMock} />
      </ThemeProvider>
    );

    expect(screen.getByTestId("search-filter")).toBeInTheDocument();
    expect(screen.getByText("sala")).toBeInTheDocument();
  });

  it("filter products", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <NavigationDetails products={productsMock} />
      </ThemeProvider>
    );

    const searchFilter = screen.getByRole("textbox");

    expect(searchFilter).toBeInTheDocument();
    expect(screen.getAllByText("Mesa")).toHaveLength(2);
    expect(screen.getAllByText("poltrona")).toHaveLength(2);

    await userEvent.type(searchFilter, "m");

    expect(screen.getAllByText("Mesa")).toHaveLength(2);
    expect(screen.queryByText("poltrona")).not.toBeInTheDocument();
  });
});
