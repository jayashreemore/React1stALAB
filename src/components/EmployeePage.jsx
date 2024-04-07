import React from 'react';
import Header from './Header';

function EmployeePage({ employee, onBackToHome }) {
    const { name, position, officePhoneNumber, mobilePhoneNumber, email } = employee;

    return (
        <div className="employee-page">
            <Header />
            <div>
                <button onClick={onBackToHome}>Back to Home</button>
            </div>
            <div className="employee-details">
                <div className="employee-photo">
                    {/* Add the circle photo */}
                </div>
                <div className="employee-info">
                    <h2>{name}</h2>
                    <p>{position}</p>
                </div>
            </div>
            <div className="contact-options">
                <div className="contact-option">
                    <p>Call Office</p>
                    <a href={`tel:${officePhoneNumber}`}>{officePhoneNumber}</a>
                </div>
                <div className="contact-option">
                    <p>Call Mobile</p>
                    <a href={`tel:${mobilePhoneNumber}`}>{mobilePhoneNumber}</a>
                </div>
                <div className="contact-option">
                    <p>SMS</p>
                    <a href={`sms:${mobilePhoneNumber}`}>{mobilePhoneNumber}</a>
                </div>
                <div className="contact-option">
                    <p>Email</p>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            </div>
        </div>
    );
}

export default EmployeePage;
