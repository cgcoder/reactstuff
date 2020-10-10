import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
    return <AppBar>
        <Toolbar>
            <Typography>This is out header</Typography>
        </Toolbar>
    </AppBar>
}

export default Header;