import React, {useContext, useState} from 'react';
import styled from "styled-components";
import MoreButton from "../util/MoreButton";
import MenuItem from "@material-ui/core/MenuItem";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentForm from "./CommentForm";
import {ThemeContext} from "../../contexts/ThemeContext";


function Comment(props) {
    const {id, comment} = props.comment;
    const [editMode, setEdiMode] = useState(false);
    const {theme} = useContext(ThemeContext);

    const Wrapper = styled.div`
        padding: 10px 0;
        color: ${theme.syntax};
        position: relative;
    `;

    const CommentCard = styled.div`
        padding: 30px;
        background-color: ${theme.cardBg};
        border-radius: 5px;
    `;

    const Text = styled.div`
        font-size: 30px;
        padding-top: 15px;
        overflow-wrap: break-word;
    `;

    const Cancel = styled.div`
        top: 0;
        right: 0;
        position: absolute;
        font-size: 20px;
        color: ${theme.syntax};
        margin: 135px 140px 0 0;
        cursor: pointer;
    `;

    const moreStyle = {
        top: 0,
        right: 0,
        position: "absolute",
        paddingTop: 10
    };

    const handleEditMode = () => {
        setEdiMode(!editMode)
    };

    const recommendation = editMode ?
        <div>
            <CommentForm
                comment={comment}
                commentId={id}
                buttonText={"Edit"}
                handleClick={handleEditMode}
            />
            <Cancel onClick={handleEditMode}>Cancel</Cancel>
        </div>
        :
        <div>
            <Text>{comment}</Text>
        </div>;

    return (
        <Wrapper>
            <CommentCard>
                <div style={{paddingBottom: "15px"}}>Unknown</div>
                {recommendation}
            </CommentCard>
            <MoreButton
                color={theme.syntax}
                style={moreStyle}
                comment={comment}
            >
                <MenuItem onClick={handleEditMode}><EditIcon fontSize={"small"}/>Edit</MenuItem>
                <MenuItem><DeleteIcon fontSize={"small"}/>Delete</MenuItem>
            </MoreButton>
        </Wrapper>
    );
}

export default Comment;