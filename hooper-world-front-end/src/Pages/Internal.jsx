import React from 'react';
import SidebarComponent from '../Components/SideBarComponent';

const Internal = ({ children }) => {
  return (
    <div className="d-flex">
      <SidebarComponent />
      <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default Internal;
