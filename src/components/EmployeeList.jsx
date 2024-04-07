import React from 'react';
import EmployeeListItem from './EmployeeListItem';

function EmployeeList({ employees, onEmployeeClick }) {
    return (
        <div className="employee-list">
            {employees.map(employee => (
                <EmployeeListItem key={employee.id} employee={employee} onClick={() => onEmployeeClick(employee)} />
            ))}
        </div>
    );
}

export default EmployeeList;
