import React, {useContext, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Rate from "../util/Rate";
import Button from "@material-ui/core/Button";
import {RootContext} from "../../contexts/RootContext";
import {colors} from "../../theme";
import {makeStyles} from "@material-ui/core";
import {ThemeContext} from "../../contexts/ThemeContext";

function CommentForm(props) {
    const {state, sendRecommendation, updateRecommendation} = useContext(RootContext);
    const {rate, comment, commentId, buttonText} = props;
    const {theme} = useContext(ThemeContext);

    const [hover, setHover] = useState(0);
    const [value, setValue] = useState(rate ? rate : 0);
    const [text, setText] = useState(comment ? comment : "");

    const isBtnDisabled = text === "" || value < 1;

    const btnStyle = {
        backgroundColor: isBtnDisabled ? theme.disabledBtn : theme.button,
        color: isBtnDisabled ? theme.disabledBtnTxt : theme.buttonTxt,
        fontWeight: "bold",
        width: "100px",
    };

    const btnPosition = {
        width: "100px",
        position: "absolute",
        padding: "20px 0",
        top: 0,
        right: 0,
        marginTop: "50px",
    };

    const useStyles = makeStyles(() => ({
        root: {
            width: "100%",
            "& label": {
                color: theme.syntax,
            },
            "& label.Mui-focused": {
                color: theme.syntax,
            },
            "& .MuiInputBase-root": {
                color: theme.syntax,
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: colors.claret,
            },
            "& .MuiInput-underline:before": {
                borderBottomColor: theme.syntax,
            },
        },

    }));

    const hoverChange = (event, newHover) => {
        setHover(newHover)
    };

    const handleClick = () => {
        setValue(hover)
    };

    const textChange = (event) => {
        setText(event.target.value);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const videoId = state.selectedVideo.id;
        const recommendation = {
            comment: text,
            rating: value
        };
        if (commentId) updateRecommendation(commentId, recommendation);
        else sendRecommendation(videoId, recommendation);
        setText("")
    };
    const classes = useStyles();

    return (
        <div style={{width: "100%", position: "relative"}}>
            <form onSubmit={handleSubmit}>
            <TextField
                className={classes.root}
                label="Comment"
                onChange={textChange}
                value={text}
            />
            <Rate
                value={value}
                handleChange={hoverChange}
                handleClick={handleClick}
                hover={hover}
                style={{padding: "20px 0"}}
            />
            <div style={btnPosition}>
                <Button variant="contained" style={btnStyle} type="submit" disabled={isBtnDisabled}>
                    {buttonText ? buttonText : "Send"}
                </Button>
            </div>
            </form>
        </div>
    );
}

export default CommentForm;