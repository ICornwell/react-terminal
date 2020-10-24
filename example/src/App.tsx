import React, {useState, useRef} from 'react'

import { ReactTerminal } from 'react-terminal'
import { TerminalContextProvider } from "react-terminal"
import './index.css'
import { v4 as uuidV4} from 'uuid'

const App = () => {
  const [ , setRefreshToggle] = useState("")

  const lateContent = useRef({id:undefined, text:null})

  function setLateContent(content: any) {
    if (content.text === "ask question")
      addQuestionToContent(content)
    lateContent.current = content
    setRefreshToggle(uuidV4())

  }

  function addQuestionToContent(content: any) {
    const question = {
      text: 'Do you want to answer this question?',
      answers : [
        {text:'No', instruction: 'You answered negatively :('},
        {text:'Yes', instruction: 'You answered positively :)'}
      ]
    }
    content.question = question
  }


  function lateReply(text: string ) {
    setTimeout(()=>{setLateContent({id: uuidV4(), text:text})},1000)
  }

  return <div>
    <TerminalContextProvider >
      <ReactTerminal theme='dark'
                        showControlButtons={false}
                        prompt='->'
                        welcomeMessage="Game Terminal"
                        lateResponse={lateContent.current}
                        errorMessage="Unknown command, use '?' to evaluate expressions."
                        commands={{ '__eval':  (expr:string) => { lateReply(expr); return'You typed: '+(expr) }}}>
      </ReactTerminal>
      </TerminalContextProvider>
    </div>
}

export default App
