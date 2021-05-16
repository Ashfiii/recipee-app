import React from 'react';
import classes from './Recipee.module.css';

const Recipee = (props) => {
    return (
        <div className={classes.recipee}>
            <h1>{props.title}</h1>
            <ol>{props.ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}</ol>
            <p>{props.calories.toFixed()} calories</p>
            <img className={classes.image} src={props.image} alt="" />
        </div>
    )
}

export default Recipee
