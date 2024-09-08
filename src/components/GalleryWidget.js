import React, { useState } from 'react';
import Question from '../asset/Vector.png';
import Frame from '../asset/Frame.png';
import backward from '../asset/backward.png';
import forward from '../asset/forward.png'
const GalleryWidget = () => {
  const [images, setImages] = useState([]);

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    const newImage = URL.createObjectURL(file);
    setImages([...images, newImage]);
  };

  return (
    <div className="w-full flex flex-row p-4 rounded-lg shadow-md mt-4 text-white " style={{ backgroundColor: '#363C43', color: '#FFFFFF', boxShadow: '6px 8px 7px -1px black'}}>
      <div className='flex flex-col mx-2 items-center justify-between h-40'>
         <img className='w-40' src={Question} />
         <img className='w-96' src={Frame} />
      </div>
      <div className="flex flex-col w-custom-width">
      <div className=" flex flex-row  items-center justify-around">
        <button className='text-sm bg-[#171717] p-3 shadow-[0px_4px_10px_2px_#00000040_inset] rounded-xl'>
          Gallery
        </button>
        <div className='flex flex-row items-center'>
        <label htmlFor="file-input" className="cursor-pointer text-center mx-2 text-sm custom-shadow p-2 rounded-xl">
          + Add Image
        </label>
        <input id="file-input" type="file" onChange={handleAddImage} className="hidden" />
          <img className='custom-icon custom-shadow-1 mx-2 cursor-pointer' style={{}} src={backward} alt="backward" />
          <img className='custom-icon custom-shadow-1 cursor-pointer' src={forward} alt="forward" />
        </div>
      </div>
      <div className=" ml-2 mt-4 grid grid-cols-3 gap-2 w-full h-[14em] ">
        {images.map((image, index) => (
          <img key={index} src={image} alt="gallery" className="w-full h-auto rounded" />
        ))}
      </div>
      </div>
    </div>
  );
};

export default GalleryWidget;
