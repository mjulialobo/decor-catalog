import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10%;
    background-color: ${theme.color.primary};
    padding: ${theme.spacing.base};
    width: 150px;
    height: 250px;
    gap: ${theme.spacing.xSmall};

    &:hover {
      border: 1px solid ${theme.color.secondary};
    }

    @media screen and (max-width: 767px) {
      width: 120px;
      height: ${theme.spacing.wideXGLarge};
      font-size: ${theme.spacing.base};

      img {
        width: 100px;
        height: 50px;
      }
    }
  `}
`;
