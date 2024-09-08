import React from 'react';
import TabsWidget from './components/TabWidget';
import GalleryWidget from './components/GalleryWidget';
import "./App.css"

const App = () => {
  return (
    <div className="min-h-screen w-full flex justify-center px-4 items-center bg-gradient-to-r from-[#373E44] to-[#191B1F] gap-5">
      <div className=" w-full min-h-screen gap-3  flex p-5">
        <div className="w-[836px] h-[689px] bg-[#616161D1]/80 rounded-[27px] shadow-xl hidden lg:flex justify-center items-center"></div> {/* Left half empty */}
        <div className="relative w-[750px] h-[689px]  rounded-[27px] flex flex-col justify-between items-center">
          <TabsWidget />
          <div className='line'></div>
          <GalleryWidget/>
          <div className='line'></div>
        </div>
      </div>
    </div>
  );
};

export default App;
