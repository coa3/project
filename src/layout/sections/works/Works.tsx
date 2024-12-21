import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {SectionH3} from "../../../components/SectionH3";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import foto1 from "../../../assets/images/foto1.jpeg";
import foto2 from "../../../assets/images/foto2.jpeg";
import foto3 from "../../../assets/images/foto3.jpeg";
import foto4 from "../../../assets/images/foto4.jpeg";
import foto5 from "../../../assets/images/foto5.jpeg";
import foto6 from "../../../assets/images/foto6.jpeg";

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <SectionH3>Things I’ve built so far</SectionH3>
<FlexWrapper justify={'space-around'}>
    <Work
        src={foto1}
        title={'Project Tile goes here'}
          text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}

    />
    <Work
        src={foto2}
        title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>
    <Work
        src={foto3}
        title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>
    <Work
        src={foto4}
        title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>
    <Work
        src={foto5}
        title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>
    <Work
        src={foto6}
        title={'Project Tile goes here'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>
</FlexWrapper>

        </StyledWorks>

    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #7878b5;
    
    
`