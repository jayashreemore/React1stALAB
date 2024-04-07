import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';
////import './styles.css'


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setCurrentPage('employee');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="app">
      {currentPage === 'home' && (
        <HomePage onEmployeeClick={handleEmployeeClick} />
      )}
      {currentPage === 'employee' && (
        <EmployeePage
          employee={selectedEmployee}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
}




export default App
