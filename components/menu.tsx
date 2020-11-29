import React from 'react';
import styled from 'styled-components/native';
import SIZES from '../utils/sizes'
import Clock from './clock'
import Cal from './cal'
import { ProgressCircle } from 'react-native-svg-charts'

export default function Menu() {
  return(
    <Row>
      <Icon><Clock /></Icon>
      <Icon><Cal type='week' /></Icon>
      <Icon><Cal type='month' /></Icon>
      <Icon><Cal type='year' /></Icon>
      <Icon>
        <ProgressCircle 
          style={{ height: SIZES.largeText }} 
          progress={0.7} 
          strokeWidth={5}
          progressColor={'rgb(134, 255, 244)'} 
        />
      </Icon>
    </Row>
  )
}

const Row = styled.View`
  display: flex;
  width: 100%;
  height: ${SIZES.largeText}px;
  margin-bottom: ${SIZES.mediumText}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Icon = styled.Text`
  height: ${SIZES.largeText}px;
  display: flex;
  flex: 1;
`
