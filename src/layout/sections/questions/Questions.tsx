import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Questions = () => {
    return (
        <StyledQuestions>
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Slider/>
            </FlexWrapper>

        </StyledQuestions>
    );
};

const StyledQuestions = styled.section`
min-height: 50vh;
    background-color: #9372b6;
`