import React from 'react';
import Rating from "@material-ui/lab/Rating";
import Tooltip from "@material-ui/core/Tooltip";

function Rate(props) {
    const {value, handleChange, handleClick} = props;

    const labels = {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
    };

    const style = {
        padding: "20px 0",
        position: "absolute"
    };


    const IconContainer = (props) => {
        const { value, ...other } = props;
        return (
            <Tooltip title={labels[value] || ''}>
                <div {...other} />
            </Tooltip>
        );
    };

    return (
        <div style={style}>
            <Rating
                name="hover-tooltip"
                value={value}
                size={"large"}
                precision={1}
                onChangeActive={handleChange}
                onMouseUp={handleClick}
                IconContainerComponent={IconContainer}
            />
        </div>
    );
}

export default Rate;