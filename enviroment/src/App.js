import React from "react";
import ImageUploader from "./component/ImageUploder";

import './tailwind.css'
function App() {
  return (
    <div className="p-4">
      <p className="text-center font-bold text-3xl mb-4 " >Plant Disease Diagnosis Using Performint</p>
      <ImageUploader />
    </div>
  );
}


export default App;
