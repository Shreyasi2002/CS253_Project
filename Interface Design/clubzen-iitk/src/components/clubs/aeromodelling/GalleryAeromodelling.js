import React from "react";
import PropTypes from "prop-types";

import ProfileUi from "../../misc/ProfileUI";
import Gallery from "react-grid-gallery";

import "../Gallery.css";

class GalleryAeromodelling extends React.Component {
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
              Discover the aeromodelling club and its activities and - Become part of them ...
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
              overflow: "auto",
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
            
          </div>
          <div className="column-gallery">{/* empty */}</div>
            </div>
            <div className="por-list">
                <div>
                <ProfileUi
                    imgUrl='https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg'
                    name='Pranshu Singhal'
                    designation="Coordinator"
                    /></div>
                <div>
                <ProfileUi
                    imgUrl='https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg'
                    name='Mohit Anand'
                    designation="Coordinator"
                /></div>
                <div>
                <ProfileUi
                    imgUrl='https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg'
                    name='Moin Ahmed'
                    designation="Coordinator"
                /></div>
            </div>
      </>
    );
  }
}

GalleryAeromodelling.propTypes = {
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

GalleryAeromodelling.defaultProps = {
  images: [
    {
      src: "Images/clubs/aeromodelling/1.jpg",
      thumbnail:
        "Images/clubs/aeromodelling/1.jpg",
      thumbnailWidth: 1320,
      thumbnailHeight: 1274,
      caption: "",
    },
    {
      src: "Images/clubs/aeromodelling/2.jpg",
      thumbnail:
        "Images/clubs/aeromodelling/2.jpg",
      thumbnailWidth: 1320,
      thumbnailHeight: 1283,
      caption: "",
    },
    {
      src: "Images/clubs/aeromodelling/3.jpg",
      thumbnail:
        "Images/clubs/aeromodelling/3.jpg",
      thumbnailWidth: 1271,
      thumbnailHeight: 1320,
      caption: "",
    },
    {
      src: "Images/clubs/aeromodelling/4.jpg",
      thumbnail:
        "Images/clubs/aeromodelling/4.jpg",
      thumbnailWidth: 1320,
      thumbnailHeight: 1213,
      caption: "",
    },
    {
      src: "Images/clubs/aeromodelling/5.jpeg",
      thumbnail:
        "Images/clubs/aeromodelling/5.jpeg",
      thumbnailWidth: 1320,
      thumbnailHeight: 1213,
      caption: "",
    },
    {
      src: "Images/clubs/aeromodelling/6.jpg",
      thumbnail:
        "Images/clubs/aeromodelling/6.jpg",
      thumbnailWidth: 1320,
      thumbnailHeight: 1213,
      caption: "",
    },
    {
      src: "Images/clubs/aeromodelling/7.jpeg",
      thumbnail:
        "Images/clubs/aeromodelling/7.jpeg",
      thumbnailWidth: 1320,
      thumbnailHeight: 1213,
      caption: "",
    },
    
  ],
};

export default GalleryAeromodelling;
