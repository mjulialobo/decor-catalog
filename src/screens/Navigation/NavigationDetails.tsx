import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Product } from "../../components/ProductCard/types";
import {
  ContentContainer,
  NavigationHeader,
  ProductGrid,
  SearchFilter,
  SearchFilterWrapper,
} from "./NavigationDetails.styled";
import { INPUT_PLACEHOLDER, NAV_TITLE } from "./constants";
import { NavHeader } from "../../components/NavHeader/NavHeader";

export type NavigationProps = {
  products: Product[];
};

export const NavigationDetails = ({ products }: NavigationProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productsList, setProductsList] = useState(products);

  useEffect(() => {
    const productsToShow = products.filter((product) => {
      const searchValue = searchTerm.toLowerCase();
      const productName = product.name ? product.name.toLowerCase() : "";

      return productName.startsWith(searchValue);
    });

    setProductsList(productsToShow);
  }, [products, searchTerm]);

  useEffect(() => {
    setSearchTerm("");
    setProductsList(products);
  }, [products]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <NavHeader />
      <ContentContainer>
        <NavigationHeader>
          <h1>{NAV_TITLE}</h1>
          <SearchFilterWrapper>
            <SearchFilter
              placeholder={INPUT_PLACEHOLDER}
              type="text"
              onChange={handleSearch}
              value={searchTerm}
              data-testid="search-filter"
            />
            <Image
              alt="searc"
              width={20}
              height={20}
              src={"https://cdn-icons-png.flaticon.com/128/3031/3031293.png"}
            />
          </SearchFilterWrapper>
        </NavigationHeader>
        <ProductGrid>
          {productsList.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ProductGrid>
      </ContentContainer>
    </>
  );
};
