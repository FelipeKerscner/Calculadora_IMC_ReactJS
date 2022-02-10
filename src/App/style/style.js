import styled from "styled-components";


export const Container = styled.section`
  margin: 80px auto;
  width: 50%;
  background-color: #310349 ;
  border-radius: 25px;
  padding: 30px;
`;

export const Header = styled.header`
  text-align: center;
  margin-top: 80px;
`;

export const DivTable = styled.div`
  padding: 5px 0;
  margin: 20px auto;
  color: #fff;
  width: 80%; 
`;

export const Table = styled.table`
margin: 0 auto;
width: 80%;
border: 2px solid #e5b6fd;
padding: 20px;
`;

export const Row = styled.tr`
  line-height: 28px;
`;

export const Column = styled.td`
  border-bottom: 2px solid #e5b6fd;
  margin: 0;
`;

export const DivCalc = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

export const Label = styled.label`
  font-size: 22px;
  color: #fff;
  grid-column: 1;
  align-self: end;
`;

export const Input = styled.input`
  padding: 5px;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 0 8px;
  grid-column: 1;
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
`;


export const P1 = styled.p`
  font-size: 18px;
  color: #fff;
  grid-column: 2;
  grid-row: 2;
  padding: 0;
`;

export const P2 = styled.p`
  font-size: 18px;
  color: #fff;
  grid-column: 2;
  grid-row: 4;
  padding: 0;
`;

export const Error = styled.p`
  color: #fff;
`