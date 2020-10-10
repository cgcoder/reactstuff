import React from 'react';
import {Grid} from '@material-ui/core';

import Header from '../components/ProductListHeader';
import MyButton from '../components/common/MyButton';


const Content = () => {
    return (<Grid container spacing={2}>
       
        <MyButton />
        <div style={{height: "150px"}} />
        <MyButton />
        <MyButton />    
    </Grid>);
}

const ProductListPage = () => {
    return (
        <h1>Hello!</h1>
    )
}

export default ProductListPage;