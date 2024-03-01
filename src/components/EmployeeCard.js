import React, {useEffect, useState} from "react";
import EmployeeService from "../services/EmployeeService";

function EmployeeCard({id}) {
    const [user, setUser] = useState([]);

    useEffect(() => { setUser(EmployeeService.getEmployee(id).data); }, []);

    return (
        <div key={user.id} className="card col-4 my-3 mx-5 bg-white text-dark">
            <h5 className="card-title bg-success px-2 py-2">{user.id}</h5>
            <h6 className="card-subtitle mb-3 text-primary my-3">Name: {user.name}</h6>
            <p className="card-text">Email: {user.email}</p>
        </div>
    );
}

export default EmployeeCard;