import React from 'react';
import { connect } from 'react-redux';
import Column from './column-component/column.component';

const Workarea = (props) => {
    let selectedBoard = filterForSelectedBoard(props.boards, props.selectedBoardId);
    let columnsToDisplay = filterVisibleColumnSelection(selectedBoard.columns, props.visibleBoardsStartIndex);

    return (
        <React.Fragment>
            <WorkAreaHeader title={selectedBoard.title} />
            <div className="row">
                <div className="col s12 m9 l9 offset-m3 offset-l3">
                    <div className="row">
                        {
                            columnsToDisplay.map(
                                (column) => {
                                    return (
                                        <Column title={column.title} cards={column.cards} key={column.id} />
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedBoardId: state.appState.selectedBoardId,
        visibleBoardsStartIndex: state.appState.visibleBoardsStartIndex,
        boards: state.boards
    }
}

const mapDispatchToProps = () => {
    return {}
}

const WorkAreaHeader = (props) => {
    return (
        <div className="row">
            <div className="col s12 m9 offset-m3 l9 offset-l3 center-align"><h4>{props.title}</h4></div>
        </div>
    )
}

const filterForSelectedBoard = (boards, id) => {
    let selectedBoardsTemp = boards.filter(
        (board) => {
            return board.id === id;
        }
    );

    return selectedBoardsTemp[0];
}

const filterVisibleColumnSelection = (columns, visibleStartIndex) => {
    let visibleStopIndex = visibleStartIndex +2;
    let columnsToDisplay = columns.filter((column) => {
        let index = columns.indexOf(column);
        return (index >= visibleStartIndex && index <= visibleStopIndex);
    });
    return columnsToDisplay;
}

export default connect(mapStateToProps, mapDispatchToProps)(Workarea);