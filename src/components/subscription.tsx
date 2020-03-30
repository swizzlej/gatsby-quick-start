import React from 'react';

/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import { TextField, Button } from '@material-ui/core';
import { theme } from '../common/site-variables';

interface PropTypes {
    isMobile: boolean;
}

const Subscription = (props: PropTypes) => {
    const { isMobile } = props;

    const subscribeContStyles = css(`
        display: flex;
        flex-direction: ${isMobile ? 'column' : 'row'};
        align-items: center;
        justify-content: center;
        width: 100%;
        height: ${isMobile ? 'auto' : '20vh'};
        background-color: ${theme.blue};
        padding-top: ${isMobile ? 5 : 0}%;

        h3 {
            color: white;
        }
        

        form {
            display: flex;
            justify-content: space-between;
            flex-direction: ${isMobile ? 'column' : 'row'};
            padding: 2%; 

            .textField {
                background-color: rgba(24,71,99, .4);
                margin-right: 2%;
                margin-bottom: ${isMobile ? 5 : 0}%;

                .MuiInputLabel-outlined {
                    color: white;
                }
            }

            button {
                color: white;
                background-color: ${theme.red};
            }
        }
    `);

    return (
        <div css={subscribeContStyles}>
            <h3 className="noMargin"><span>Sign me up</span> for news and updates</h3>
            <form className="noMargin">
                <TextField className="textField" label="name" variant="outlined" size="small"/>
                <TextField className="textField"  label="email" variant="outlined" size="small"/>
                <Button variant="contained">Subscribe</Button>
            </form>
        </div>
    );
}

export default Subscription;