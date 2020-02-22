import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);  //handles auto link active when url is changed

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
        <Menu pointing secondary size="massive" color="teal" >
          <Menu.Item
            name='home'   //represents menu label "Home"
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link} 
            to="/"
          />

          <Menu.Item
            name='posts'
            active={activeItem === 'posts'}
            onClick={handleItemClick}
            as={Link} 
            to="/posts"
          />

          <Menu.Menu position='right'>
          <Menu.Item
            name= { 'logout ' + user.username }
            onClick={logout}
          />
          </Menu.Menu>
        </Menu>
  ) : (
    <Menu pointing secondary size="massive" color="teal">
    <Menu.Item
      name='home'   //represents menu label "Home"
      active={activeItem === 'home'}
      onClick={handleItemClick}
      as={Link} 
      to="/"
    />

    <Menu.Item
      name='posts'   
      active={activeItem === 'posts'}
      onClick={handleItemClick}
      as={Link} 
      to="/posts"
    />

    <Menu.Menu position='right'>
    <Menu.Item
      name='login'
      active={activeItem === 'login'}
      onClick={handleItemClick}
      as={Link}
      to="/login"
    />

      <Menu.Item
        name='register'
        active={activeItem === 'register'}
        onClick={handleItemClick}
        as={Link}
        to="/register"
      />
    </Menu.Menu>
  </Menu>

    )

    return menuBar;
  }

export default MenuBar;