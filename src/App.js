import React from 'react';
import EmployeeListComponent from './components/EmployeeListComponent';
import EmployeeCard from "./components/EmployeeCard";

function App() {
    return (
        <div>
            <h1>Employee Management</h1>
            <EmployeeCard id={1}/>
        </div>
    );
}

export default App;