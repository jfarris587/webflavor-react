import React from "react";
import Hotspot from "../components/Hotspot";

const title = "HOTSPOTS";

const hotspot_1 = {
  img: 'media/img/City-Map-2.jpg',
  spots:[
    <ul>
      <li>Vix debitis lucilius ut, quo id porro timeam honestatis.</li>
      <li>Vim exerci mandamus cu, sonet molestiae cu pri.</li>
      <li>Fuisset instructior vel ne, ubique malorum legendos sit et.</li>
    </ul>,

    <ul>
      <li>Vix debitis lucilius ut, quo id porro timeam honestatis.</li>
      <li>Vim exerci mandamus cu, sonet molestiae cu pri.</li>
      <li>Fuisset instructior vel ne, ubique malorum legendos sit et.</li>
    </ul>,

    <ul>
      <li>Vix debitis lucilius ut, quo id porro timeam honestatis.</li>
      <li>Vim exerci mandamus cu, sonet molestiae cu pri.</li>
      <li>Fuisset instructior vel ne, ubique malorum legendos sit et.</li>
    </ul>,
  ]
}

const hotspot_2 = {
  img: 'media/img/City-Map.jpg',
  spots:[
    <ul>
      <li>Vix debitis</li>
      <li>Vim exerci mandamus</li>
      <li>Fuisset instructior vel</li>
    </ul>,

    <ul>
      <li>Vix debitis</li>
      <li>Vim exerci mandamus</li>
      <li>Fuisset instructior vel</li>
    </ul>,

    <ul>
      <li>Vix debitis</li>
      <li>Vim exerci mandamus</li>
      <li>Fuisset instructior vel</li>
    </ul>,
  ]
}

const layout =
<React.Fragment>
  <div className="row">
    <div className="col-md-12">
      <p className="top-paragraph">The following is a Hot Spot component. Hot Spots allow a developer to map spots on a image with popup information that can be any HTML he/she wants to use. The component requires an image, and dynamically adds the spots onto the image with the correct popup content. To adjust the location of the spots on the image, the developer has to adjust the CSS of the spots which are absolute positioning based on percentages relative to the container, which allows for responsiveness.</p>
    </div>
  </div>

  <div className="row margin-below">
    <div className="col-md-8">
      <Hotspot
        hotspot={hotspot_1}
      />
    </div>

    <div className="col-md-4">
      <div className="row">
        <div className="col-md-12">
          <p>Both of the components on the page are Hot Spots with the same content. This shows the responsiveness built into the component that allows for its use on mobile devices. The Hot Spots can be placed in to the grid in unique ways for different user experiences.</p>
        </div>
        <div className="col-md-12">
          <Hotspot
            hotspot={hotspot_2}
          />
        </div>
      </div>
    </div>
  </div>
</React.Fragment>;

const Page = {
  title,
  layout,
};

export default Page;
