import React from 'react';
import Rating from "@material-ui/lab/Rating";
import Tooltip from "@material-ui/core/Tooltip";

function Rate(props) {
    const {value, handleChange, handleClick, disabled, size, style} = props;

    const labels = {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
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
        <div style={style ? style : null}>
            <Rating
                name="hover-tooltip"
                value={value}
                size={size ? size : "large"}
                precision={1}
                onChangeActive={handleChange}
                onMouseUp={handleClick}
                IconContainerComponent={IconContainer}
                disabled={disabled ? disabled : false}
            />
        </div>
    );
}

export default Rate;