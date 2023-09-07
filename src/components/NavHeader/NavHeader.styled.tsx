import styled, { css } from "styled-components";
export const NavHeaderWrapperFull = styled.section`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    top: ${theme.spacing.zero};
    background-color: ${theme.color.primary};
    padding: ${theme.spacing.xSmall} ${theme.spacing.zero};
  `}
`;

export const NavHeaderWrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing.zero} ${theme.spacing.medium};
    margin: ${theme.spacing.zero} ${theme.spacing.base};

    @media screen and (max-width: 425px) {
      width: 70%;
    }

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        color: black;
      }
    }
  `}
`;

export const LinkText = styled.p`
  ${({ theme }) => css`
  font-size: ${theme.font.default};
  text-transform: capitalize;
  font-weight: bold;
  color: black;
  `}
`;
