import React from 'react';

const Employee = (props) => {
    const { firstName, lastName, age: employeeAge } = props;
    return(
        <div>
            
            {/* <h6>Employee Name: {props.firstName} {props.lastName}</h6> */}
            
            {/* Interpolation */}
            {/* <h6>{`Employee Name: ${props.firstName} ${props.lastName}`}</h6> */}

            {/* Destructuring */}
            <h6>
                Employee Name: {firstName} {lastName} Who is age: {employeeAge}
            </h6>
        </div>
    )
}

export default Employee;