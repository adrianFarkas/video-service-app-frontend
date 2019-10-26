import React, {useContext, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Rate from "./Rate";
import Button from "@material-ui/core/Button";
import {RootContext} from "../contexts/RootContext";
import {colors, dark, light} from "../theme";
import {makeStyles} from "@material-ui/core";

function CommentForm(props) {
    const {state, sendRecommendation, updateRecommendation} = useContext(RootContext);
    const {isLightTheme} = state;
    const theme = isLightTheme ? light : dark;
    const {rate, comment, commentId, buttonText} = props;

    const [hover, setHover] = useState(0);
    const [value, setValue] = useState(rate);
    const [text, setText] = useState(comment);

    const btnStyle = {
        backgroundColor: theme.button,
        fontWeight: "bold",
        color: theme.buttonTxt,
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
        if(text !== "" && value > 0) {
            const videoId = state.selectedVideo.id;
            const recommendation = {
                comment: text,
                rating: value
            };
            if (commentId) updateRecommendation(commentId, recommendation);
            else sendRecommendation(videoId, recommendation);
            setText("")
        }
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
                <Button variant="contained" style={btnStyle} type="submit">
                    {buttonText ? buttonText : "Send"}
                </Button>
            </div>
            </form>
        </div>
    );
}

export default CommentForm;