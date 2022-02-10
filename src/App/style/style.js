import styled from "styled-components";

export const Container = styled.section`
  margin-top: 150px;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  overflow-y: none;
  overflow-x: none;
  padding: 0 8px;

  @media (max-width: 450px) {
    margin-top: 30px;
  }
`

export const ContainerCalc = styled.div`
  margin: 20px auto;
  max-width: 700px;
  background-color: #310349 ;
  border-radius: 25px;
  padding: 30px;

  @media (max-width: 450px) {
    width: 100%;
    padding: 15px;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-top: 30px;
  width: 100%;

  @media (max-width: 450px) {
    font-size: 22px;
    margin: 0 auto;
    width: 100%;
  }
`;

export const DivTable = styled.div`
  padding: 5px 0;
  margin: 20px auto;
  color: #fff;
  width: 100%; 

  @media (max-width: 450px) {
    font-size: 13px;
  }
`;

export const Table = styled.table`
margin: 0 auto;
width: 100%;
border: 2px solid #e5b6fd;
padding: 20px;

@media (max-width: 450px) {
  height: 100%;
  padding: 10px;
}
`;

export const Row = styled.tr`
  line-height: 28px;

  @media (max-width: 450px) {
    line-height: 20px;
  }
`;

export const Column = styled.td`
  border-bottom: 2px solid #e5b6fd;
  margin: 0;
  width: 50%;
  @media (max-width: 450px) {
    
  }
`;

export const DivCalc = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Label = styled.label`
  font-size: 22px;
  color: #fff;
  grid-column: 1;
  align-self: end;

  @media (max-width: 450px) {

  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 2px 8px;
  grid-column: 1;

  @media (max-width: 450px) {
    padding: 2px 8px;
    height: 24px;
  }
`;

export const Button = styled.button`
  padding: 5px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: #9411d7;
  color: #fff;
  grid-column: 1;

  &:hover {
    background: #d286f8;
  }

  @media (max-width: 450px) {
    
  }
`;


export const P1 = styled.p`
  font-size: 18px;
  color: #fff;
  grid-column: 2;
  grid-row: 2;
  padding: 0;

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const P2 = styled.p`
  font-size: 18px;
  color: #fff;
  grid-column: 2;
  grid-row: 4;
  padding: 0;

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const Error = styled.p`
  color: #fff;
  margin-top: 16px;
  @media (max-width: 450px) {
    font
  }
`