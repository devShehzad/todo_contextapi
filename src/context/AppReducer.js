export default (state, action) => {
    switch (action.type) {
        case 'DELETE_STUDENTDATA':
            // console.log("action payload of delete ", action.payload);
            // console.log("state of delete reducere :  ", state);
            return {
                ...state,
                studentData: state.studentData.filter(studentData => studentData.id !== action.payload)
            }
        case 'ADD_STUDENTDATA':
            return {
                ...state,
                studentData: [action.payload, ...state.studentData]
            }
        default:
            return state
    }
}