import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/foto.jpeg'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi 👋,</span>
                    <Name>My name is Pavan MG</Name>
                    <MainTitle>I build things for web</MainTitle>
                </div>
                <Photo src={photo} alt=""/>


            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: beige;
`


const Photo = styled.img`
    width: 349px;
    height: 349px;
    object-fit: cover;
`

const MainTitle = styled.h1`

`
const Name = styled.h2`

`