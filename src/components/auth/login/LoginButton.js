import React from 'react';
import {colors} from "../../../theme";
import styled from "styled-components";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {Link} from "react-router-dom";

function LoginButton({id}) {

    const Button = styled.div`
        border: 2px solid ${colors.claret};
        padding: 5px;
        width: 100%;
        font-size: 16px;
        color: ${colors.claret};
        border-radius: 10px;
        transition: all 0.2s ease-in-out 0s;
        @media (min-width: 1024px){
          :hover {
              background-color: rgba(106,0,7,0.2);
          }
        }
    `;

    return (
        <Link to={"/sign-in"} id={id}>
            <Button>
                <LockOpenIcon style={{ fontSize: "20px",  marginRight: "10px" }}/>
                Login
            </Button>
        </Link>
    );
}

export default LoginButton;