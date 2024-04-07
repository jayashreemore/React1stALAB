import React from 'react';

function Employee({ employee }) {
    const { name, position, officePhoneNumber, mobilePhoneNumber, email } = employee;

    return (
        <div className="employee">
            <div className="employee-header">
                {/* Display employee name and position */}
                <h2>{name}</h2>
                <p>{position}</p>
            </div>
            <div className="employee-details">
                <div className="employee-photo">
                    {/* Display employee photo */}
                    <img src="employee-photo.jpg" alt={name} />
                </div>
                <div className="employee-contact">
                    <p>Call Office <a href={`tel:${officePhoneNumber}`}>{officePhoneNumber}</a></p>
                    <p>Call Mobile <a href={`tel:${mobilePhoneNumber}`}>{mobilePhoneNumber}</a></p>
                    <p>SMS <a href={`sms:${mobilePhoneNumber}`}>{mobilePhoneNumber}</a></p>
                    <p>Email <a href={`mailto:${email}`}>{email}</a></p>
                </div>
            </div>
        </div>
    );
}

export default Employee;
