/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NavHeader } from "./NavHeader";
import { HEADER_ITEMS } from "./constants";
import { ThemeProvider } from "styled-components";
import Theme from "../../../style/Theme";

describe("Components / <NavHeader />", () => {

  it("render component", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <NavHeader />
      </ThemeProvider>
    );

    expect(screen.getByText(HEADER_ITEMS[0])).toBeInTheDocument();
    expect(screen.getByText(HEADER_ITEMS[1])).toBeInTheDocument();
    expect(screen.getByText(HEADER_ITEMS[2])).toBeInTheDocument();
    expect(screen.getByText(HEADER_ITEMS[3])).toBeInTheDocument();
    expect(screen.getByText(HEADER_ITEMS[4])).toBeInTheDocument();
  });
});
