import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
    return (
        <div>
            <Router>
                <div className="container">
                    <switch>
                        <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                        <Route path = "/employee" component = {ListEmployeeComponent}></Route>
                        <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                        <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                        {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </switch>
                </div>
            </Router>
        </div>
    );
}

export default App;