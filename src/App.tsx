import './App.css';
import {Header} from './layout/header/Header'
import {Main} from './layout/sections/main/Main'
import styled from "styled-components";



function App() {
    return (
        <div className="App">
           <Header/>
<Main/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;