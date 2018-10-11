import initialData from '../dev/sampleData.dev';

const initialState = initialData;

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'BOARD_SELECT':
// Should select the board to be displayed in the work-area.
// Should also reset the view to 0 to 2 as the new board might not even have the appropriate amount of columns.
        return;

        case 'SHIFT_VIEW':
// Should shift the view in the Workarea by 1.
        return;

        default:
        return state;
    }
}

export default rootReducer;