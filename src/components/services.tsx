import React, { useEffect, useRef } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { theme, headerHeight } from '../common/site-variables'
import { Grid } from '@material-ui/core'
import ambo from '../static-images/ambulance_vehicle.png'
import AnimatedCard from './animated-card'
import { useSpring, animated } from 'react-spring'
import medPic from '../static-images/med_bg.png'

const whatWeOffer = [
    {
        title: '',
        paragraph: `
        
        `,
        key: ''
    },
    {
        title: '',
        paragraph: `
        
        `,
        key: ''
    },
    {
        title: '',
        paragraph: `
        
        `,
        key: ''
    }
]

interface PropTypes {
    shouldNotScroll: boolean;
}

const Services = (props: PropTypes) => {

    const styles = css(`
        width: 100%;
        height: 100vh;
        background-color: ${theme.gray};

        .scrollCont {
            position: sticky;
            overflow-y: ${props.shouldNotScroll ? 'hidden' : 'scroll'};
            height: 100%;

            .cont {
                height: inherit;

                .gridItem {
                    display: flex; 
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: inherit;
                    color: white;

                    p {
                        width: 80%;
                    }
        
                    .header {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 20vh;
                        background: linear-gradient(127deg, rgba(2,77,148,.65) 0%, rgba(9,92,170,.8) 100%), url(${medPic});
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                        
                        h1 {
                            color: white;
                            text-align: center;
                        }
                    }
                }
        
            }
        }

        .imageRect {
            position: relative;

            .aniCont {
                position: absolute;
                left: 60%;
                bottom: 0%;
                width: 80%;
            }

            .animated {
                position: absolute;
                width: 100%;
            }
        }

        .blueBg {
            background-color: ${theme.blue};
        }
    `);

    const [scrollTop, setScrollTop] = useSpring(() => ({st: '0px', config: { mass: 5, tension: 350, friction: 40 } }));
    const moveAmbo = scrollTop.st.interpolate((st) => `translateX(${st})`);
    
    const handleScroll = (e: any) => {
        const target = e.target as HTMLElement;
        const scrollT =  target.scrollTop;
        setScrollTop({st: `${-scrollT}px`})
           
    }

    return (
        <section id="services" css={styles}>
            <div className="scrollCont" onScroll={handleScroll}>

                <Grid container className="cont fixed">
                    <Grid lg={6} className="gridItem blueBg">
                        <div className="header">
                            <h1>What We Offer?</h1>
                        </div>
                    </Grid>
                    <Grid lg={6} className="imageRect gridItem">
                        <animated.div style={{transform: moveAmbo}} className="aniCont">
                            <AnimatedCard className="animated">
                                <img src={ambo} alt="Ambulance Vehicle"/>
                            </AnimatedCard>
                        </animated.div>
                    </Grid>

                    <Grid lg={6} className="gridItem blueBg">
                        <h1>Emergency <br/> Ambulance <br/> Transport</h1>
                        <p>
                            Emergency Ambulance transportation For residential citizens, facilities, hotels, Business sector entitles.
                        </p>
                    </Grid>

                    <Grid lg={6} className="">
                    </Grid>

                    <Grid lg={6} className="gridItem blueBg">
                        <h1>Emergency <br/> Ambulance <br/> Transport</h1>
                    </Grid>

                    <Grid lg={6} className="gridItem">
                        <h1>Emergency <br/> Ambulance <br/> Transport</h1>
                    </Grid>
                    
                </Grid>

            </div>
        </section>
    )
}

export default Services
