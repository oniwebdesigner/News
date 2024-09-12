// components/Layout.js
import React from 'react';
import Footer from '../Components/Footer'; // Importo Footer-in

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main> {/* Përmbajtja e faqes */}
      <Footer /> {/* Footer-i shfaqet në fund */}
    </div>
  );
};


export default Layout;
