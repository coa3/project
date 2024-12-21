import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/icon/Icon";

const items = ['Home', 'About', 'Tach Stack', 'Projects', 'Contact',]

export const Header = () => {
    return (
        <StyledHeader>

            <Logo/>
            <Menu menuItems={items}/>
            <StyledIcon>
                <Icon iconId='git'/>
                <Icon iconId='twitter'/>
                <Icon iconId='linkedin'/>
            </StyledIcon>

        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: grey;
    display: flex;
    justify-content: space-between;
`

const StyledIcon = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;

`