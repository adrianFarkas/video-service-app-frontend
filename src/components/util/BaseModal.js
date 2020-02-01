import React from 'react';
import Backdrop from "@material-ui/core/Backdrop";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";

const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
    position: relative;
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
    & .MuiButtonBase-root {
      color: ${props => props.syntax};
    }
`;

function BaseModal({theme, title, open, handleClose, children}) {
    return (
        <CustomModal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Zoom in={open}>
                <Wrapper>
                    <Selector className={"transition"} {...theme}>
                        <Head className={"transition"} {...theme}>
                            <Title>{title}</Title>
                            <IconButton onClick={handleClose}>
                                <CloseIcon/>
                            </IconButton>
                        </Head>
                        {children}
                    </Selector>
                </Wrapper>
            </Zoom>
        </CustomModal>
    );
}

export default BaseModal;