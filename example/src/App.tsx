import React from 'react'

import { ReactTerminal } from 'react-terminal'
import { TerminalContextProvider } from "react-terminal"
import './index.css'

const App = () => {
  return <div>
    <TerminalContextProvider>
      <ReactTerminal theme='dark'
                        showControlButtons='False'
                        prompt='->'
                        welcomeMessage="Terminal sandbox test"
                        errorMessage="Unknown command, use '?' to evaluate expressions."
                        commands={{ '__eval':  (expr:string) => 'you typed'+(expr) }}>
      </ReactTerminal>
      </TerminalContextProvider>
    </div>
}

export default App
