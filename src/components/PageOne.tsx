import React from "react";
import { css } from "@emotion/css";

const divContainerClassName = css({
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
});

const PageOne: React.FC<{}> = (props) => {
    return (
        <div className={divContainerClassName}>
            <span>Welcome User!</span>
        </div>
    );
};

export default PageOne;
