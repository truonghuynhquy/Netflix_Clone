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
            <button className="text-white" onClick={() => navigate(props.login ? "/login" : "/signup")} >{props.login ? "Log In" : "Sign In"}</button>
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
    button {
        .text-white {
            color: white;
        }
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
    }
`;

export default Header;