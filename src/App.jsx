// Material: https://www.npmjs.com/package/react-image-gallery?activeTab=readme

import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

function App() {
  const imagenes = [{
    original: "https://picsum.photos/id/49/1280/720",
    thumbnail: "https://picsum.photos/id/49/300/200"
  },
  {
    original: "https://picsum.photos/id/164/1280/720",
    thumbnail: "https://picsum.photos/id/164/300/200"
  },
  {
    original: "https://picsum.photos/id/257/1280/720",
    thumbnail: "https://picsum.photos/id/257/300/200"
  },
  {
    original: "https://picsum.photos/id/65/1280/720",
    thumbnail: "https://picsum.photos/id/65/300/200"
  },
  {
    original: "https://picsum.photos/id/57/1280/720",
    thumbnail: "https://picsum.photos/id/57/300/200"
  },
  {
    original: "https://picsum.photos/id/316/1280/720",
    thumbnail: "https://picsum.photos/id/316/300/200"
  },
  {
    original: "https://picsum.photos/id/299/1280/720",
    thumbnail: "https://picsum.photos/id/299/300/200"
  }];

  return (
    <> 
    <div style={{width:"70vw", height:"70vh", margin:"auto"}}>
      <ReactImageGallery items={imagenes} showPlayButton={false} showBullets={true} autoPlay ={true} slideInterval={3000} slideDuration={1000} thumbnailPosition="bottom"
      />
    </div>
    </>
  );
}

export default App;
