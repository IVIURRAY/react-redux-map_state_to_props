import React from 'react';
import MyButton from './MyButton';
import './Buttons.css'

const Buttons = props => {

    const { addToCount, minusToCount, resetCount } = props;

    return (
        <div className="buttonsContainer">
            <MyButton text='-1' onClick={minusToCount} />
            <MyButton text='Reset' onClick={resetCount} />
            <MyButton text='+1' onClick={addToCount} />
        </div>
    )
}

export default Buttons;