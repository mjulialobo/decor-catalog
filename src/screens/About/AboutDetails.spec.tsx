/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { AboutDetails } from "./AboutDetails";
import { ABOUT_TITLE, PHONE_NUMBER } from "./constants";
import { ThemeProvider } from "styled-components";
import Theme from "../../../style/Theme";

describe("Components / <Header />", () => {
  it("render component", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <AboutDetails />
      </ThemeProvider>
    );

    expect(screen.getByTestId("store")).toBeInTheDocument();
    expect(screen.getByTestId("owner")).toBeInTheDocument();
    expect(screen.getByText(ABOUT_TITLE)).toBeInTheDocument();
    expect(screen.getByText(PHONE_NUMBER)).toBeInTheDocument();
  });

  it("render component mobile", async () => {
    window.innerWidth = 500;
    fireEvent(window, new Event("resize"));

    render(
      <ThemeProvider theme={Theme}>
        <AboutDetails />
      </ThemeProvider>
    );

    expect(screen.getByTestId("store")).toBeInTheDocument();
    expect(screen.getByTestId("owner")).not.toBeVisible;
    expect(screen.getByText(ABOUT_TITLE)).toBeInTheDocument();
    expect(screen.getByText(PHONE_NUMBER)).toBeInTheDocument();
  });
});
