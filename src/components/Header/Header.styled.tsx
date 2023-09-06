import styled, { css } from "styled-components";

export const HeaderWrapperFull = styled.section`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    top: ${theme.spacing.zero};
    background-color: ${theme.color.header};
    padding: ${theme.spacing.xxSmall} ${theme.spacing.zero};
  `}
`;

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${theme.spacing.zero} ${theme.spacing.base};
  `}
`;

export const HeaderLinksContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    gap: ${theme.spacing.base};
    align-items: center;

    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }

    a:hover {
      color: #464444;
    }
  `}
`;
