import styled from "styled-components";

export const HeaderWrapperFull = styled.section`
  position: relative;
  width: 100%;
  top: ${(props) => props.theme.spacing.zero};
  background-color:${(props) => props.theme.color.primary};
  padding: ${(props) => props.theme.spacing.xSmall} ${(props) => props.theme.spacing.zero};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.theme.spacing.zero} ${(props) => props.theme.spacing.base};
`;

export const HeaderLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: ${(props) => props.theme.spacing.base};
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
