import { useState } from "react";
import './SearchBar.css';
const SearchBar = ({onSubmit})=>{ 
    const [term, setTerm] = useState('');
const handleFormSubmit = (event) =>{
   event.preventDefault();
    onSubmit(term);
    
};
const handlechange= (event) =>{
    setTerm(event.target.value);
};
     
return(<>
      <div className="search-bar">
       <form onSubmit={handleFormSubmit}>
        <lable> Search Here</lable>
       <input value={term} onChange={handlechange} />
       </form>
       </div>
      </>);
};

export default SearchBar;