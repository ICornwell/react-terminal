import * as React from "react";

import { StyleContext } from "../contexts/StyleContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { TerminalContext } from "../contexts/TerminalContext";
import {
  useCurrentLine,
  useScrollToBottom,
} from "../hooks/editor";
import { ConsoleView } from "react-device-detect";

export default function Editor(props: any) {
  const wrapperRef = React.useRef(null);
  const lateResponseId = React.useRef(undefined)
  const style = React.useContext(StyleContext);
  const themeStyles = React.useContext(ThemeContext);
  const { bufferedContent, setBufferedContent } = React.useContext(TerminalContext);

  useScrollToBottom(bufferedContent, wrapperRef);

  const {
    enableInput, //get both props
    caret,
    consoleFocused,
    prompt,
    commands,
    welcomeMessage,
    lateResponse,
    errorMessage
  } = props;

  const currentLine = useCurrentLine(
    caret,  // useCurrentLine takes both props as parameters
    consoleFocused,
    prompt,
    commands,
    errorMessage, 
    enableInput //enableInput prop as a parameter
  );

  // console.log(`lateResponse: ${lateResponse}, id: ${lateResponse?lateResponse.id:'err'}, text: ${lateResponse?lateResponse.text:'err'}`)

  
  if (lateResponse && lateResponse.id 
    && lateResponse.id !== lateResponseId.current
    && lateResponse.text) {
    lateResponseId.current = lateResponse.id
   
 //     console.log(`Adding late content: ${lateResponse.text}`)

    setBufferedContent(
      <>
        {bufferedContent}
        <span>
          {lateResponse.text.split('\n').map(line=> (<>{line}<br/></> ))}
        </span>
        
      </>
    )
  }

  return (
    <div ref={wrapperRef} className={style.editor} style={{ background: themeStyles.themeBGColor }}>
      {welcomeMessage}<br/>
      {bufferedContent}
      {currentLine}
    </div>
  );
}
