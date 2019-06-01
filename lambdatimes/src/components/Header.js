import React from 'react';
import styled from "styled-components";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


const Header = () => {
  return (
    <HeaderStyle className="">
      <HeaderStyleSpan><HeaderStyleSpanDate className="">SMARCH 32, 2018</HeaderStyleSpanDate></HeaderStyleSpan>
      <HeaderStyleH1>Lambda Times</HeaderStyleH1>
      <HeaderStyleSpan><HeaderStyleSpanTemp className="">98°</HeaderStyleSpanTemp> </HeaderStyleSpan>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const HeaderStyleH1 = styled.div `
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const HeaderStyleSpan = styled.div `
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const HeaderStyleSpanDate = styled.div `
  margin-left: 25px;
  flex: 1;
`;

const HeaderStyleSpanTemp = styled.div `
.header .temp {
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;


export default Header