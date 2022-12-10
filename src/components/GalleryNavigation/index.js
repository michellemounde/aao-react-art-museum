import { NavLink } from "react-router-dom";
import './GalleryNavigation.css';

function GalleryNavigation({ galleries }) {
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink exact to='/' activeClassName='active'>Home</NavLink>
      {galleries.map(gallery => {
        return (
          <NavLink
          key={gallery.galleryid}
          to={`/galleries/${gallery.galleryid}`}
          activeClassName='active'>
          {`${gallery.name}`}
          </NavLink>
        )
      })
      }
    </nav>
  )
};

export default GalleryNavigation;
