import { Button, ButtonGrid } from "../components/Button";
import { GridViewport } from "../components/GridViewport";
import { extend, Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
extend({ Button });

import React from "react";

import "../styling.css";

export default function ContactInformation() {
  return (
    <div>
      <div style={{padding: "3%"}}>
        <h1 className = "title justify-self-center">Contact Information</h1>
      </div>
      <div className = "hollow-row display-flex-col">
        <h1 className = "align-self-center">Welcome to my page!</h1>
        <h2 className = "align-self-center">Note: under construction</h2>
        <h1 className = "align-self-center">Check back later for more!</h1>
      </div>
      <div className="subtitle-row">
        <p className="subtitle">Contact information:
        </p>
        <div className="break">
          <p className="contact-info-text">Email:</p>
          <a href ="mailto:vfz@sfu.ca" className="link">vfz@sfu.ca</a>
        </div>
        <div className="break">
          <p className="contact-info-text">Linkedin:</p>
          <a href ="https://www.linkedin.com/in/vlad-zaloilov-a4b1372ab/" className="link">https://www.linkedin.com/in/vlad-zaloilov-a4b1372ab/</a>
        </div>
        <div className="break">
          <p className="contact-info-text">GitHub:</p>
          <a href ="https://github.com/DuhDiamond" className="link">https://github.com/DuhDiamond</a>
        </div>
      </div>
      <div className="grid-viewport-container">
        <GridViewport/>
      </div>
    </div>
  );
}