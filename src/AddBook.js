import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { GlobalContext } from './context/GlobalState';
export default function AddBook() {

    const { addStudentData } = useContext(GlobalContext);
    const [name, setName] = useState('');
    const [classno, setClassno] = useState('');
    const [email, setEmail] = useState('');

    let histroy = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const newStudentData = {
            id: Math.floor(Math.random() * 100),
            name,
            classno,
            email
        }
        addStudentData(newStudentData);
        histroy.push('/')
    }
    return (
        <div className='row mt-5'>
            <div className='col-align self-center'>
                <form onSubmit={onSubmit}>
                    <input className="form-control form-control-lg mt-1" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                    <input className="form-control form-control-lg mt-1" type="number" value={classno} onChange={(e) => setClassno(e.target.value)} placeholder="Class no" />
                    <input className="form-control form-control-lg mt-1" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <div className='d-grid gap-2 col-6 mx-auto'>
                        <button  className='btn btn-dark mt-5'>Add Data</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
