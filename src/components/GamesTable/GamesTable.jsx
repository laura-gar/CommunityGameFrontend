import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';

function GamesTable(props) {
    const [games, setGames] = useState([]);

    const [columnDefs] = useState([
        { field: 'title', sortable: true, suppressMovable: true },
        { field: 'platform', sortable: true, suppressMovable: true },
        { field: 'updatedAt', sortable: true, suppressMovable: true }
    ]);

    useEffect(() => {
        fetch('games')
            .then(result => result.json())
            .then(games => {
                setGames(games);
            });
    }, []);

    return (
        <div style={{ height: 400, width: 600 }}>
            <AgGridReact
                rowData={games}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );
}

export default GamesTable