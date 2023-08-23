import styled from "styled-components";

export const HeaderWrapperFull = styled.section`
  position: relative;
  width: 100%;
  top: 0;
  background-color: #f1f0f0;
  padding: 16px 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px;
`;

export const HeaderLinksContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;
  gap: 8px;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  a:hover {
    color: #464444;
  }
`;
