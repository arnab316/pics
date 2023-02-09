import React from "react";
import './ImageList.css';
import ImageShow from "./ImageShow";
const Imagelist = ({images})=>{
  
const renderdImages=images.map((images)=>{
     return <ImageShow key={images.id} image={images}/>

    });

    return(
    <>
    <div className="image-list">{renderdImages}</div>
    </>
    );
};

export default Imagelist;