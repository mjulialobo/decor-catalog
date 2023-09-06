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

    HEADER_ITEMS.forEach((item) => expect(screen.getByText(item)).toBeInTheDocument());
  });
});
