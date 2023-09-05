import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
  background-color: ${(props) => props.theme.color.primary};
  padding: ${(props) => props.theme.spacing.base};
  width: 150px;
  height: 250px;
  gap: ${(props) => props.theme.spacing.xSmall};

  &:hover {
    border: 1px solid ${(props) => props.theme.color.secondary};
  }

  @media screen and (max-width: 767px) {
    width: 120px;
    height: ${(props) => props.theme.spacing.wideXGLarge};
    font-size: ${(props) => props.theme.spacing.base};

    img {
      width: 100px;
      height: 50px;
    }
  }
`;
