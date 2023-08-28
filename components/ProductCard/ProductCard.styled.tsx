import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  border-radius: 10%;
  background-color: #f1f0f0;
  padding: 16px;
  width: 150px;
  height: 250px;
  gap: 8px;

 &:hover{
    border: 1px solid #7c7878;
  }
`;