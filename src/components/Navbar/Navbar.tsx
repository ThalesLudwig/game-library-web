import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../app/searchSlice';
import { Container, Brand, Search } from './NavbarStyled';

interface Props {
    brand: string;
}

const Navbar = (props: Props) => {
    const dispatch = useDispatch();

    return (
        <Container>
            <Brand>{ props.brand }</Brand>
            <Search type="text" placeholder="Search..." onChange={e => dispatch(setSearch(e.target.value))} />
        </Container>
    );
};

export default Navbar;