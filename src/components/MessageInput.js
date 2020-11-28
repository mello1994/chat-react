import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        gridRow: 2,
    },
});

const MessageInput = () => {
    const classes = useStyles();
    return <div className={classes.root}>MessageInput</div>
};

export default MessageInput;