import React from "react";
import Thumbnail from "../../js/interactives/Thumbnail";

const title = "THUMBNAILS";

const thumbnail_1 = {
  thumbs: [
    {
      img: "media/img/3_5.jpg",
      url: "https://www.gpstrategies.com/",
      heading: "Maecenas",
      caption: <p>Maecenas venenatis magna, vel pellentesque <span className="link-look">enim scelerisque</span>  erat ultricies. Quisque fringilla, nulla sed ornare tincidunt, neque velit finibu.</p>
    },
    {
      img: "media/img/3_6.jpg",
      url: "https://www.gpstrategies.com/",
      heading: "LNulla Oranre",
      caption: <p>Maecenas venenatis magna, vel pellentesque <span className="link-look">enim scelerisque</span>  erat ultricies. Quisque fringilla, nulla sed ornare tincidunt, neque velit finibus.</p>
    },
    {
      img: "media/img/3_7.jpg",
      url: "https://www.gpstrategies.com/",
      heading: "Fringilla",
      caption: <p><span className="link-look">Aliquam quis</span> enim at metus commodo hendrerit sit amet eu nisi. Proin sagittis euismod risus vel fringilla. Suspendisse non leo ut erat euismod.</p>
    },
    {
      img: "media/img/3_8.jpg",
      url: "https://www.gpstrategies.com/",
      heading: "Arcus Sed",
      caption: <p>Curabitur accumsan, orci molestie <span className="link-look">condimentum aliquamenim</span> , eros eros elementum ex, in commodo lacus lorem ac nisl. Pellentesque id arcu sed est vulputate.</p>
    }
  ]
}

const thumbnail_2 = {
  thumbs: [
    {
      img: "media/img/3_3.jpg",
      heading: "No Link",
    },
    {
      img: "media/img/3_4.jpg",
      url: "https://www.gpstrategies.com/"
    }
  ]
}

const layout =
<React.Fragment>
  <div className="row">
    <div className="col-sm-12">
      <p>The following is an example of curated content using the dynamic thumbnail component of the WebFlavor Template.</p>
    </div>
  </div>

  <div className="row">
    <div className="col-sm-12">
      <Thumbnail
        thumbnail={thumbnail_1}
      />
    </div>
  </div>

  <div className="row margin-below">
    <div className="col-sm-6">
      <p>Thumbnail component can be broken up and placed anywhere on the page. The sizing is dynamic and dependent on how many Thumbnails are in each section, and they span the width of the container they are placed in. The four thumbnails above are one full component. The two thumbnails to the right are also one full component. One component takes up one row. You can split up thumbnails into as many components as needed for the layout of the page</p>
    </div>
    <div className="col-sm-6">
      <Thumbnail
        thumbnail={thumbnail_2}
      />
    </div>
  </div>
</React.Fragment>;

const Page = {
  title,
  layout,
};

export default Page;
