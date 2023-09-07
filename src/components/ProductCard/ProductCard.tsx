import Image from "next/image";
import { CardWrapper } from "./ProductCard.styled";
import { ProductCardProps } from "./types";

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <CardWrapper className="card-wrapper">
        <Image
          src={product.image[0]}
          alt={product.name}
          width={150}
          height={100}
          data-testid='product-image'
        />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </CardWrapper>
    </>
  );
};
