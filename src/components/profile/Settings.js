import React, {useContext} from 'react';
import SubPage from "./SubPage";
import {ThemeContext} from "../../contexts/ThemeContext";
import styled from "styled-components";

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
`;

function Settings({name, page}) {
    const {theme} = useContext(ThemeContext);

    return (
        <SubPage
            title={"Settings"}
            show={page === name}
            theme={theme}
        >
            <Content>
                Under Development
            </Content>
        </SubPage>
    );
}

export default Settings;