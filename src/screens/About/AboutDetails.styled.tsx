import styled from "styled-components";

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.base};
  padding: ${(props) => props.theme.spacing.medium};
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    padding: ${(props) => props.theme.spacing.base};
  }
`;

export const Text = styled.p<{ $margin?: boolean }>`
  font-size: ${(props) => props.theme.font.default};
  margin-bottom: ${(props) =>
    props.$margin ? props.theme.spacing.small : "0"};
`;

export const SocialMedia = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing.base};
`;

export const Images = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: ${(props) => props.theme.spacing.wideXLarge};

  @media screen and (max-width: 767px) {
    margin-left: ${(props) => props.theme.spacing.wideXGLarge};
  }
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
  position: relative;
  height: fit-content;
  top: ${(props) => props.theme.spacing.largeRem};
  right: ${(props) => props.theme.spacing.xSmallRem};

  img {
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    img {
      visibility: hidden;
    }
  }

  @media screen and (max-width: 768px) {
    right: ${(props) => props.theme.spacing.smallRem};
    img {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (max-width: 1200px) {
    top: ${(props) => props.theme.spacing.baseRem};
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
`;
