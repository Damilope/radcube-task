import React from "react";
import { css, cx } from "@emotion/css";

export enum NavBarKeys {
    Item1 = "Item 1",
    Item2 = "Item 2",
}

export interface INavBarProps {
    selectedKey: NavBarKeys;
    onSelect: (key: NavBarKeys) => void;
}

const navClassName = css({
    borderRight: "1px solid black",
    padding: "32px 0px",

    ["& ol"]: {
        listStyleType: "none",
        paddingLeft: "0px",
    },
});

const listItemClassName = css({
    display: "block",
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    padding: "8px 32px",
    cursor: "pointer",

    ["&:first-of-type"]: {
        borderBottom: "none",
    },
});

const selectedListItemClassName = css({
    backgroundColor: "#CCC",
});

const NavBar: React.FC<INavBarProps> = (props) => {
    const { selectedKey, onSelect } = props;

    return (
        <nav className={navClassName}>
            <ol>
                <li
                    className={cx(listItemClassName, {
                        [selectedListItemClassName]:
                            selectedKey === NavBarKeys.Item1,
                    })}
                    onClick={() => onSelect(NavBarKeys.Item1)}
                >
                    {NavBarKeys.Item1}
                </li>
                <li
                    className={cx(listItemClassName, {
                        [selectedListItemClassName]:
                            selectedKey === NavBarKeys.Item2,
                    })}
                    onClick={() => onSelect(NavBarKeys.Item2)}
                >
                    {NavBarKeys.Item2}
                </li>
            </ol>
        </nav>
    );
};

export default NavBar;
