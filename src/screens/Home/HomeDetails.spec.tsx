/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HomeDetails } from "./HomeDetails";
import { MOST_WANTED, BANNER_TITLE } from "./constants";
import { ThemeProvider } from "styled-components";
import Theme from "../../../style/Theme";
import productsMock from "../../utils/productsMock.json";

describe("Screens / <HomeDetails />", () => {
  it("render component", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <HomeDetails products={productsMock} />
      </ThemeProvider>
    );

   
    expect(screen.getByTestId("banner")).toBeInTheDocument();
    expect(screen.getAllByTestId("navigate-icon")).toHaveLength(2);
    expect(screen.getByText(MOST_WANTED)).toBeInTheDocument();
    expect(screen.getByText(BANNER_TITLE)).toBeInTheDocument();
  });
});
