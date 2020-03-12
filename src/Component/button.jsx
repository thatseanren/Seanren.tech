import React from "react";
import { useEffect, Fragment } from "react";
import $ from "jquery";
import "./button.css";
export default function Button() {
  useEffect(() => {
    $(".menu-btn").on("click", () => {
      $("body").hasClass("show")
        ? $("body").removeClass("show")
        : $("body").addClass("show");
    });
  }, []);
  return (
    <Fragment>
      <a className="menu-btn" id="menu-btn" href='#'>
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
      </a>
    </Fragment>
  );
}
