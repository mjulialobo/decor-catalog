/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";
import { ThemeProvider } from "styled-components";
import Theme from "../../../style/Theme";
import productsMock from '../../utils/productsMock.json'

describe("Components / <ProductCard/>", () => {
  it("render component", async () => {

    render(
      <ThemeProvider theme={Theme}>
        <ProductCard product={productsMock[0]} key={1} />
      </ThemeProvider>
    );

    expect(screen.getByTestId("product-image")).toBeInTheDocument();
    expect(screen.getByText(productsMock[0].name)).toBeInTheDocument();
    expect(screen.getByText(productsMock[0].description)).toBeInTheDocument();
  });
});
