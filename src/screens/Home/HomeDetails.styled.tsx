import styled from "styled-components";

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.base};
  padding: ${(props) => props.theme.spacing.medium};
  overflow-x: hidden;
`;

export const ProductDisplay = styled.section`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing.base};

  @media screen and (max-width: 1000px) {
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${(props) => props.theme.spacing.base};

    a {
      grid-column: 2/-2;
      justify-self: end;
    }
  }
`;

export const ProductDisplayTextContent = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: ${(props) => props.theme.spacing.base};
  width: 200px;

  @media screen and (max-width: 1000px) {
    grid-column: 1/-1;
    left: 20%;
    position: relative;
    gap: ${(props) => props.theme.spacing.xxSmall};
  }
`;

export const ProductDisplayTitle = styled.h2`
  border-bottom: 2px dotted;
  padding: ${(props) => props.theme.spacing.small};

  @media screen and (max-width: 1000px) {
    border-bottom: none;
  }
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
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10%;
  background-color: ${(props) => props.theme.color.garden};
  width: 200px;
  height: 250px;
  position: absolute;
  right: -${(props) => props.theme.spacing.large};
  bottom: ${(props) => props.theme.spacing.zero};
  padding: ${(props) => props.theme.spacing.base};
  gap: ${(props) => props.theme.spacing.base};

  @media screen and (max-width: 757px) {
    width: 100%;
    height: fit-content;
    border-radius: ${(props) => props.theme.spacing.zero};
    position: relative;
    right: ${(props) => props.theme.spacing.zero};

    p {
      width: 300px;
      margin-left: 30%;
    }
  }
`;

export const BannerTitle = styled.h2`
  border-bottom: 2px dotted;
  padding: ${(props) => props.theme.spacing.small};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.font.default};
`;
