import React from "react";
import ReactDOM from "react-dom";
import Album from "./album";

const props = {
    showAlbum: true,
    authorName: "Leanne Graham",
    albumTitle: "quidem molestiae enim",
    photos: [
        {
            albumId: 11,
            id: 501,
            thumbnailUrl: "https://via.placeholder.com/150/cda4c0",
            title: "asperiores exercitationem voluptates qui amet quae necessitatibus facere",
            url: "https://via.placeholder.com/600/cda4c0"
        }
    ]
}

it("the Album is rendered successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Album {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});