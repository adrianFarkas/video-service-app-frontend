import React from 'react';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {colors} from "../../../theme";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function RegButton({id}) {

    const Button = styled.div`
        border: 2px solid ${colors.claret};
        background-color: ${colors.claret};
        padding: 5px;
        width: 100%;
        font-size: 16px;
        color: #fff;
        border-radius: 10px;
        transition: all 0.2s ease-in-out 0s;
        @media (min-width: 1024px){
          :hover {
              background-color: rgba(106,0,7,0.2);
              color: ${colors.claret};
          }
        }
    `;

    return (
        <Link to={"/sign-up"} id={id}>
            <Button>
                <PersonOutlineIcon style={{ fontSize: "20px",  marginRight: "10px" }}/>
                Sign Up
            </Button>
        </Link>
    );
}

export default RegButton;