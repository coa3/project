import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type WorkPropsType = {
  title?: string,
    text?: string,
    src?: string

}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWorks>
<Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>

            <Icon iconId='chain'/>
            <Link href={'#'}>Live Preview</Link>
            <Icon iconId='git'/>
            <Link href={'#'}>View Code</Link>

            </StyledWorks>
    );
};

const StyledWorks = styled.div`
background-color: yellow;
    max-width: 373px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    
`

const Link = styled.a``

const Title = styled.h3``

const Text = styled.p`

`