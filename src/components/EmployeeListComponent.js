import React, {useEffect, useState} from 'react'
import EmployeeService from "../services/EmployeeService";

function EmployeeListComponent() {
    const [users, setUsers] = useState([]);

    useEffect(() => { setUsers(EmployeeService.getAllEmployees.data); }, []);

    return (
        <div className="container">
        </div>
    );
}

export default EmployeeListComponent;