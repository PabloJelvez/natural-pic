import { createContext, useEffect, useState } from "react";

export const PhotosContext = createContext();

const photo_url = "/photos.json";

const PhotosProvider = ({children}) => {
    const [photos, setPhotos] = useState([])

    const getData = async () => {
        const response = await fetch(photo_url);
        const data = await response.json();
        setPhotos(data.photos);
       
       }
       useEffect(() => {
         getData();
       }, []);

    return (
        <PhotosContext.Provider
        value={{
            photos,
            setPhotos,
        }}
        >
        {children}
        </PhotosContext.Provider>
    );
};

export default PhotosProvider;