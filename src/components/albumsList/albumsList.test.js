import React from "react";
import ReactDOM from "react-dom";
import AlbumsList from "./albumsList";

const props = {
    showAlbumsList: true,
    authors: [{
        id: 1,
        name: "Leanne Graham"
    }],
    albums: [{
        id: 1,
        title: "quidem molestiae enim",
        userId: 1,
        photos: [
            {
                albumId: 11,
                id: 501,
                thumbnailUrl: "https://via.placeholder.com/150/cda4c0",
                title: "asperiores exercitationem voluptates qui amet quae necessitatibus facere",
                url: "https://via.placeholder.com/600/cda4c0"
            }
        ]
    }]
}

it("the AlbumsList is rendered successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AlbumsList {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});