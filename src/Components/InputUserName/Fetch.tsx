import { useState, useEffect } from "react";
const Fetch = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/search/users?q=karpolan")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);
  return (
    <div>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
      ))}
    </div>
  );
};
export default Fetch;
