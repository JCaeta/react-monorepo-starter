import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { } from '@mui/material'
import { MessageInputBox } from './MessageInputBox';

export const WebSocket = props => {
    const [input, setInput] = useState('')
    const [response, setResponse] = useState('')

    const onEnter = () => {
        console.log(' ')
        console.log('MessageInputBox onEnter()')
        console.log('input: ', input)
        props.onSend(input)
    }

    const onChange = (text) => {
        setInput(text)
    }

    return(<>
        <MessageInputBox
            onChange={onChange}
            onEnter={onEnter}
            response={response}/>
    </>)
}

WebSocket.defaultProps =
{
    onSend: function(){}
}

WebSocket.propTypes =
{
    onSend: PropTypes
}


