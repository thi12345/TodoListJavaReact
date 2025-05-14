import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();

    useEffect (() => {
        getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    function addNewEmployee(){
        navigator('/add-employee');
    }
    function  updateEmployee(id){
        navigator(`/edit-employee/${id}`);
    }
    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error =>{
            console.log(error);
        })
    }

  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>
          <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
          <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map(ems => 
                    <tr key={ems.id}>
                        <td>{ems.id}</td>
                        <td>{ems.firstName}</td>
                        <td>{ems.lastName}</td>
                        <td>{ems.email}</td>
                        <td>
                            <button className='btn btn-info me-2' onClick={() => updateEmployee(ems.id)}>Update
                            </button>
                            <button className='btn btn-danger' onClick={() => removeEmployee(ems.id)}>Delete</button>
                        </td>
                    </tr>
                )
            }
            
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
