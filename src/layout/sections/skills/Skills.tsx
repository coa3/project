import React, {ReactNode} from 'react';
import exp from "node:constants";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionH3} from "../../../components/SectionH3";
import {Skill} from "./Skill";


export const Skills = () => {
    // @ts-ignore
    return (
        <StyledSkills>
            <SectionTitle> My Tech Stack      </SectionTitle>
            <SectionH3> Technologies I’ve been working with recently </SectionH3>
<FlexWrapper wrap={'wrap'} justify={'space-between'}>
    <Skill iconId={'1row1'}/>
    <Skill iconId={'1row2'}/>
    <Skill iconId={'1row3'}/>
    <Skill iconId={'1row4'}/>
    <Skill iconId={'1row5'}/>
    <Skill iconId={'1row6'}/>
    <Skill iconId={'2row1'}/>
    <Skill iconId={'2row2'}/>
    <Skill iconId={'2row3'}/>
    <Skill iconId={'2row4'}/>
    <Skill iconId={'2row5'}/>
    <Skill iconId={'2row6'}/>

</FlexWrapper>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
background-color: bisque;
min-height: 100vh;
`