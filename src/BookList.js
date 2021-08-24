import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './context/GlobalState'

export default function BookList() {
    const { studentData, } = useContext(GlobalContext);
    const { deleteStudentData } = useContext(GlobalContext);

    const [list, setList] = useState([]);
    // let data = studentData;
    useEffect(() => {
        setList(studentData);
    }, [studentData])
    return (
        <div className='row mt-5'>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Search Name Here"
                    onChange={(text) => {
                        let value = text.target.value.toUpperCase();
                        let filtered;
                        if (!value) {
                            setList(studentData);
                        }
                        else {
                            filtered = studentData.filter(item => item.name.toUpperCase().includes(value));
                        }
                        setList(filtered);
                    }}
                />
            </div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Class Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list && list.map(item => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.classno}</td>
                            <td>{item.email}</td>
                            <td><button onClick={() => {
                                deleteStudentData(item.id);

                            }} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
