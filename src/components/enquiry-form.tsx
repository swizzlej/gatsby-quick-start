import React from 'react';

/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import { TextField, Button } from '@material-ui/core';
import { theme } from '../common/site-variables';


const EnquiryForm = () => {

    const formStyles = css(`

        .controlGroup {
            margin: 2% 0;

            .textField {
                margin: 0 2%;
                width: 46%;
            }

            .fullWidth {
                width: 96%;
            }
        }

        .submitBtnDiv {
            margin: 2% 0;
            display: flex;
            justify-content: center;
        }

        button {
            background-color: ${theme.blue};
            color: white;
            width: 30%;
        }
    `);

    return(
        <form css={formStyles}>
            <div className="controlGroup">
                <TextField className="textField" label="Your first name" variant="outlined" />
                <TextField className="textField" label="Your last name" variant="outlined" />
            </div>

            <div className="controlGroup">
                <TextField className="textField" label="Your email address" variant="outlined" />
                <TextField className="textField" label="876-123-3456" variant="outlined" />
            </div>

            <div className="controlGroup">
                <TextField className="textField fullWidth" label="I am interested in..." variant="outlined" />
            </div>

            <div className="submitBtnDiv">
                <Button variant="contained">Send</Button>
            </div>
            
        </form>
    )
}

export default EnquiryForm;