import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';


const Signup = () => {
    return (
        <div>
            <BackgroundImage />
            <Header />
            <div className='body flex column a-center j-center'>
                <div className='text flex column'>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h4>Watch anywhere. Cancel anytime</h4>
                    <h6>
                        Ready to watch? Enter your email to create or restart your membership.
                    </h6>
                </div>
            </div>
        </div>
    );
};

const Container = styled.div``;

export default Signup;