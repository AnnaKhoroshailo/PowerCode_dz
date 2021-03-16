import './GalleryPhoto.scss';
import React from 'react';

class GalleryPhoto extends React.Component { 
  render(){
    let {title,url}=this.props.photo;
    return(
      <div className="GalleryPhoto">
        <div className="GalleryPhoto__img" style={{backgroundImage: `url(${url})`}}>
        </div>
        <div className="GalleryPhoto__title">{title}</div>
      </div>
    )
  }
}

export default GalleryPhoto;