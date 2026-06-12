import React from "react";
import MasonryGallery from "../components/MasonryGallery/MasonryGallery";
import { sampleGalleryItems } from "../data/galleryItems";
import "yet-another-react-lightbox/styles.css";
import { TextContainer } from "../components/Container/Container";
import Banner from "../components/Banner";

export default function Portfolio() {
  return (
    <div className={"border-y-[.5px] border-primary"}>
      <Banner />
      <MasonryGallery items={sampleGalleryItems} />
    </div>
  );
}
