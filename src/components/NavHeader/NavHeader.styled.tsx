import styled from "styled-components";
export const NavHeaderWrapperFull = styled.section`
  position: relative;
  width: 100%;
  top: ${(props) => props.theme.spacing.zero};
  background-color: ${(props) => props.theme.color.primary};
  padding: ${(props) => props.theme.spacing.xSmall} ${(props) => props.theme.spacing.zero};
`;

export const NavHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing.zero} ${(props) => props.theme.spacing.medium};
  margin: ${(props) => props.theme.spacing.zero} ${(props) => props.theme.spacing.base};

  @media screen and (max-width: 425px) {
    width: 70%;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    color: black;
  }
`;

export const LinkText = styled.p`
  font-size: ${(props) => props.theme.font.default};
  text-transform: capitalize;
  font-weight: bold;
  color: black;
`;
