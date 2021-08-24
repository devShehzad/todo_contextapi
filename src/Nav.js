import React from 'react'
import { Link  } from 'react-router-dom'
export default function Nav() {
    return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-grow-1 justify-content-center ">
                    <span className="navbar-brand">Student Managment System</span>
                    <div className= 'text-center'>
                        <ul className="navbar-nav mr-auto mx-auto">
                            <li className="nav-item">
                                <Link to ='/' className="nav-link" >Book List</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/AddBook' className="nav-link" >Add Book</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
    )
}
