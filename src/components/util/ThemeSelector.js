import React, {useContext} from 'react';
import {ThemeContext} from "../../contexts/ThemeContext";
import styled from "styled-components";
import Theme from "./Theme";
import {themes} from "../../theme";
import BaseModal from "./BaseModal";

const Themes = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

function ThemeSelector({open, handleClose}) {
    const {theme} = useContext(ThemeContext);

    return (
        <BaseModal
            theme={theme}
            open={open}
            handleClose={handleClose}
            title={"Select your theme"}
        >
            <Themes>
                {Object.values(themes).map((v, i) => <Theme key={i} {...v}/>)}
            </Themes>
        </BaseModal>
    );
}

export default ThemeSelector;