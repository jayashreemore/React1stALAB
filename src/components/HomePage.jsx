import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';

function HomePage({ onEmployeeClick }) {
    const employees = [
        { id: 1, name: 'James King', position: 'President and CEO' },
        { id: 2, name: 'Julie Taylor', position: 'VP of Marketing' },
        { id: 3, name: 'Eugene Lee', position: 'CFO' },
        { id: 4, name: 'John Williams', position: 'VP of Engineering' },
        { id: 5, name: 'Ray Moore', position: 'VP of Sales' },
        { id: 6, name: 'Paul Jones', position: 'QA Manager' },
    ];

    return (
        <div className="home-page">
            <Header />
            <h1>Employee Directory</h1>
            <SearchBar />
            <EmployeeList employees={employees} onEmployeeClick={onEmployeeClick} />
        </div>
    );
}

export default HomePage;
