import React, {useState, useEffect} from 'react';

import {Container, Title, DivTable, Table, Row, Column, DivCalc, Label, Input, Button, P1, P2} from './style/style'

function CalculatorImc () {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [value, setValue] = useState('');
  const [table, setTable] = useState('');

  function calculate() {

  if (height.includes('.' || ','))  {
    let value = parseFloat(weight / (height * height)).toFixed(2);
    setValue(value);
    if (height <= 0 || weight <= 0) {
      setTable('Os dados não podem ser iguais ou menores que zero');
    } else if (value <= 17) {
      setTable('Muito abaixo do peso');
    } else if (value <= 18.5) {
      setTable('Abaixo do peso');
    } else if (value <= 24.99) {
      setTable('Peso normal');
    } else if (value <= 29.99) {
      setTable('Acima do peso');
    } else if (value <= 34.99) {
      setTable('Obesidade I');
    } else if (value <= 39.99) {
      setTable('Obesidade II');
    } else if (value >= 40) {
      setTable('Obesidade III');
    }

  } else {
    let value = parseFloat(weight / (((height) / 100).toFixed(2) * ((height) / 100).toFixed(2))).toFixed(2);
    setValue(value)

    if (height <= 0 || weight <= 0) {
      setTable('Os dados não podem ser iguais ou menores que zero');
    } else if (value <= 17) {
      setTable('Muito abaixo do peso');
    } else if (value <= 18.5) {
      setTable('Abaixo do peso');
    } else if (value <= 24.99) {
      setTable('Peso normal');
    } else if (value <= 29.99) {
      setTable('Acima do peso');
    } else if (value <= 34.99) {
      setTable('Obesidade I');
    } else if (value <= 39.99) {
      setTable('Obesidade II');
    } else if (value >= 40) {
      setTable('Obesidade III');
    }
  }
    
  }

  return (
    <Container>
      <Title>Calculadora de Índice de Massa Corporal</Title>

      <DivTable>
        <Table>
          <Row>
            <Column>Resultado</Column>
            <Column>Situação</Column>
          </Row>

          <Row>
            <Column>Abaixo de 17</Column>
            <Column>Muito abaixo do peso</Column>
          </Row>
          <Row>
            <Column>Entre 17 e 18,49</Column>
            <Column>Abaixo do peso</Column>
          </Row>
          <Row>
            <Column>Entre 18,50 e 24,99</Column>
            <Column>Peso normal</Column>
          </Row>
          <Row>
            <Column>Entre 25 e 29,99</Column>
            <Column>Acima do peso</Column>
          </Row>
          <Row>
            <Column>Entre 30 e 34,99</Column>
            <Column>Obesidade I</Column>
          </Row>
          <Row>
            <Column>Entre 35 e 39,99</Column>
            <Column>Obesidade II (Severa)</Column>
          </Row> 
          <Row>
            <Column>Acima de 40</Column>
            <Column>Obesidade III (Mórbida)</Column>
          </Row>
        </Table>
      </DivTable>


    <DivCalc>
      <Label>Peso</Label>
      <Input type='number' onChange={e => setWeight(e.target.value)} alt='Peso' placeholder='Ex: 70'/>

      <Label>Altura</Label>
      <Input type='number' onChange={e => setHeight(e.target.value)} alt='Altura' placeholder='Ex: 1,70'/>  

      <Button onClick={calculate}>Calcular</Button>

        <P1>Resultado: {value}</P1>
        <P2>Avaliação: {table}</P2>
      </DivCalc>
    </Container>
  )
}

export default CalculatorImc;