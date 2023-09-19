// ImageUploader.js
import React, { useState } from "react";
import {plantAnalyse} from '../api/plantAnalizer'
import RenderHTMLPage from './RenderHtml'
const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoding] = useState(null);

const [data,setData]=useState("")
  const handleImageUpload =async  (event) => {
    setLoding(true)

    setData("")
    const file = event.target.files[0];
    setSelectedImage(file);
  const data = await  plantAnalyse(file)
  setData(data,'datadatadatadata')
  setLoding(false)
  };

  return (
    <div>
        
        <div className="block md:flex md:items-center md:flex-row-reverse shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-4">
            



      <input
      name="image" 
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      </div>
      {loading && (
                <div className="h-screen fixed z-50 inset-0 bg-bgPrimary flex items-center justify-center w-screen">
                    <img
                        className=" h-52 w-52  grayscale animate-bounce"
                        src="https://infotointell.fra1.digitaloceanspaces.com/assets/performit/performit-cog.png"
                        alt="performit-logo"
                    />
                </div>
            )}
      {data && (
     <RenderHTMLPage html={data}/>
      )}
    </div>
  );
};

export default ImageUploader;
