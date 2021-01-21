import { css } from "@emotion/css";
import React from "react";
import { AnswerType } from "./PageTwo";

export interface IAnswerTypeNodesProps {
    type: AnswerType;
    count: number;
}

const radioClassName = css({
    display: "inline-block",
    marginRight: "16px",
    marginBottom: "4px",

    ["&:last-of-type"]: {
        marginRight: "0px",
    },
});

const containerClassName = css({
    display: "flex",
    width: "100%",
    backgroundColor: "#CCC",
    padding: "8px",
    paddingBottom: "4px",
    flexWrap: "wrap",
});

const renderRadioItems = (num: number) => {
    const nodes: React.ReactNode[] = [];

    while (num > 0) {
        // TODO: shouldn't use indexes as keys, but we don't have anything else
        nodes.push(<input key={num} type="radio" className={radioClassName} />);
        num -= 1;
    }

    return nodes;
};

const renderCheckboxItems = (num: number) => {
    const nodes: React.ReactNode[] = [];

    while (num > 0) {
        nodes.push(
            <input key={num} type="checkbox" className={radioClassName} />
        );
        num -= 1;
    }

    return nodes;
};

const AnswerTypeNodes: React.FC<IAnswerTypeNodesProps> = (props) => {
    const { type, count } = props;
    let nodes: React.ReactNode = [];

    // TODO: only handles 'radio' and 'checkbox'
    switch (type) {
        case AnswerType.Checkbox:
            nodes = renderCheckboxItems(count);
            break;

        case AnswerType.Radio:
            nodes = renderRadioItems(count);
            break;

        default:
            return null;
    }

    return <div className={containerClassName}>{nodes}</div>;
};

export default AnswerTypeNodes;
