import { baseUrl } from "../app/shared/baseUrl";

export const mapImageURL = (arr) => {
     //pulling out each array item in turn into the item parameter. It returns a new array of objects, 
     //using the spread operator to prepend each image property with the baseUrl.
    return arr.map((item) => {
        return { //spread
            ...item,
            image: baseUrl + item.image
        };
    });
};


