import PropTypes from "prop-types";
declare function Terminal(props: any): JSX.Element;
declare namespace Terminal {
    var propTypes: {
        enableInput: PropTypes.Requireable<boolean>;
        caret: PropTypes.Requireable<boolean>;
        theme: PropTypes.Requireable<string>;
        showControlButtons: PropTypes.Requireable<boolean>;
        controlButtonLabels: PropTypes.Requireable<string[]>;
        prompt: PropTypes.Requireable<string>;
        commands: PropTypes.Requireable<{
            [x: string]: PropTypes.ReactNodeLike;
        }>;
        welcomeMessage: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        errorMessage: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        enableInput: boolean;
        caret: boolean;
        theme: string;
        showControlButtons: boolean;
        controlButtonLabels: string[];
        prompt: string;
        commands: {};
        welcomeMessage: string;
        errorMessage: string;
    };
}
export default Terminal;
