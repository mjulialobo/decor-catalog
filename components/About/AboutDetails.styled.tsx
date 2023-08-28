import styled from "styled-components";

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[16]};
  padding: ${(props) => props.theme.spacing[42]};
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    padding: ${(props) => props.theme.spacing[16]};
  }
`;

export const Text = styled.p<{$margin?: boolean;}>`
  font-size: ${(props) => props.theme.spacing[16]};
  margin-bottom: ${props=> props.$margin ? '10px' : '0'};
`;

export const SocialMedia = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing[16]};
`;

export const Images = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: 8rem;

  @media screen and (max-width: 767px) {
    margin-left: 12rem;
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
  top: 28.5rem;
  right: 5rem;

  img {
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    img {
      visibility: hidden;
    }
  }

  @media screen and (max-width: 768px) {
    right: 10rem;
    img {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (max-width: 1200px) {
    top: 16.5rem;

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
