import { CATEGORIES_ACTION_TYPES } from "./category.types";

import { createAction } from "../../utils/reducer/reducer.utils";



export const fetchCategoriesStart = () => {
    
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CARTEGORIES_START)
};

export const fetchCategoriesSuccess = (categoriesArray) => 
createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CARTEGORIES_SUCCESS,
  categoriesArray
);

export const fetchCategoriesFailed = (error) => 
createAction(CATEGORIES_ACTION_TYPES.FETCH_CARTEGORIES_FAILED, error);





