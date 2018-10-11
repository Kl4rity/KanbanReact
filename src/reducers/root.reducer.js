import initialData from '../dev/sampleData.dev';

const initialState = initialData;

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'BOARD_SELECT':

        return;

        default:
        return state;
    }
}

export default rootReducer;