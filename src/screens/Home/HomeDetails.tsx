import Image from "next/image";
import Link from "next/link";
import { Product } from "../../components/ProductCard/types";
import {
  Banner,
  Text,
  BannerTextContent,
  BannerTitle,
  ContentContainer,
  ProductDisplay,
  ProductDisplayTextContent,
  ProductDisplayTitle,
} from "./HomeDetails.styled";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import {
  BANNER_TEXT,
  BANNER_TITLE,
  MOST_WANTED,
  MOST_WANTED_COMPLEMENT,
  PRODUCTS_LIMIT,
} from "./constants";

export type HomeDetailsProps = {
  products: Product[];
};

export const HomeDetails = ({ products }: HomeDetailsProps) => {
  return (
    <ContentContainer>
      <Banner>
        <Image
          src="https://images.unsplash.com/photo-1623625434531-d130448273c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          data-testid="banner"
          width={800}
          height={400}
          alt="banner"
          className="banner"
        />
        <BannerTextContent>
          <BannerTitle>{BANNER_TITLE}</BannerTitle>
          <Text>{BANNER_TEXT}</Text>
          <Link href="/catalogo/jardim">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/318/318476.png"
              data-testid="navigate-icon"
              width={30}
              height={30}
              alt="navigate-icon"
            />
          </Link>
        </BannerTextContent>
      </Banner>
      <ProductDisplay>
        <ProductDisplayTextContent>
          <ProductDisplayTitle>{MOST_WANTED}</ProductDisplayTitle>
          <Text>{MOST_WANTED_COMPLEMENT}</Text>
        </ProductDisplayTextContent>
        {products.map(
          (product, index) =>
            index <= PRODUCTS_LIMIT && (
              <ProductCard key={index} product={product} />
            )
        )}
        <Link href="/catalogo">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/6318/6318306.png"
            data-testid="navigate-icon"
            width={60}
            height={60}
            alt="navigate-icon"
          />
        </Link>
      </ProductDisplay>
    </ContentContainer>
  );
};
