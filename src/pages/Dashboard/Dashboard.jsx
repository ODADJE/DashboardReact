import React from 'react';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';
import Drawer from '../../components/Drawer';
import Menu from '../../components/Menu';

function Dashboard() {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Content />
      <Drawer>
        <Menu />
      </Drawer>
    </Wrapper>
  );
}

export default Dashboard;
