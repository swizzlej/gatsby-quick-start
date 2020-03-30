import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useSpring, animated } from 'react-spring';

export const cursorSize = {
    cursor: 8,
    trail: 30,
    pointer: 80,
}

const styles = css(`
    position: absolute;
    width: ${cursorSize.cursor}px;
    height: ${cursorSize.cursor}px;
    border-radius: ${cursorSize.cursor / 2}px;
    background-color: #024D94;
    z-index: 1000;
    pointer-events: none;
    transform-origin: center;
`);

const styleTrails = css(`
    width: ${cursorSize.trail}px;
    height: ${cursorSize.trail}px;
    border-radius: ${cursorSize.trail / 2}px;
    background-color: #EE1317;
    opacity: .7;
    z-index: 999;
`);

const stylePointer = css(`
    width: ${cursorSize.pointer}px;
    height: ${cursorSize.pointer}px;
    border-radius: ${cursorSize.pointer / 2}px;
    opacity: .5;
    animation: grow;
    animation-duration: 2s;

    @keyframes grow {
        from {opacity: .3}
        to {opacity: .5}
    }
`);

interface PropTypes {
    transStyle: {};
    transStyleTrail?: {};
    trail?: boolean;
    pointerStyle?: {};
}

const Cursor = (props: PropTypes) => {

    return (
        <div>
            <animated.div css={styles} style={props.pointerStyle ? {display: 'none'} : props.transStyle} />
            { 
                props.trail && 
                <animated.div  css={props.pointerStyle ? [styles, styleTrails, stylePointer] : [styles, styleTrails]} 
                    style={props.transStyleTrail} 
                /> 
            }
        </div>
    )
}

export default Cursor
