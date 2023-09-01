import styled from "styled-components";

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.base};
  padding: ${(props) => props.theme.spacing.medium};
  overflow-x: hidden;
  max-width: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    padding: ${(props) => props.theme.spacing.base};
  }
`;

export const NavigationHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.spacing.base};

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const SearchFilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 160px;
  border-radius: ${(props) => props.theme.spacing.small};
  background-color: ${(props) => props.theme.color.primary};
  position: relative;
  align-items: baseline;
  height: fit-content;

  img {
    position: absolute;
    right: ${(props) => props.theme.spacing.xxSmall};
    margin-top: 5px;
  }
`;

export const SearchFilter = styled.input`
  padding: ${(props) => props.theme.spacing.xSmall};
  background-color: ${(props) => props.theme.color.primary};
  text-overflow: ellipsis;
  border-radius: ${(props) => props.theme.spacing.small};
  width: 160px;

  :focus {
    outline: none;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${(props) => props.theme.spacing.base};

  @media screen and (min-width: 370px) and (max-width: 590px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${(props) => props.theme.spacing.small};
    padding: ${(props) => props.theme.spacing.xSmall} ${(props) => props.theme.spacing.zero};

    .card-wrapper{
      width: 120px;
    }
  }

  @media screen  and (min-width: 591px) and (max-width: 799px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${(props) => props.theme.spacing.small};
  }

  @media screen and (min-width: 800px) and (max-width: 1180px) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${(props) => props.theme.spacing.small};
  }
`;
