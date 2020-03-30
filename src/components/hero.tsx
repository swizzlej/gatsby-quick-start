import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { headerHeight } from '../common/site-variables'
import { Button, Grid } from '@material-ui/core'
import ambulance from '../static-images/ambulance.jpg'

const Hero = () => {
    const styles = css(`
        display: flex;
        align-items: center;
        width: 100%;
        height: calc(100vh - ${headerHeight});
        background: url(${ambulance});
        background-size: cover;
        background-position: center;

        .textCont {
            display: flex;
            flex-direction: column;
            justify-content: center;
            //width: 50%;
            padding: 0 5%;
            
            h1 {
                font-size: 2.2rem;
            }

            button {
                width: 50%;
                font-weight: 700;
                color: white;
                background-color: #EE1317;
            }
        }
    `)

    const handleCallClick = () => {
        window.location.href = 'tel: 8766317521';
    }
    
    return (
        <Grid container css={styles} id="home">
           <Grid item lg={6} sm={12} md={12} xs={12} className="textCont">
               <h1>Need Medical Advice or an Ambulance</h1> 
               <Button variant="contained" onClick={handleCallClick}>Call us now</Button>
           </Grid>
        </Grid>
    )
}

export default Hero
