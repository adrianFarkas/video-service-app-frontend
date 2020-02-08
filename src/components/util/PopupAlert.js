import React, {useContext} from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import Slide from '@material-ui/core/Slide';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import styled from "styled-components";
import {makeStyles} from "@material-ui/core";
import {ThemeContext} from "../../contexts/ThemeContext";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';

function PopupAlert({open, handleClose}) {
    const {theme} = useContext(ThemeContext);

    const useStyle = makeStyles({
        root: {
            "& .MuiSnackbarContent-root": {
                background: theme.background,
                border: `2px solid ${theme.syntax}`,
                padding: "5px 20px",
                flexWrap: "unset",
            }
        },
        icon: {
            fontSize: "30px",
            marginRight: "10px"
        },
        close: {
            color: theme.syntax,
        }
    });
    const classes = useStyle();

    const Content = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.syntax};
    `;

    return (
        <Snackbar
            open={open}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            TransitionComponent={Slide}
            className={classes.root}
            autoHideDuration={5000}
            onClose={handleClose}
            message={
                <Content>
                    <CheckCircleOutlineIcon className={classes.icon}/>
                    <div>You registered successfully! Please verify your email before login.</div>
                </Content>
            }
            action={
                <IconButton size="small" className={classes.close} onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            }
        />
    );
}

export default PopupAlert;