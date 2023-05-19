import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Header = (props) => {
    const navigate = useNavigate();
    return (
        <StyledHeader className='flex a-center j-between'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <button onClick={() => navigate(props.login ? "/login" : "/signup")} >{props.login ? "Log In" : "Sign In"}</button>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 0 4rem;
    .logo {
        img {
            height: 5rem;
        }
    }
`;

export default Header;