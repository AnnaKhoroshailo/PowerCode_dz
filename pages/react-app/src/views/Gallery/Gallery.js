import './Gallery.scss';
import React from 'react';
import GalleryAlbum from "../../components/GalleryItems/GalleryAlbum";

class Gallery extends React.Component { 
  constructor(props) { 
    super(props);
    this.state={
      photos: [],
      loading: true
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res=>res.json())
      .then(response=>{
        this.setState({
          loading: false,
          photos: response
        })
      });
  }
  
  render(){
    function groupByAlbum(arr) {
      const albumsById = arr.reduce((acc, elem) => {
        const album = elem.albumId;
        if(!acc[album]) {
          acc[album] = [];
        }
        acc[album].push(elem);
        return acc;
      }, {})
      return Object.getOwnPropertyNames(albumsById).map(id => albumsById[id]);  
    }

    let albums=groupByAlbum(this.state.photos);

    return (
      <div className="Gallery">
        <h1>Галерея</h1>
        <div className="Gallery__container">
          {albums.map((album,index)=><GalleryAlbum album={album} id={index+1} key={index}/>)}
        </div>
      </div>
    )
  }
}

export default Gallery;