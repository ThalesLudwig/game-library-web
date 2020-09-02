import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;
    border-bottom: 1px lightgray solid;
    align-items: center;
`;

export const Brand = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: black;
`;

export const Search = styled.input`
    padding: 10px;
    font-size: 16px;
    color: black;
    border-radius: 10px;
    border: 1px lightgray solid;
    outline: none;
`;