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

    @media screen and (max-width: 768px) {
      padding: ${theme.spacing.base};
    }
  `}
`;

export const Text = styled.p<{ $margin?: boolean }>`
  ${({ theme, $margin }) => css`
    font-size: ${theme.font.default};
    margin-bottom: ${$margin ? theme.spacing.small : "0"};
  `}
`;

export const SocialMedia = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: ${theme.spacing.base};
  `}
`;

export const Images = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    margin-left: ${theme.spacing.wideXLarge};

    @media screen and (max-width: 767px) {
      margin-left: ${theme.spacing.wideXGLarge};
    }
  `}
`;

export const StoreImage = styled.div`
  display: block;

  img {
    border-radius: 10%;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 300px;
      height: 290px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    img {
      width: 600px;
      height: 400px;
    }
  }

  @media screen and (min-width: 1200px) {
    img {
      width: 900px;
      height: 600px;
    }
  }
`;

export const OwnerImage = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: fit-content;
    top: ${theme.spacing.largeRem};
    right: ${theme.spacing.xSmallRem};

    img {
      border-radius: 50%;
    }

    @media screen and (max-width: 768px) {
      img {
        visibility: hidden;
      }
    }

    @media screen and (max-width: 768px) {
      right: ${theme.spacing.smallRem};
      img {
        width: 150px;
        height: 150px;
      }
    }

    @media screen and (max-width: 1200px) {
      top: ${theme.spacing.baseRem};
      img {
        width: 200px;
        height: 150px;
      }
    }

    @media screen and (min-width: 1200px) {
      img {
        width: 200px;
        height: 150px;
      }
    }
  `}
`;
