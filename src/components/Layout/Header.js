import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg'; 
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
    return(
    <React.Fragment>
        {/* For the Header (Text and Buttons) */}
        <header className = {classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton cartButtonClicked = {props.cartButtonClicked}></HeaderCartButton>
        </header>


        {/* For the Image in the Header */}
        <div className = {classes['main-image']}>
            <img src = {mealsImage} alt = 'A variety of dishes'/>
        </div>
    </React.Fragment>
    );
}

export default Header;
