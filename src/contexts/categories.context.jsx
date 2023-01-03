import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


//actual value you want to access
export const CategoriesContext = createContext({ 
   categoriesMap: {},
 });

 export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(()=> {

   //create new async fuction to surround async funciton when using useEffect
   const getCategoriesMap = async () =>{
      const categoryMap = await getCategoriesAndDocuments();

      setCategoriesMap(categoryMap)
   
   }
   
   getCategoriesMap();

  }, []);


  const value ={ categoriesMap };

    console.log(value, "Map")
     return (
     <CategoriesContext.Provider value={value} >
      {children}
      </CategoriesContext.Provider>
     )
 }