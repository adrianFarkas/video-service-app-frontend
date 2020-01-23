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
        }
    });
    const classes = useStyles();

    const Selector = styled.div`
        width: 50%;
        max-height: 85vh;
        overflow: auto;
        border: 2px solid ${theme.syntax};
        background-color: ${theme.transparentBackground};
        padding: 15px;
        border-radius: 10px;
        color: ${theme.syntax};
        ::-webkit-scrollbar {
            display: none;
        }
        @media (max-width: 900px) {
            width: 100%;
            margin: 5px;
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
        border-bottom: 1px solid ${theme.transparentSyntax};
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
                <Selector>
                    <Head>
                        <Title>Select your theme</Title>
                        <IconButton className={classes.icon} onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </Head>
                    <Themes>
                        {Object.values(themes).map((v, i) => <Theme key={i} {...v}/>)}
                    </Themes>
                </Selector>
            </Zoom>
        </Modal>
    );
}

export default ThemeSelector;