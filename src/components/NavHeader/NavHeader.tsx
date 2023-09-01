import {
  NavHeaderWrapperFull,
  NavHeaderWrapper,
  LinkText,
} from "./NavHeader.styled";
import Link from "next/link";
import{HEADER_ITEMS, ALL}  from './constants'

export const NavHeader = () => {
  return (
    <NavHeaderWrapperFull>
      <NavHeaderWrapper>
        {HEADER_ITEMS.map((category) => (
          <>
            <Link
              href={
                category === ALL ? "/catalogo" : `/catalogo/${category}`
              }
            >
              <LinkText>{category}</LinkText>
            </Link>
          </>
        ))}
      </NavHeaderWrapper>
    </NavHeaderWrapperFull>
  );
};
