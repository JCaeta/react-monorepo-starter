import { Meta, StoryObj } from "@storybook/react";
import {widths100} from "@/Stories/viewports";
import { MessageInputBox } from "@/Common/Sandbox/MessageInputBox";
import {useState} from 'react'

export default {
    title: "components/Sandbox/MessageInputBox",
    component: MessageInputBox ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
}

export const MessageInputBoxMain = {
    render: () =>{
        const [text, setText] = useState('')
        const [response, setResponse] = useState('')

        const onEnter = (input) => {
            console.log(' ')
            console.log('MessageInputBox onEnter(input)')
            console.log('input: ', input)
            setResponse("This is the response for: " + input)
        }

        const onChange = (input) => {
            setText(input)
            console.log(' ')
            console.log('MessageInputBox onChange(input)')
            console.log('input: ', input)
        }

        return(<>
            <MessageInputBox
                onChange={onChange}
                onEnter={onEnter}
                response={response}/>
        </>)
    } 
}
