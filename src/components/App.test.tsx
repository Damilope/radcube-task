import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { NavBarKeys } from "./NavBar";

test("renders learn react link", () => {
    render(<App />);
    const navItem = screen.getByText(NavBarKeys.Item1);
    expect(navItem).toBeInTheDocument();
});
