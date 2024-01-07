import {useState, useEffect} from 'react'
import { MessageInputBox} from '@/Common/Sandbox/MessageInputBox'
import { sendMessage } from '../../api/sandbox/requests'
import { socket } from '../../api/sandbox/requests'

export default function WebSocketPage() {
    const [response, setResponse] = useState()

    useEffect(() => {
        socket.on('result', (data) => {
            setResponse(data.data)
        })
    })

    const onEnter = (input) => {
        console.log(' ')
        console.log('MessageInputBox onEnter(input)')
        console.log('input: ', input)
        sendMessage(input)
    }

    return (<>
        <MessageInputBox
            onEnter={onEnter}
            response={response}/>
    </>)
}



