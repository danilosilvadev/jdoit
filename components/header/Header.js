import React, { Component } from 'react';
import { Header, Button, Text } from 'react-native-elements';
import styled from 'styled-components';
import { TouchableHighlight } from 'react-native';

const Top = () => (
  <Header
    statusBarProps={{ barStyle: 'light-content' }}
    outerContainerStyles={{ backgroundColor: '#F47136' }}
  >
    <Logo>Worthit</Logo>
    <Nav>
      <CircleShapeView 
        height={24} 
        width={24}
      >
        <Text>5</Text>
      </CircleShapeView>
      <TouchableHighlight>
        <NavItem>Tasks</NavItem>
      </TouchableHighlight>
      <TouchableHighlight>
        <NavItem>Rewards</NavItem>
      </TouchableHighlight>
    </Nav>
  </Header>
)

const Logo = styled.Text`
  font-size: 20;
  color: white;
`

const Nav = styled.View`
  flex-direction: row;
`
const NavItem = styled.Text`
  margin-right: 20;
  font-size: 20;
  color: white;
`

const CircleShapeView = styled.View`
 background-color: white;
 border-radius: 12;
 justify-content: center;
 align-items: center;
 margin-right: 5;
`


export default Top