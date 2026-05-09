import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarMain from './LayoutUser/NavBar';
import Footer from './LayoutUser/Footer';

const UserLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#000' }}>
      <NavbarMain />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
