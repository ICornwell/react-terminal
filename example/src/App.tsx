import React, {useState, useRef} from 'react'

import { ReactTerminal } from 'react-terminal'
import { TerminalContextProvider } from "react-terminal"
import './index.css'
import { v4 as uuidV4} from 'uuid'

const App = () => {
  const [ refreshToggle, setRefreshToggle] = useState(false)

  const lateContent = useRef({id:undefined, text:null})

  function setLateContent(text: any) {
    lateContent.current = text
    setRefreshToggle(!refreshToggle)
  }


  function lateReply(text: string ) {
    setTimeout(()=>{setLateContent({id: uuidV4(), text:text})},1000)
  }

  function useAndClearLateContent() {
    const result = lateContent.current
    lateContent.current = {id:undefined, text:null}
    return result
  }

  return <div>
    <TerminalContextProvider >
      <ReactTerminal theme='dark'
                        showControlButtons='False'
                        prompt='->'
                        welcomeMessage="Game Terminal"
                        lateResponse={useAndClearLateContent()}
                        errorMessage="Unknown command, use '?' to evaluate expressions."
                        commands={{ '__eval':  (expr:string) => { lateReply(expr); return'you typed'+(expr) }}}>
      </ReactTerminal>
      </TerminalContextProvider>
    </div>
}

export default App
