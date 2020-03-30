/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, ReactNode } from "react"
import "./layout.css"
import { StylesProvider } from '@material-ui/core'
import { Global } from '@emotion/core'
import { headerHeight, mobiHeaderHeight } from '../common/site-variables'
import { useSpring } from 'react-spring'
import Cursor, { cursorSize } from './cursor'
import { useMediaQuery } from 'react-responsive'
import { Media } from '../responsive/media'
import Header from './header'
import ResponsiveView from '../responsive/view'
import Footer from './footer'

interface PropTypes {
  children: ReactNode;
}

const Layout = (props: PropTypes) => {

  const { children } = props;

  const [pointer, setPointer] = useState(false);  // Store custom cursor pointing state. if true cursor increase in size
  const isMobile = useMediaQuery({maxWidth: 1000});

  // returns custom cursor cordinates as array
  const cursorCoords = (x, y) => {
    return [x, y];
  }

  // React spring animation props and setters. One for main cursor and trail cursor
  const [spring, setSpring] = useSpring(() => ({xy: [0, 0], config: {mass: 10 , tension: 2000, friction: 140}}));
  const [spring2, setSpring2] = useSpring(() => ({xy: [0, 0], config: {mass: 10 , tension: 800, friction: 140}}));

  // tranisition styles
  const trans = (x?, y?) => `translateX(${x - (cursorSize.cursor / 2)}px) translateY(${y - cursorSize.cursor / 2}px)`; //main
  const trans2 = (x?, y?) => `translateX(${x - cursorSize.trail / 2}px) translateY(${y - cursorSize.trail / 2}px)`; //trailer
  const trans3 = (x?, y?) => `translateX(${x - cursorSize.pointer / 2}px) translateY(${y - cursorSize.pointer / 2}px)`; // Pointer


  const handleMouseMove = (e) => {
    if (isMobile) {
      return;
    }
    const event = e as MouseEvent;
    const target = event.target as HTMLElement;

    //Update react springs with new coordinates
    setSpring({xy: cursorCoords(event.pageX, event.pageY)})
    setSpring2({xy: cursorCoords(event.pageX, event.pageY)})

    if ( // Show Pointer if its a button or anchor
      target.tagName === 'BUTTON' || 
      target.parentElement.tagName === 'BUTTON' ||
      target.tagName === 'A' ||
      target.parentElement.tagName === 'A'
    ) {
      setPointer(true);
    } else {
      setPointer(false);
    }

    
  }

  return (
    <>
      <Media greaterThanOrEqual="lg">
        <Cursor transStyle={{transform: spring.xy.interpolate(trans)}} trail 
          transStyleTrail={{transform: spring2.xy.interpolate(pointer ? trans3 : trans2)}} pointerStyle={pointer} />
      </Media>
        
      <StylesProvider injectFirst>

        <Global styles={`
          
          html, body { width: 100%; height: 100%; overflow: hidden; margin: 0; padding: 0;}

          #___gatsby, #gatsby-focus-wrapper { width: 100%; height: 100%; overflow: hidden }

          .anchor {
            padding-top: ${isMobile ? mobiHeaderHeight : headerHeight};
          }
          
          .mainPageWrapper {
            position: relative;
            cursor: ${isMobile ? 'initial' : 'none'};
            width: 100%;
            height: 100%;
            overflow: hidden;

            main {
              position: relative;
              overflow-y: auto;
              scroll-behavior: smooth;
              height: 100%;
              padding-top: ${isMobile ? mobiHeaderHeight : headerHeight};
            }

          }
          
        `}/>

        <ResponsiveView render={isMobile => (
          <Header isMobile={isMobile} />
        )} />

        
        <div className="mainPageWrapper" onMouseMove={handleMouseMove}>
          
          <main>{children}</main>

          <ResponsiveView render={isMobile => (
            <Footer isMobile={isMobile} />
          )} />

        </div>

      </StylesProvider>
    </>
  )
}

export default Layout
