import React, { useEffect } from 'react';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';
import Drawer from '../../components/Drawer';
import Menu from '../../components/Menu';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);
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
