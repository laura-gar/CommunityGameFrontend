import { AgGridReact } from 'ag-grid-react';
import React, { useCallback, useRef, useState } from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.min.css';
import { useNavigate } from 'react-router-dom';
import { formatStringDate } from '../../../services/Formatting/Date/dateFormatting';
import gameService from '../../../services/Games/gameService';
import './GamesTable.css';

function GamesTable(props) {
    const navigateTo = useNavigate();
    const pageSize = 10;
    const [games, setGames] = useState([]);
    const gridRef = useRef();
    const rowHeight = 100;

    const GameTitleRender = ({ value, data }) => {
        const game = data ? data : { title: value };
        return (
            <div className="col h-100 d-flex justify-content-start align-items-center">
                <div className='h-100 me-3 d-flex align-items-center' style={{ backgroundColor: 'black' }}>
                    <img src={game.image} alt={`${game.title} screenshot.`} style={{ maxHeight: rowHeight + 'px', width: '100px' }} />
                </div>
                <p className='m-0 flex-grow-1 text-wrap lh-sm'>{game.title}</p>
            </div>
        );
    }

    const [columnDefs] = useState([
        { field: 'title', cellRenderer: GameTitleRender, cellClass: 'ps-0', sortable: true, suppressMovable: true },
        { field: 'platform', sortable: true, suppressMovable: true },
        { field: 'updatedAt', sortable: true, suppressMovable: true, valueFormatter: ({ value }) => formatStringDate(value) }
    ]);

    const onGridReady = useCallback(({ api }) => {
        api.sizeColumnsToFit();
        const dataSource = {
            getRows: ({ startRow, endRow, successCallback, failCallback, sortModel }) => {
                const numRequiredGames = endRow - startRow;
                const requestedPage = endRow / numRequiredGames;
                gameService.getGames(
                    {
                        limit: numRequiredGames,
                        page: requestedPage,
                    },
                    games => {
                        if (games) {
                            games = gameService.sortGamesData(sortModel, games);
                        }
                        successCallback(games, null);
                    },
                    error => {
                        console.log(error);
                        failCallback();
                    }
                );
            }
        };
        api.setDatasource(dataSource);
    }, []);

    const onRowSelection = () => {
        const selectedGames = gridRef.current.api.getSelectedRows();
        const game = selectedGames[0];
        navigateTo(`/games/${game.id}`);
    };

    return (
        <div className='ag-theme-alpine' style={{ height: '100%', width: '100%' }}>
            <AgGridReact
                ref={gridRef}
                rowData={games}
                columnDefs={columnDefs}
                paginationPageSize={pageSize}
                pagination={true}
                rowModelType={'infinite'}
                onGridReady={onGridReady}
                domLayout='autoHeight'
                rowSelection={'single'}
                onSelectionChanged={onRowSelection}
                rowHeight={rowHeight}
            >
            </AgGridReact>
        </div >
    );
}

export default GamesTable