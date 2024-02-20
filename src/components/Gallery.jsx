// import photos from "../../public/photos.json";
import { useState, useEffect } from "react";

const Gallery = () => {
const [photos, setPhotos] = useState([])
const photo_url = "/photos.json";

const getData = async () => {
 const response = await fetch(photo_url);
 const data = await response.json();
 setPhotos(data.photos);

}
useEffect(() => {
  getData();
}, []);



  return (
    <div className="gallery grid-columns-5 p-3">
     {photos.map(photo => (
      <div className="photo-container">
      <img
      className="photo"
      key={photo.id}
      src={photo.src.tiny}
      alt={photo.alt}
      />
      <p className="caption">
      {photo.alt}
      </p>
      </div>
     ))}
    </div>
  );
};
export default Gallery;



// {photos.photos.map(photo => (
//   <img src={photo.src.tiny} alt={photo.alt} />
// ))}