import React, { useState, useEffect } from 'react'
import Sticky from 'react-sticky-el'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'


const StickyComponent = () => {
    const style = css(`
        height: 30vh;
        overflow: scroll;
    `);

    const [isFixed, setFixed] = useState(false);
    
    useEffect(() => {
        
    }, []);


    return (
        <div css={style}>
            

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Sticky topOffset={80}>
                <h1>I will stick</h1>
            </Sticky>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default StickyComponent
