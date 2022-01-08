import styled from "styled-components";


export const Container = styled.div`
  margin: 220px auto;
  width: 50%;

  background-color: #00695c ;
  border-radius: 15px;
  padding: 40px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const DivTable = styled.div`
  padding: 5px 0;
  margin: 0 auto;

  color: #fff;

  width: 80%; 
`;

export const Table = styled.table`
margin: 0 auto;

border: 2px solid black;
padding: 20px;
`;

export const Row = styled.tr``;

export const Column = styled.td`
  border-bottom: 2px solid black;

  margin: 0;
`;

export const DivCalc = styled.div`
  display: grid;
  gap: 10px;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

export const Label = styled.label`
  font-size: 24px;
  color: #fff;

  grid-column: 1;

  align-self: end;

`;

export const Input = styled.input`
  padding: 5px;

  grid-column: 1;
`;

export const Button = styled.button`
  padding: 5px;

  background-color: #00897b;

  color: #fff;

  grid-column: 1;
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
  grid-row: 3;
  padding: 0;
`;





