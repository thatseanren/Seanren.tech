import React, { useEffect } from "react";
/* Third Party Library*/
import ScrollMagic from "scrollmagic";
/* Components */
import Button from "./button";
import HEADER_NAVI from "./header-navi";
import HEADER_NAME from "./Header-Name";

export default function Header() {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();
    var threshold = window.innerHeight * 0.2;
    // create a scene
    new ScrollMagic.Scene({
      offset: threshold // start this scene after scrolling for 50px
    })
      .setClassToggle(".h-section", "shadow") // add class toggle
      .addTo(controller);
    new ScrollMagic.Scene({
      offset: 120
    })
      .setClassToggle(".lower-right-animation", "hide")
      .addTo(controller);
  });

  return (
    <div class="h-section" id="header">
      <HEADER_NAME name="REN Siyang" />
      <Button />
      <HEADER_NAVI />
    </div>
  );
}
