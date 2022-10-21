import styled from "@emotion/styled";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;      
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 5px;
  width: 250px;
  outline: none;
  border: 1px solid #000000;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),
              0 5px 5px rgba(0, 0, 0, 0.25);
`;