/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render,  screen } from "@testing-library/react";
import { Header } from "./Header";
import { ABOUT_US, CATALOG } from "./constants";

describe("Components / <Header />", () => {
  it("render component", async () => {
    render(<Header/>);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByText(CATALOG)).toBeInTheDocument();
    expect(screen.getByText(ABOUT_US)).toBeInTheDocument();
  });
});
