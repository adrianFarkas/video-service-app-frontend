import React from 'react';
import styled from "styled-components";
import {CircularProgress, makeStyles} from "@material-ui/core";

function Loader({isLoading, children, disableLoader, color}) {

    const useStyles = makeStyles({
        root: {
            display: disableLoader && "none",
            color: color,
        }
    });
    const classes = useStyles();

    const LoadingContainer = styled.div`
          display: ${!isLoading ? "none" : "flex"};
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: absolute;
          background: rgba(255,255,255,0.71);
          border-radius: 10px;
          z-index: 1;
          top: 0;
          left: 0; 
    `;

    const Texts = styled.div`
        display: ${!children && "none"};
        width: 80%;
        text-align: center;
        margin: 30px 0;
        padding: 15px;
    `;

    return (
        <LoadingContainer>
            <CircularProgress className={classes.root} />
            <Texts>
                {children}
            </Texts>
        </LoadingContainer>
    );
}

export default Loader;