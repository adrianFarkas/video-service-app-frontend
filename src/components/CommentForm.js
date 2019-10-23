import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import Rate from "./Rate";
import Button from "@material-ui/core/Button";

function CommentForm(props) {
    const [hover, setHover] = useState(0);
    const [value, setValue] = useState(0);

    const CustomTextField = withStyles({
        root: {
            '& label': {
                color: 'white',
            },
            '& label.Mui-focused': {
                color: 'white',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#740010',
            },
            '& .MuiInput-underline:before': {
                borderBottomColor: '#e2e1da',
            },
            '& .MuiInputBase-root': {
                color: "#ffffff",
            },
            width: 1100,
        },
    })(TextField);

    const hoverChange = (event, newHover) => {
        setHover(newHover)
    };

    const handleClick = () => {
        setValue(hover)
    };

    const btnStyle = {
        backgroundColor: "#ffffff",
        fontWeight: "bold",
        color: "#740010",
        width: "100px",
    };

    const btnPosition = {
        width: "100px",
        position: "absolute",
        padding: "20px 0",
        right: 0
    };

    return (
        <div style={{width: "1100px", position: "relative"}}>
            <CustomTextField label="Comment" />
            <Rate
                value={value}
                handleChange={hoverChange}
                handleClick={handleClick}
                hover={hover}
            />
            <div style={btnPosition}>
                <Button variant="contained" style={btnStyle}>
                    Send
                </Button>
            </div>
        </div>
    );
}

export default CommentForm;