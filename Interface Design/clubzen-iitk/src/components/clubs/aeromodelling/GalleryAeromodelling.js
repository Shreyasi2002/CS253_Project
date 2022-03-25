import React from "react";
import PropTypes from "prop-types";

import ProfileUi from 'react-profile-card';
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
              Discover the various clubs and festivals - Become part of them ...
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
            <h6>PoR</h6>
            <p>
              Discover the various clubs and festivals - Become part of them ...
            </p>
          </div>
          <div className="column-gallery">{/* empty */}</div>
            </div>
            <div className="por-list">
                <div>
                <ProfileUi
                    imgUrl='https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg'
                    name='Name'
                    designation="Secretary"
                    /></div>
                <div>
                <ProfileUi
                    imgUrl='https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg'
                    name='Name'
                    designation="Secretary"
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
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 274,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
      thumbnail:
        "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 283,
      caption: "37H (gratispgraphy.com)",
    },
    {
      src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
      thumbnail:
        "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
      thumbnailWidth: 271,
      thumbnailHeight: 320,
      caption: "Orange Macro (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
      thumbnail:
        "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "201H (gratisography.com)",
    },
    {
      src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
      thumbnail:
        "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
      thumbnail:
        "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "Man on BMX (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)",
    },
    {
      src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
      thumbnail:
        "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
      thumbnailWidth: 257,
      thumbnailHeight: 320,
      caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    },
  ],
};

export default GalleryAeromodelling;
