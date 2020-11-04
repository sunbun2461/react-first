import React from 'react';



const Meals = (props) => {
    const {mealType, calories, origin, prepTime, method} = props;
    return (
        <React.Fragment>
    <li>Meal type: {mealType}</li>
    <li>Calories: {calories}</li>
    <li>Origin: {origin}</li>
    <li>Prep Time: {prepTime}</li>
        </React.Fragment>
    )
}





export default Meals;