import { useParams } from "react-router-dom";

function GalleryView({ galleries }) {
  const { galleryId } = useParams();

  const galleryChoice = galleries.find(gallery => gallery.galleryid === parseInt(galleryId));

  return (
    <div className="page-wrapper">
      <h1>Hello from GalleryView</h1>
      <h2>{`${galleryChoice.name}`}</h2>
    </div>
  )
}

export default GalleryView;
