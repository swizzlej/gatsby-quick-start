import React, { useState } from 'react';

/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { theme } from '../common/site-variables';
import { string } from 'prop-types';


const MembershipForm = () => {

    const formStyles = css(`
        overflow-y: scroll;
        height: 90%;
        width: 100%;

        .controlGroup {
            margin: 2% 0;

            .select {
                padding: 1%;
            }
            .control {
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

    interface FormModel {
        title: string;
        fName: string;
        mName: string;
        lName: string;
    }

    const [formState, setFormState] = useState<FormModel>({
        title: '',
        fName: '',
        mName: '',
        lName: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        switch(name) {
            case 'title': 
                setFormState({
                    ...formState,
                    title: value
                }); 
            break;
        }
        
    };

    return(
        <form css={formStyles}>
            <div className="controlGroup">
                <Select name="title" labelId="titleLabel" className="control" variant="outlined"
                    displayEmpty onChange={handleChange} value={formState.title}>
                    <MenuItem value="" disabled>Your title</MenuItem>    
                    <MenuItem value="Miss">Miss</MenuItem>
                    <MenuItem value="Mrs">Mrs</MenuItem>
                    <MenuItem value="Mr">Mr</MenuItem>
                </Select>

                <TextField className="control" label="Your first name" variant="outlined" />
            </div>

            <div className="controlGroup">
                <TextField className="control" label="Your middle name" variant="outlined" />
                <TextField className="control" label="Your last name" variant="outlined" />
            </div>


            <div className="controlGroup">
                <TextField className="control" label="Your email address" variant="outlined" />
                <TextField className="control" label="876-123-3456" variant="outlined" />
            </div>
            
            <div className="controlGroup">
                <TextField className="control fullWidth" label="Street address" variant="outlined" />
            </div>

            <div className="controlGroup">
                <TextField className="control fullWidth" label="Street address line 2" variant="outlined" />
            </div>

            <div className="controlGroup">
                <TextField className="control" label="City" variant="outlined" />
                <TextField className="control" label="Region" variant="outlined" />
            </div>

            <div className="controlGroup">
                <TextField className="control fullWidth" label="Emergency Contacts" multiline rows={4} variant="outlined" />
            </div>

            <div className="submitBtnDiv">
                <Button variant="contained">Send</Button>
            </div>
            
        </form>
    )
}

export default MembershipForm;