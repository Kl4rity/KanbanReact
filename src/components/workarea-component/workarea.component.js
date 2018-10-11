import React from 'react';
import { connect } from 'react-redux';
import Column from './column-component/column.component';

const Workarea = (props) => {
    let selectedBoard = props.boards.filter((board) => {
        return board.id === props.selectedBoardId;
    })[0];
    console.log(selectedBoard[0]);
    return (
        <React.Fragment>
            {selectedBoard.columns.map(
                (column) => {
                    return <Column title = {column.title} cards = {column.cards} key = {column.id}/>
                }
            )}
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedBoardId: state.appState.selectedBoardId,
        boards: state.boards
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Workarea);