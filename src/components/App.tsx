import React from "react";
import { css, cx } from "@emotion/css";
import NavBar, { NavBarKeys } from "./NavBar";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const divContainerClassName = css({
    display: "flex",
    width: "100%",
    height: "100%",
});

const App: React.FC<{}> = (props) => {
    const [selectedNav, setSelectedNav] = React.useState(NavBarKeys.Item1);

    let content: React.ReactNode = null;

    switch (selectedNav) {
        case NavBarKeys.Item1:
            content = <PageOne />;
            break;

        case NavBarKeys.Item2:
            content = <PageTwo />;
            break;
    }

    return (
        <div className={divContainerClassName}>
            <NavBar selectedKey={selectedNav} onSelect={setSelectedNav} />
            {content}
        </div>
    );
};

export default App;
