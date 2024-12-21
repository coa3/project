import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slid>
                    <Text></Text>
                    <Name>hi@pavanmg.in</Name>
                </Slid>
            </FlexWrapper>
            <Pagination>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: 1px solid red;

    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slid = styled.div`

`

const Text = styled.p`

`

const Name = styled.div`
    text-align: center;
`

const Pagination = styled.div`
    
    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;

        
    }
`