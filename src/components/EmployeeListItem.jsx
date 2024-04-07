import React from 'react';

function EmployeeListItem({ employee, onClick }) {
    const { name, position } = employee;

    return (
        <div className="employee-list-item" onClick={onClick}>
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    );
}

export default EmployeeListItem;
