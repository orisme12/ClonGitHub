import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';

export default function SearchProfile() {
  const { searchUserGitHub } = useAuth();
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setError('');

    
    if (search.trim() === '') {
      setError('');
      return; 
    }

    // console.log('enviando');

    try {
      await searchUserGitHub(search);
    } catch (error) {
      setError('Se produjo un error al buscar el usuario.');
      console.log(error) 
    }
  };

  return (
    <div className="search flex items-center px-2 text-xs w-full">
      <form action="" className="flex items-center w-full" onSubmit={handleSearchSubmit}>
        <box-icon name="search-alt-2" id="iconoSearch" style={{ width: '13px', opacity: '0.5' }}></box-icon>
        <input
          className="text-xs px-2 md:placeholder:text-xs placeholder:text-center md:py-1 bg-slate-100 w-full text-gray-500"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Ingrese un usuario GitHub'
        />
      </form>
      
    </div>
  );
}
