import React from 'react';
import { Card } from 'react-bootstrap';
import { FaBars, FaCog, FaInbox, FaPowerOff, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

function Sidebar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <p color="blue-gray">
          Sidebar
        </p>
      </div>
      <ul>
        <ListItem icon={<FaBars/>} className='text-red-700'>Dashboard</ListItem>
        <ListItem icon={<FaShoppingCart/>}>E-Commerce</ListItem>
        <ListItem icon={<FaInbox/>}>
          Inbox
          <span className="ml-2 badge rounded-pill bg-primary">14</span>
        </ListItem>
        <ListItem icon={<FaUserCircle/>}>Profile</ListItem>
        <ListItem icon={<FaCog/>}>Settings</ListItem>
        <ListItem icon={<FaPowerOff/>}>Log Out</ListItem>
      </ul>
    </Card>
  );
}

function ListItem({ icon, children }) {
  return (
    <li className="flex items-center py-2">
        <p className='text-red-500'>{icon}</p>
     <p className='text-red-500'>{children}</p>
     
    </li>
  );
}

export default Sidebar;
