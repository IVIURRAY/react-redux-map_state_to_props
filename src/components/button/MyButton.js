import React from 'react';
import { Button } from 'antd';

const MyButton = props => {

    const {text, onClick} = props;

    return (
        <Button onClick={onClick} type='primary'>
            {text}
        </Button>
    )
}

export default MyButton;