import React from "react";



class CatalogPreview extends React.Component {

    constructor(props) {
        super(props);
        this.listener = null;
        this.state = {
            status: "top",
        };
    }

    // componentDidMount() {
    //     this.listener = document.addEventListener("scroll", e => {
    //         var scrolled = document.scrollingElement.scrollTop;
    //         if (scrolled >= 100) {
    //             if (this.state.status !== "not-top") {
    //                 this.setState({ status: "not-top" });
    //             }
    //         } else {
    //             if (this.state.status !== "top") {
    //                 this.setState({ status: "top" });
    //             }
    //         }
    //     });
    // }

    // componentDidUpdate() {
    //     document.removeEventListener("scroll", this.listener);
    // }
    render() {

        return (""
        );
    }
}


export default CatalogPreview;