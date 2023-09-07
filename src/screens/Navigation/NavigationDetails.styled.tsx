import styled, { css } from "styled-components";

export const ContentContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.base};
    padding: ${theme.spacing.medium};
    overflow-x: hidden;
    max-width: 100%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 425px) {
      padding: ${theme.spacing.base};
    }
  `}
`;

export const NavigationHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing.base};

    @media screen and (max-width: 768px) {
      flex-direction: row;
    }
  `}
`;

export const SearchFilterWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 160px;
    border-radius: ${theme.spacing.small};
    background-color: ${theme.color.primary};
    position: relative;
    align-items: baseline;
    height: fit-content;

    img {
      position: absolute;
      right: ${theme.spacing.xxSmall};
      margin-top: 5px;
    }
  `}
`;

export const SearchFilter = styled.input`
  ${({ theme }) => css`
    padding: ${theme.spacing.xSmall};
    background-color: ${theme.color.primary};
    text-overflow: ellipsis;
    border-radius: ${theme.spacing.small};
    width: 160px;

    :focus {
      outline: none;
    }
  `}
`;

export const ProductGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${theme.spacing.base};

    @media screen and (min-width: 370px) and (max-width: 590px) {
      grid-template-columns: repeat(2, 1fr);
      gap: ${theme.spacing.small};
      padding: ${theme.spacing.xSmall} ${theme.spacing.zero};

      .card-wrapper {
        width: 120px;
      }
    }

    @media screen and (min-width: 591px) and (max-width: 799px) {
      grid-template-columns: repeat(3, 1fr);
      gap: ${theme.spacing.small};
    }

    @media screen and (min-width: 800px) and (max-width: 1180px) {
      grid-template-columns: repeat(4, 1fr);
      gap: ${theme.spacing.small};
    }
  `}
`;
