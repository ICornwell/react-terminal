export declare const useEditorInput: (consoleFocused: boolean, editorInput: string, setEditorInput: any, editorInputAfter: string, setEditorInputAfter: any, setProcessCurrentLine: any, enableInput: boolean) => void;
export declare const useBufferedContent: (processCurrentLine: any, setProcessCurrentLine: any, prompt: string, currentText: any, setCurrentText: any, commands: any, errorMessage: any, currentQuestion: any) => void;
export declare const useCurrentLine: (caret: boolean, consoleFocused: boolean, prompt: string, commands: any, errorMessage: any, enableInput: boolean, currentQuestion: any) => JSX.Element;
export declare const useScrollToBottom: (changesToWatch: any, wrapperRef: any) => void;
