import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import AnimatedCard from './animated-card';
import snippetImgUrl from '../static-images/snippet.png'
import { theme } from '../common/site-variables';
import { Media } from '../responsive/media';

const makeStyles = (isMobile: boolean) => {
  return css(`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5% 0;

    .textCont {
      display: flex;
      justify-content: center;
      color: ${theme.blue};
      //border: solid 2px #BEB9B9;
      width: 80%;
      padding: 2%;
      background: url(${snippetImgUrl});
      background-size: 100% 100%;
      box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
      transition: box-shadow 0.5s;
      will-change: transform;
      border: 15px solid white;

      p {
        text-align: center;
        width: 80%;
        font-size: ${isMobile ? 1 : 1.5}rem;
        line-height: 2rem;
      }
    }
  `);
}

interface PropTypes {
  children: string;
}

const Snippet = (props: PropTypes) => {
  return (
    <section>
      <Media lessThan="lg" css={makeStyles(true)}>
        <AnimatedCard className="textCont">
          <p>{props.children}</p>
        </AnimatedCard>
      </Media>

      <Media at="lg" css={makeStyles(false)}>
        <AnimatedCard className="textCont">
          <p>{props.children}</p>
        </AnimatedCard>
      </Media>
    </section>
  )
}

export default Snippet
