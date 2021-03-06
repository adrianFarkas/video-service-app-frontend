import React, {useContext, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {RootContext} from "../../contexts/RootContext";
import {makeStyles} from "@material-ui/core";
import {ThemeContext} from "../../contexts/ThemeContext";
import {CommentContext} from "../../contexts/CommentContext";
import {UserContext} from "../../contexts/UserContext";

function CommentForm(props) {
    const {state} = useContext(RootContext);
    const {sendComment, updateComment} = useContext(CommentContext);
    const {isLoggedIn} = useContext(UserContext);
    const {theme} = useContext(ThemeContext);

    const {comment, commentId, buttonText, handleClick} = props;

    const [text, setText] = useState(comment ? comment : "");

    const isBtnDisabled = text === "";

    const useStyles = makeStyles(() => ({
        root: {
            width: "100%",
            "& label, label.Mui-focused, .MuiInputBase-root": {
                color: theme.syntax,
                transition: "all .5s"
            },
            "& .MuiInput-underline:after, .MuiInput-underline:before": {
                borderBottomColor: theme.syntax,
                transition: "all .5s"
            },
            "& .MuiInput-underline": {
                '&:hover:before': {
                    borderBottomColor: theme.syntax,
                },
            },
            "& .Mui-disabled": {
                color: theme.transparentSyntax,
            },
        },
        button: {
            backgroundColor: theme.button,
            color: theme.buttonTxt,
            fontWeight: "bold",
            padding: "3px 25px",
            margin: "10px 0",
            float: "right",
            transition: "all .5s",
            "&:hover" : {
                backgroundColor: theme.button,
            },
            "&:disabled": {
                color: theme.transparentSyntax,
                backgroundColor: theme.disabled,
            },
        }
    }));

    const textChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const videoId = state.selectedVideo.id;
        const recommendation = {
            comment: text,
        };
        if (commentId) {
            updateComment(commentId, recommendation);
            handleClick();
        }
        else sendComment(videoId, recommendation);
        setText("");
    };
    const classes = useStyles();

    return (
        <form id={"comment-form"} onSubmit={handleSubmit}>
            <TextField
                className={classes.root}
                label={isLoggedIn ? "Comment" : "You have to be logged in to post a comment"}
                onChange={textChange}
                value={text}
                disabled={!isLoggedIn}
            />
            <Button className={classes.button} type="submit" disabled={isBtnDisabled}>
                {buttonText ? buttonText : "Send"}
            </Button>
        </form>
    );
}

export default CommentForm;