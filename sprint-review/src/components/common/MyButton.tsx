import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles({
    buttonStyle: {
        color: "yellow"
    }
})

const MyButton = () => {
    const classes = useStyles();
    return (
        <Button className={classes.buttonStyle} variant="contained">Button</Button>
    )
}

export default MyButton;