import React from "react";
import { css } from "@emotion/css";

const labelClassName = css({
    display: "flex",
    marginBottom: "32px",
});

const labelTitleClassName = css({
    display: "flex",
    flex: 1,
});

const labelInputContainerClassName = css({
    display: "flex",
    flex: 2,
});

export interface IFormItemProps {
    title?: React.ReactNode;
    useLabel?: boolean;
}

const FormItem: React.FC<IFormItemProps> = (props) => {
    const { title, useLabel, children } = props;
    const wrapper = useLabel ? "label" : "div";

    const content = (
        <React.Fragment>
            <div className={labelTitleClassName}>{title}</div>
            <div className={labelInputContainerClassName}>{children}</div>
        </React.Fragment>
    );

    if (useLabel) {
        return <label className={labelClassName}>{content}</label>;
    }

    return <div className={labelClassName}>{content}</div>;
};

FormItem.defaultProps = {
    useLabel: true,
};

export default FormItem;
