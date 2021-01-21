import React from "react";
import { css } from "@emotion/css";
import FormItem from "./FormItem";
import AnswerTypeNodes from "./AnswerTypeNodes";

const outerDivContainerClassName = css({
    display: "flex",
    flex: 1,
    padding: "32px",
    justifyContent: "center",
});

const innerDivContainerClassName = css({
    display: "flex",
    width: "500px",
    flexDirection: "column",
});

const textareaClassName = css({
    width: "100%",
});

const numberClassName = css({
    width: "48px",
    height: "24px",
});

const selectClassName = css({
    height: "32px",
});

const btnClassName = css({
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "8px",
    marginRight: "16px",
    width: "124px",
    display: "inline-block",
    padding: "6px",
});

export enum AnswerType {
    DropdownList = "Dropdown list",
    Checkbox = "Checkbox",
    Radio = "Radio",
    Date = "Date",
}

export interface IPageTwoFormState {
    questionText?: string;
    answerType?: AnswerType;
    numberOfListItems?: number;
}

const initialState: IPageTwoFormState = {
    questionText: "",
};

interface IPageTwoFormAction {
    type: keyof IPageTwoFormState;
    data: any;
}

const pageTwoFormReducer = (
    state: IPageTwoFormState,
    action: IPageTwoFormAction
): IPageTwoFormState => {
    switch (action.type) {
        case "answerType":
            return { ...state, answerType: action.data };

        case "numberOfListItems":
            return { ...state, numberOfListItems: action.data };

        case "questionText":
            return { ...state, questionText: action.data };

        default:
            return state;
    }
};

const kSelectOptionEmptyString = "";
const kTextareaRows = 4;

const PageTwo: React.FC<{}> = (props) => {
    const [state, dispatch] = React.useReducer(
        pageTwoFormReducer,
        initialState
    );

    const answerTypeNodes =
        state.answerType &&
        state.numberOfListItems &&
        state.numberOfListItems > 0 ? (
            <AnswerTypeNodes
                type={state.answerType}
                count={state.numberOfListItems}
            />
        ) : null;

    return (
        <div className={outerDivContainerClassName}>
            <div className={innerDivContainerClassName}>
                <FormItem title="Enter Question Text:">
                    <textarea
                        value={state.questionText}
                        onChange={(evt) =>
                            dispatch({
                                type: "questionText",
                                data: evt.target.value,
                            })
                        }
                        className={textareaClassName}
                        rows={kTextareaRows}
                    />
                </FormItem>
                <FormItem title="Select Answer Type:">
                    <select
                        onChange={(evt) => {
                            const selected = evt.target.value;

                            if (selected !== kSelectOptionEmptyString) {
                                dispatch({
                                    type: "answerType",
                                    data: selected,
                                });
                            } else {
                                dispatch({
                                    type: "answerType",
                                    data: null,
                                });
                            }
                        }}
                        className={selectClassName}
                    >
                        <option value={kSelectOptionEmptyString}>
                            --Please choose an option--
                        </option>
                        <option value={AnswerType.DropdownList}>
                            {AnswerType.DropdownList}
                        </option>
                        <option value={AnswerType.Checkbox}>
                            {AnswerType.Checkbox}
                        </option>
                        <option value={AnswerType.Radio}>
                            {AnswerType.Radio}
                        </option>
                        <option value={AnswerType.Date}>
                            {AnswerType.Date}
                        </option>
                    </select>
                </FormItem>
                <FormItem title="Number of List Items?">
                    <input
                        type="number"
                        onChange={(evt) => {
                            const num = (evt.target.value || 0) as number;

                            if (num >= 0) {
                                dispatch({
                                    type: "numberOfListItems",
                                    data: num,
                                });
                            }
                        }}
                        className={numberClassName}
                        min={0}
                    />
                </FormItem>
                {answerTypeNodes && (
                    <FormItem useLabel={false}>{answerTypeNodes}</FormItem>
                )}
                <FormItem>
                    <button type="button" className={btnClassName}>
                        Continue
                    </button>
                    <button type="button" className={btnClassName}>
                        Cancel
                    </button>
                </FormItem>
            </div>
        </div>
    );
};

export default PageTwo;
