/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NavigationDetails } from "./NavigationDetails";
import { ThemeProvider } from "styled-components";
import Theme from "../../../style/Theme";

describe("Screens / <NavigationDetails/>", () => {

  it("render component", async () => {
    render(
      <ThemeProvider theme={Theme}>
        
      </ThemeProvider>

      //confere se tem 1 produto, titulo, input e rotas
    );
  });

  it("filter products", async () => {
    render(
      <ThemeProvider theme={Theme}>
        
      </ThemeProvider>

      //confere se tem 1 produto
      // clica e filtra
      // vê se ficou só o outro
    );
  });

  it("navigates through categories", async () => {
    render(
      <ThemeProvider theme={Theme}>
        
      </ThemeProvider>

      //clica, vê se ficou só um tipo de item
    );
  });
});
