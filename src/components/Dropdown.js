import React, { useState } from 'react';
import { BrandItems } from './BrandItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {BrandItems.map((brand, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={brand.cName}
                                to={brand.path}
                                onClick={() => setClick(false)}
                            >
                                {brand.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Dropdown;