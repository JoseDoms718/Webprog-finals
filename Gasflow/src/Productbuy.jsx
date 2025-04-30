import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import Navbar from './Navbar';
import Products1 from './Products1';

function Productsbuy(){
    return(
        <>
        <Navbar/>
        <Products1/>
        </>
    );
}
export default Productsbuy;