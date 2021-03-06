import React from 'react';
import * as Styled from '../Styled';
import search from '../../img/search.svg';

const SearchBox = ({ title, placeholder }) => {
    return (
        <Styled.SearchBox>
            <h2>{title}</h2>
            <div>
                <img src={search} alt="search" />
                <input type="text" placeholder={placeholder} />
            </div>
        </Styled.SearchBox>
    )
};

export default SearchBox;