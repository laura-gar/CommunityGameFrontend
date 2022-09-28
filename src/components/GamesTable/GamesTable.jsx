import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';

function GamesTable(props) {
    const [rowData] = useState([
        {
            "id": "bc24d911-df5d-48aa-be90-809e1ecd9e3a",
            "title": "Insecters War for PlayStation",
            "platform": "PlayStation",
            "releaseDate": "2030-01-01",
            "description": "This is the description of the video game.",
            "genre": "Arcade",
            "image": "https://media.rawg.io/media/screenshots/32b/32bf977b2e13dacef4aa7f6de6b22452.jpg",
            "updatedAt": "2022-09-26T09:31:26",
            "backlogCount": 0,
            "playingCount": 0,
            "beatCount": 0,
            "retiredCount": 0,
            "updatedBy": null
        },
        {
            "id": "485f4f3a-5cda-4256-a741-a6fccd3eb2ab",
            "title": "Insecters War for Xbox",
            "platform": "Xbox",
            "releaseDate": "2030-01-01",
            "description": "This is the description of the video game.",
            "genre": "Arcade",
            "image": "https://media.rawg.io/media/screenshots/32b/32bf977b2e13dacef4aa7f6de6b22452.jpg",
            "updatedAt": "2022-09-26T09:31:26",
            "backlogCount": 0,
            "playingCount": 0,
            "beatCount": 0,
            "retiredCount": 0,
            "updatedBy": null
        },
        {
            "id": "209113dd-0566-40b5-8eed-25c841bb007c",
            "title": "Insecters War for Nintendo",
            "platform": "Nintendo",
            "releaseDate": "2030-01-01",
            "description": "This is the description of the video game.",
            "genre": "Arcade",
            "image": "https://media.rawg.io/media/screenshots/32b/32bf977b2e13dacef4aa7f6de6b22452.jpg",
            "updatedAt": "2022-09-26T09:31:26",
            "backlogCount": 0,
            "playingCount": 0,
            "beatCount": 0,
            "retiredCount": 0,
            "updatedBy": null
        },
        {
            "id": "2c653956-4492-4d49-9a66-5f9c0fc9ac28",
            "title": "Insecters War for PC",
            "platform": "PC",
            "releaseDate": "2030-01-01",
            "description": "This is the description of the video game.",
            "genre": "Arcade",
            "image": "https://media.rawg.io/media/screenshots/32b/32bf977b2e13dacef4aa7f6de6b22452.jpg",
            "updatedAt": "2022-09-26T09:31:26",
            "backlogCount": 0,
            "playingCount": 0,
            "beatCount": 0,
            "retiredCount": 0,
            "updatedBy": null
        },
        {
            "id": "713566a3-a73a-4960-8bb6-912190353c34",
            "title": "Marvel's Spider-Man 2 for PlayStation",
            "platform": "PlayStation",
            "releaseDate": "2023-12-31",
            "description": "This is the description of the video game.",
            "genre": "Action",
            "image": "https://media.rawg.io/media/games/a60/a6037bf86b4bb391f1eeeff2c4b72727.jpg",
            "updatedAt": "2022-09-26T09:31:26",
            "backlogCount": 0,
            "playingCount": 0,
            "beatCount": 0,
            "retiredCount": 0,
            "updatedBy": null
        },
        {
            "id": "68498ed4-4144-4b83-b414-2057de2674f1",
            "title": "Marvel's Spider-Man 2 for Nintendo",
            "platform": "Nintendo",
            "releaseDate": "2023-12-31",
            "description": "This is the description of the video game.",
            "genre": "Action",
            "image": "https://media.rawg.io/media/games/a60/a6037bf86b4bb391f1eeeff2c4b72727.jpg",
            "updatedAt": "2022-09-26T09:31:26",
            "backlogCount": 0,
            "playingCount": 0,
            "beatCount": 0,
            "retiredCount": 0,
            "updatedBy": null
        },
        {
            "id": "2c15b813-0fd5-48e2-a273-c6b17c889143",
            "title": "Eiyuden Chronicle: Hundred Heroes for PlayStation",
            "platform": "PlayStation",
            "releaseDate": "2023-12-31",
            "description": "This is the description of the video game.",
            "genre": "RPG",
            "image": "https://media.rawg.io/media/games/8b7/8b7ae9f5da33a75da7b5177587b8ca9d.jpg",
            "updatedAt": "2022-09-26T09:31:26",
            "backlogCount": 0,
            "playingCount": 0,
            "beatCount": 0,
            "retiredCount": 0,
            "updatedBy": null
        },
        {
            "id": "2dfeb15e-3318-434f-a518-2053b080cc59",
            "title": "Diablo IV for PlayStation",
            "platform": "PlayStation",
            "releaseDate": "2023-12-31",
            "description": "This is the description of the video game.",
            "genre": "Action",
            "image": "https://media.rawg.io/media/games/237/237d295a345962f7b987e318b8e74575.jpg",
            "updatedAt": "2022-09-26T09:31:26",
            "backlogCount": 0,
            "playingCount": 0,
            "beatCount": 0,
            "retiredCount": 0,
            "updatedBy": null
        },
        {
            "id": "3fc0fc86-7025-4d35-99b4-89c2120d38f9",
            "title": "Diablo IV for Xbox",
            "platform": "Xbox",
            "releaseDate": "2023-12-31",
            "description": "This is the description of the video game.",
            "genre": "Action",
            "image": "https://media.rawg.io/media/games/237/237d295a345962f7b987e318b8e74575.jpg",
            "updatedAt": "2022-09-26T09:31:26",
            "backlogCount": 0,
            "playingCount": 0,
            "beatCount": 0,
            "retiredCount": 0,
            "updatedBy": null
        },
        {
            "id": "3cb7c031-d393-4913-8c3b-4672449fa133",
            "title": "Diablo IV for Nintendo",
            "platform": "Nintendo",
            "releaseDate": "2023-12-31",
            "description": "This is the description of the video game.",
            "genre": "Action",
            "image": "https://media.rawg.io/media/games/237/237d295a345962f7b987e318b8e74575.jpg",
            "updatedAt": "2022-09-26T09:31:26",
            "backlogCount": 0,
            "playingCount": 0,
            "beatCount": 0,
            "retiredCount": 0,
            "updatedBy": null
        }
    ]);

    const [columnDefs] = useState([
        { field: 'title', sortable: true, suppressMovable: true },
        { field: 'platform', sortable: true, suppressMovable: true },
        { field: 'updatedAt', sortable: true, suppressMovable: true }
    ])

    return (
        <div style={{ height: 400, width: 600 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );
}

export default GamesTable