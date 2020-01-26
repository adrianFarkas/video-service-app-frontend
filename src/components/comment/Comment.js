import React, {useContext, useState} from 'react';
import styled from "styled-components";
import EditMenu from "../util/EditMenu";
import MenuItem from "@material-ui/core/MenuItem";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentForm from "./CommentForm";
import {ThemeContext} from "../../contexts/ThemeContext";
import UserAvatar from "../util/UserAvatar";
import {AuthContext} from "../../contexts/AuthContext";
import {getUserName} from "../../util/util";
import {CommentContext} from "../../contexts/CommentContext";

const CommentContainer = styled.div`
    padding: 10px 5px;
    border-bottom: 1px solid ${props => props.transparentSyntax};
    display: flex;
    color: ${props => props.syntax}
`;

const Text = styled.div`
    margin: 5px 0;
`;

const CreationDate = styled(Text)`
    font-size: 12px;
    margin-bottom: 20px;
`;

const Name = styled(Text)`
    font-size: 15px;
    font-weight: bold;
`;

const Main = styled.div`
    width: 100%;
    margin: 0 15px;
`;

const Menu = styled.div`
    display: ${props => !props.displayable && "none"};
`;

const Cancel = styled.div`
    font-size: 12px;
    cursor: pointer;
    position: absolute;
    top: 59px;
    right: 110px;
    padding: 8px 0;
    text-transform: uppercase;
`;

function Comment({data}) {
    const {id, comment, creationDate, author} = data;
    const [editMode, setEdiMode] = useState(false);
    const {theme} = useContext(ThemeContext);
    const {isLoggedIn, userData} = useContext(AuthContext);
    const {deleteComment} = useContext(CommentContext);

    const isMenuDisplayable = isLoggedIn && userData.id === author.id;

    const handleEditMode = () => {
        setEdiMode(!editMode)
    };

    const removeComment = () => {
        if (editMode) setEdiMode(false);
        deleteComment(id);
    };

    const description = editMode ?
        <div style={{position: "relative"}}>
            <CommentForm
                comment={comment}
                commentId={id}
                buttonText={"Edit"}
                handleClick={handleEditMode}
            />
            <Cancel color={theme.syntax} onClick={handleEditMode}>Cancel</Cancel>
        </div>
        :
        <Text>{comment}</Text>
        ;

    return (
        <CommentContainer {...theme} className={"transition"}>
            <UserAvatar user={author && author}/>
            <Main>
                <Name>{getUserName(author)}</Name>
                <CreationDate>{new Date(creationDate).toDateString()}</CreationDate>
                {description}
            </Main>
            <Menu displayable={isMenuDisplayable}>
                <EditMenu
                    color={theme.syntax}
                    comment={comment}
                >
                    <MenuItem onClick={handleEditMode}><EditIcon fontSize={"small"}/>Edit</MenuItem>
                    <MenuItem onClick={removeComment}><DeleteIcon fontSize={"small"}/>Delete</MenuItem>
                </EditMenu>
            </Menu>
        </CommentContainer>
    );
}

export default Comment;