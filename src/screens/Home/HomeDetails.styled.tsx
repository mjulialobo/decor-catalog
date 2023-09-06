import styled, { css } from "styled-components";

export const ContentContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.base};
    padding: ${theme.spacing.medium};
    overflow-x: hidden;
  `}
`;

export const ProductDisplay = styled.section`
  ${({ theme }) => css`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing.base};

    @media screen and (max-width: 1000px) {
      width: 60%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacing.base};

      a {
        grid-column: 2/-2;
        justify-self: end;
      }
    }
  `}
`;

export const ProductDisplayTextContent = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: ${theme.spacing.base};
    width: 200px;

    @media screen and (max-width: 1000px) {
      grid-column: 1/-1;
      left: 20%;
      position: relative;
      gap: ${theme.spacing.xxSmall};
    }
  `}
`;

export const ProductDisplayTitle = styled.h2`
  ${({ theme }) => css`
    border-bottom: 2px dotted;
    padding: ${theme.spacing.small};

    @media screen and (max-width: 1000px) {
      border-bottom: none;
    }
  `}
`;

export const Banner = styled.section`
  position: relative;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 757px) {
    flex-direction: column;
  }

  @media screen and (min-width: 758px) {
    img.banner {
      width: 700px;
      height: 400px;
    }
  }

  @media screen and (min-width: 1300px) {
    img.banner {
      width: 1000px;
      height: 600px;
    }
  }
`;

export const BannerTextContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 10%;
    background-color: ${theme.color.garden};
    width: 200px;
    height: 250px;
    position: absolute;
    right: -${theme.spacing.large};
    bottom: ${theme.spacing.zero};
    padding: ${theme.spacing.base};
    gap: ${theme.spacing.base};

    @media screen and (max-width: 757px) {
      width: 100%;
      height: fit-content;
      border-radius: ${theme.spacing.zero};
      position: relative;
      right: ${theme.spacing.zero};

      p {
        width: 300px;
        margin-left: 30%;
      }
    }
  `}
`;

export const BannerTitle = styled.h2`
  ${({ theme }) => css`
    border-bottom: 2px dotted;
    padding: ${theme.spacing.small};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.default};
  `}
`;
