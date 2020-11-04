import React from "react";
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import Employee from "./Employee";
import Meals from './Meals';


const employeeInfo = [
  {
    firstName: "Roger",
    lastName: "Sterling",
    age: "55"
  },
  {
    firstName: "Peggy",
    lastName: "Olson",
    age: "23"
  },
  {
    firstName: "Don",
    lastName: "Draper",
    age: "38"
  },
  {
    firstName: "Sally",
    lastName: "Draper",
    age: "12"
  }
];


const mealIdeas = [
  {
    mealType:"Shrimp && Rice",
    calories:"700",
    origin:"Thomas' Brain",
    prepTime:"40min"
  },
  {
    mealType:"Egg-in-a-hole",
    calories:"350",
    origin:"Home-Economics Class, Upper Twp Middle School",
    prepTime:"10min"
  },
  {
    mealType:"Mac & Cheese w/ Hot Dogs",
    calories:"500",
    origin:"Another life",
    prepTime:"17min"
  }
];



function App() {

  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to my Counter :)</h1>
        <Counter />
                  
        <h1>Company Directory</h1> 
        {employeeInfo.map(employee => {
          const { firstName, lastName, age } = employee;
          return (
            <Employee firstName={firstName} lastName={lastName} age={age} />
          )
        })}


        {/* <Employee firstName="Roger" lastName="Sterling" age="55"/>
        <Employee firstName="Peggy" lastName="Olson" age="22"/>
        <Employee firstName="Don" lastName="Draper" age="37"/>
        <Employee firstName="Sally"lastName="Draper" age="12"/> */}

        <h3>Meal Ideas</h3>
       
        <ul>
        {mealIdeas.map((meals) => {
          return <Meals {...meals} />
        })}
        </ul>
      </header>
    </div>
  );
}

export default App;
