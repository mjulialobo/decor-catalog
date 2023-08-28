/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";

describe("Components / <Header />", () => {
  it("render component", async () => {
    const productMock = {
      name: "Poltrona vermelha",
      description:
        "Luxuosa poltrona vermelha. perfeita pra adicionar uma cor ao ambiente.",
      height: 9,
      width: 38,
      depth: 31,
      category: "sala",
      type: "poltronas e cadeiras",
      weight: 70,
      createdAt: 1693169840,
      color: "vermelho",
      image: [
        "https://img.freepik.com/free-vector/chair-realistic-illustration_1284-9507.jpg?w=740&t=st=1693170072~exp=1693170672~hmac=8fb283807d3950aefa916d7536b44604afa0ed94088172e309814001dd9d47be",
      ],
      id: "2",
    };

    render(<ProductCard product={productMock} key={1} />);

    expect(screen.getByTestId("product-image")).toBeInTheDocument();
    expect(screen.getByText(productMock.name)).toBeInTheDocument();
    expect(screen.getByText(productMock.description)).toBeInTheDocument();
  });
});
