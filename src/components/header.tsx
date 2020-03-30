import React, { useState } from 'react'
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core'
import Logo from './logo'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Menu from '@material-ui/icons/Menu'
import Close from '@material-ui/icons/Close'
import { generateKey } from '../helper/key-generator'
import { useSpring, animated } from 'react-spring'
import { mobiHeaderHeight, headerHeight, theme } from '../common/site-variables'
import { Media } from '../responsive/media'

interface PropTypes {
  isMobile: boolean;
}

const Header = (props: PropTypes) => {
  const { isMobile } = props;
  const [isOpen, setOpen] = useState(false);

  const [spring, setSpring] = useSpring(() => ({opacity: 0, transform: 'scaleY(0)'}));

  const toggleMenu = () => {
    setOpen(!isOpen);
    setSpring({opacity: isOpen ? 0 : 1, transform: `scaleY(${isOpen ? 0 : 1})`});
  }

  const styles = css(`
    position: fixed;
    height: ${ isMobile ? mobiHeaderHeight : headerHeight};
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: white;
    box-shadow: 0px 2px 3px -1px rgba(0,0,0,0.1);
    z-index: 99;

    .toolBar {
      width: 100%;
      position: relative;
      padding: 0% 5%;
      justify-content: space-between;

      .links {
        min-width: 30%;

        a {
          color: #5D5E61;
          text-decoration: none;
          padding: 0 2%;
          font-size: 1rem;
        }
      }
    
    }

    .dropdown {
      position: absolute;
      width: inherit;
      height: calc(100vh - ${isMobile ? mobiHeaderHeight : headerHeight});
      left: 0;
      top: ${isMobile ? mobiHeaderHeight : headerHeight};
      background: ${theme.red};
      z-index: -1;
      padding: 0  0 5% 0;
      transform-origin: top;

      display: ${isMobile ? 'flex' : 'none'};
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      a {
        color: white;
        font-size: 2rem;
        text-decoration: none;
      }
    }

  `);
  
  return (
    <AppBar css={styles} className="navBar">
      <Toolbar className="toolBar">
        <a href="">Swizz Starter</a>

        {
          !isMobile && 
          <div className="links">
            <a href="">Source code</a>
            <a href="">Swizz Digital</a>
          </div>
        }

        { isMobile && <IconButton onClick={toggleMenu}> { isOpen ? <Close /> : <Menu /> } </IconButton>}
      </Toolbar>  

      <animated.div style={spring} className="dropdown">
        dropdown
      </animated.div>

    </AppBar>
  );
}

export default Header
