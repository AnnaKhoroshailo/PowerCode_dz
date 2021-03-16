import './GalleryAlbum.scss';
import React from 'react';
import GalleryPhoto from "./GalleryPhoto";

class GalleryAlbum extends React.Component { 
  render(){
    let {album,id}=this.props;
    return(
      <div className="GalleryAlbum">
        <h2 className="GalleryAlbum__title">Альбом {id}</h2>
        <div className="GalleryAlbum__container">
          {album.map(photo=><GalleryPhoto photo={photo} key={photo.id}/>)}
        </div>
      </div>
    )
  }
  }
  
  export default GalleryAlbum;