import React from "react";
import ReactDOM from "react-dom";
import Jumbotron from "./jumbotron";

it("the Jumbotron is rendered successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Jumbotron/>, div);
    ReactDOM.unmountComponentAtNode(div);
});