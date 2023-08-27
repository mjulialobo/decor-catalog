import styled from "styled-components";

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 32px;
`;

export const AboutText = styled.p`
  font-size: 16px;
`;

export const Phone = styled.p`
  font-size: 16px;
`;

export const Adress = styled.p`
  font-size: 16px;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const Images = styled.div`
  height: fit-content;
`;

export const StoreImage = styled.div`
  @media (max-width: 640px) {
    img {
      width: 350px;
      height: 200px;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 500px;
      height: 300px;
    }
  }
`;

export const OwnerImage = styled.div`
  position: relative;
  left: 50vw;
  bottom: 10vh;
  width: fit-content;

  img {
    border-radius: 50%;
  }

  @media (max-width: 640px) {
    left: 35vw;
    img {
      width: 100px;
      height: 100px;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 150px;
      height: 150px;
    }
  }
`;
