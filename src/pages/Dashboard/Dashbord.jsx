import React from 'react';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';

function Dashbord() {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Content />
    </Wrapper>
  );
}

export default Dashbord;
