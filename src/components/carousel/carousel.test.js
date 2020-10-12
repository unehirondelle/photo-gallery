import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./carousel";

const props = {
    showCarousel: true,
    albumPictureIndex: 0,
    currentPicture: 501,
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

it("the AlbumsList is rendered successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Carousel {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});