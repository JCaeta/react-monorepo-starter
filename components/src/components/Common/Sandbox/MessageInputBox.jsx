import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { } from '@mui/material'

export const MessageInputBox = props => {
    const [input, setInput] = useState('')
    const onInputChange = (e) => {
        setInput(e.target.value)
        props.onChange(e.target.value)
    }

    const onEnter = () => {
        props.onEnter(input)
    }

    return (<>
        <input
            type="text"
            value={input}
            onChange={onInputChange}
            placeholder="Type your message..."/>

        <button onClick={onEnter}>Enter</button>
        <div>
            <span>Response: {props.response}</span>
        </div>
    </>)
}

MessageInputBox.defaultProps =
{
    onChange: function(){},
    onEnter: function(){},
    response: ''
}

MessageInputBox.propTypes =
{
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    response: PropTypes.string
}


