import { useEffect } from 'react';

import { fetchCategoriesStart } from '../../store/categories/category.action';

import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';


import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';


const Shop = () => {
  const dispatch = useDispatch();
  useEffect(()=> {

    //create new async fuction to surround async funciton when using useEffect
   
       dispatch(fetchCategoriesStart());
   
    }, []);
 
  return (
 
   <Routes>
    <Route index element={<CategoriesPreview />} />
    <Route path=':category' element={<Category />} />
   </Routes>

    
  )
}

export default Shop;