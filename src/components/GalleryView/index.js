import { useParams, Route, useRouteMatch } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";

function GalleryView({ galleries }) {
  const { galleryId } = useParams();

  const galleryChoice = galleries.find(gallery => gallery.galleryid === parseInt(galleryId));

  const { url } = useRouteMatch();

  return (
    <div className="page-wrapper">
      <h1>Hello from GalleryView</h1>
      <h2>{`${galleryChoice.name}`}</h2>
      <Route exact path={`${url}`}>
        {galleryChoice.objects.map(artwork => {
          return (
            <ArtImageTile key={artwork.id} art={artwork} galleryId={galleryId}/>
          )
        })
        }
      </Route>
    </div>
  )
}

export default GalleryView;
