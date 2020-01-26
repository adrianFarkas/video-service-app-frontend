import React, {useContext} from 'react';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import {makeStyles} from "@material-ui/core";
import {ThemeContext} from "../../contexts/ThemeContext";
import styled from "styled-components";
import Theme from "./Theme";
import {themes} from "../../theme";
import Zoom from "@material-ui/core/Zoom";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const Wrapper = styled.div`
    width: 50%;
    @media (max-width: 900px) {
        width: 100%;
        margin: 5px;
    }
`;

const Selector = styled.div`
    overflow: auto;
    max-height: 85vh;
    border: 2px solid ${props => props.syntax};
    background-color: ${props => props.transparentBackground};
    color: ${props => props.syntax};
    padding: 15px;
    border-radius: 10px;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const Title = styled.div`
    font-size: 30px;
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 15px;
    color: ${props => props.syntax};
    border-bottom: 1px solid ${props => props.transparentSyntax};
`;

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

    const useStyles = makeStyles({
        modal: {
            display: 'flex',
            alignItems: "center",
            justifyContent: "center"
        },
        icon: {
            color: theme.syntax,
        },
    });
    const classes = useStyles();

    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            className={classes.modal}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Zoom in={open}>
                <Wrapper>
                    <Selector className={"transition"} {...theme}>
                        <Head className={"transition"} {...theme}>
                            <Title>Select your theme</Title>
                            <IconButton className={classes.icon} onClick={handleClose}>
                                <CloseIcon/>
                            </IconButton>
                        </Head>
                        <Themes>
                            {Object.values(themes).map((v, i) => <Theme key={i} {...v}/>)}
                        </Themes>
                    </Selector>
                </Wrapper>
            </Zoom>
        </Modal>
    );
}

export default ThemeSelector;