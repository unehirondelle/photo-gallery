import React from "react";
import ReactDOM from "react-dom";
import AuthorsList from "./authorsList";

    const props = {
        authors: [{
            id: 1,
            name: "Leanne Graham"
        }]
}

    it("the AuthorsList is rendered successfully", () => {
        const div = document.createElement("div");
        ReactDOM.render(<AuthorsList {...props} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });