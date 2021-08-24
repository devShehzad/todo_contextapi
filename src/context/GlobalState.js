import React, {createContext , useReducer} from 'react'
import AppReducer from './AppReducer';

// inintial state 
const initialState = {
    studentData: [
       {id:1 , name:'jhon', classno: 23 , email:'jhon@gmail.com' },
       {id:2 , name:'dov', classno:23 , email:'jhon@gmail.com' },
       {id:3 , name:'harry', classno:23 , email:'jhon@gmail.com' }
    ]
}

// createContext
export const GlobalContext = createContext(initialState);
//Provider component
export const GlobalProvider = ({children}) =>{
    const[state , dispatch] = useReducer(AppReducer, initialState);

    //Delete Data
        function deleteStudentData (id) {
            dispatch({
                type : 'DELETE_STUDENTDATA',
                payload : id
            });
        }
     //Add student Data
     function addStudentData (studentData){
         dispatch({
             type : 'ADD_STUDENTDATA',
             payload: studentData
         });
     }   

    return(
        <GlobalContext.Provider value={{
            studentData : state.studentData,
            deleteStudentData,
            addStudentData
        }}>
            {children}
        </GlobalContext.Provider>
    )
}