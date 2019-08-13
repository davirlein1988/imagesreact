import React from "react";

const ImageList = ({ images }) => {
  return images.map(({ description, id, urls }) => {
    return <img src={urls.regular} key={id} alt={description} />;
  });
};

export default ImageList;
