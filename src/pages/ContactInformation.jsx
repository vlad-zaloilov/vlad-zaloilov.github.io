"use client"

import { Button } from "../components/Button";
import { extend } from "@react-three/fiber";
extend({ Button });

export default function ContactInformation() {
  return (
    <div>
      <div>
        <h1 className = "title justify-self-center">Contact Information</h1>
      </div>
      <div className="contact-row">
        <p className="subtitle">Contact information:</p>
        <div className="left-indent">
          <div>
            <p className="contact-info-text">Email:</p>
            <a href ="mailto:vfz@sfu.ca" className="link">vfz@sfu.ca</a>
          </div>
          <div>
            <p className="contact-info-text">Linkedin:</p>
            <a href ="https://www.linkedin.com/in/vlad-zaloilov-a4b1372ab/" className="link">https://www.linkedin.com/in/vlad-zaloilov-a4b1372ab/</a>
          </div>
          <div>
            <p className="contact-info-text">GitHub:</p>
            <a href ="https://github.com/DuhDiamond" className="link">https://github.com/DuhDiamond</a>
          </div>
        </div>
      </div>
    </div>
  );
}