import React from "react";
import PropTypes from "prop-types";

import ProfileUi from "../../misc/ProfileUI";

import Gallery from "react-grid-gallery";

import "../Gallery.css";

class GalleryAstronomy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: this.props.images,
            currentImage: 0,
        };

        this.onCurrentImageChange = this.onCurrentImageChange.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
    }

    onCurrentImageChange(index) {
        this.setState({ currentImage: index });
    }

    deleteImage() {
        if (
            window.confirm(
                `Are you sure you want to delete image number ${this.state.currentImage}?`
            )
        ) {
            var images = this.state.images.slice();
            images.splice(this.state.currentImage, 1);
            this.setState({
                images: images,
            });
        }
    }
    render() {
        return (
            <>
                <div className="row-gallery">
                    <div className="header-start-gallery column-gallery">
                        <h6>GALLERY</h6>
                        <p>
                            Discover the astronomy club and its activities and - Become part of them ...
                        </p>
                    </div>
                    <div className="column-gallery">{/* empty */}</div>
                </div>
                <div className="gallery-display">
                    <div
                        style={{
                            display: "block",
                            minHeight: "1px",
                            width: "100%",
                            overflowY: "auto",
                            overflowX: "hidden",
                        }}
                    >
                        <Gallery
                            images={this.state.images}
                            enableLightbox={true}
                            enableImageSelection={false}
                            currentImageWillChange={this.onCurrentImageChange}
                        // customControls={[
                        //   <button className="button-delete" key="deleteImage" onClick={this.deleteImage}>
                        //     Delete Image
                        //   </button>,
                        // ]}
                        />
                    </div>
                </div>
                <div className="row-gallery">
                    <div className="header-start-gallery column-gallery">
                        <h6>THE TEAM</h6>
                        <p>
                            Meet the team - PoR (Positions of Responsibility) Holders
                        </p>
                    </div>
                    <div className="column-gallery">{/* empty */}</div>
                </div>
                <div className="por-list">
                    <div>
                        <ProfileUi
                            imgUrl='https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg'
                            name='Gurbaaz Singh Nandra'
                            designation="Coordinator"
                        /></div>
                    <div>
                        <ProfileUi
                            imgUrl='https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg'
                            name='Mohammad Saad'
                            designation="Coordinator"
                        /></div>
                    <div>
                        <ProfileUi
                            imgUrl='https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg'
                            name='Sunny Kumar Bhagat'
                            designation="Coordinator"
                        /></div>
                    <div>
                        <ProfileUi
                            imgUrl='https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg'
                            name='Varun Muralidharan'
                            designation="Coordinator"
                        /></div>
                </div>
            </>
        );
    }
}

GalleryAstronomy.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
        })
    ).isRequired,
};

GalleryAstronomy.defaultProps = {
    images: [
        {
            src: "Images/clubs/astronomy/1.jpg",
            thumbnail:
                "Images/clubs/astronomy/1.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 274,
            caption: "",
        },
        {
            src: "Images/clubs/astronomy/2.jpg",
            thumbnail:
                "Images/clubs/astronomy/2.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 283,
            caption: "",
        },
        {
            src: "Images/clubs/astronomy/3.jpg",
            thumbnail:
                "Images/clubs/astronomy/3.jpg",
            thumbnailWidth: 271,
            thumbnailHeight: 320,
            caption: "",
        },
        {
            src: "Images/clubs/astronomy/4.jpg",
            thumbnail:
                "Images/clubs/astronomy/4.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "",
        },
        {
            src: "Images/clubs/astronomy/5.jpg",
            thumbnail:
                "Images/clubs/astronomy/5.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "",
        },
        {
            src: "Images/clubs/astronomyg/6.jpg",
            thumbnail:
                "Images/clubs/astronomy/6.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "",
        },
        {
            src: "Images/clubs/astronomy/7.jpg",
            thumbnail:
                "Images/clubs/astronomy/7.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "",
        },

    ],
};

export default GalleryAstronomy;
