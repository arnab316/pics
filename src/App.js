import { useState } from 'react';
import React from 'react';
import SearchBar from './components/SearchBar';
import SerachImages from './api';
import Imagelist from './components/Imagelist';

const  App=()=> {
  const [images, setImages] = useState([]);

const handleSubmit = async (term) => {
  const result = await SerachImages(term);
  setImages(result);
};

  return (
    <>
    <SearchBar onSubmit={handleSubmit} />
    <Imagelist images={images} />
    </>
  );
}

export default App;
