import React from 'react'
import './UserLogo.css';

function UserLogo({ username }) {
    const firstLetters = username.match(/\b(\w)/g);
    let twoLetters = firstLetters.slice(0, 3);
    twoLetters = twoLetters.map((letter) => letter.toUpperCase());
    return (
        <p className='user-logo user-logo--plum rounded-circle d-flex align-items-center justify-content-center m-0 me-3'>
            {twoLetters}
        </p>
    );
}

export default UserLogo
