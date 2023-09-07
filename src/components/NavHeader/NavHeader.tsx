import {
  NavHeaderWrapperFull,
  NavHeaderWrapper,
  LinkText,
} from "./NavHeader.styled";
import Link from "next/link";
import { HEADER_ITEMS, ALL } from "./constants";

export const NavHeader = () => {
  return (
    <NavHeaderWrapperFull>
      <NavHeaderWrapper>
        {HEADER_ITEMS.map((category, index) => (
          <Link
            href={category === ALL ? "/catalogo" : `/catalogo/${category}`}
            key={index}
          >
            <LinkText>{category}</LinkText>
          </Link>
        ))}
      </NavHeaderWrapper>
    </NavHeaderWrapperFull>
  );
};
