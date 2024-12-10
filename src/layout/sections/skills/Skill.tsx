import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string;

}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}></Icon>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
width: 15%;
    background-color: aqua;
    margin: 10px;
`