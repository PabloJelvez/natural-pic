import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext"; 

const Favorites = () => {
  const {photos, setPhotos} = useContext(PhotosContext);
  const removeFavorite = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          liked: false,
        };
      };
      return photo;
    });
    setPhotos(newPhotos);
  };

  return (
    <div className="favorite">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {photos
          .filter((photo) => photo.liked)
          .map((photo, i) => (
            <img
            src={photo.src.tiny}
            onClick={() => removeFavorite(photo.id)}
            key={i}
            />
          ))
        }
      </div>
    </div>
  );
};
export default Favorites;
