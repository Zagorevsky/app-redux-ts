import { PhotoAction, PhotoActionTypes } from "../../types/photo";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchPhotos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<PhotoAction>) => {
    try {
      dispatch({ type: PhotoActionTypes.FETCH_PHOTOS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos", {
          params: {_page: page, _limit: limit}
      }
      );
      dispatch({
        type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: PhotoActionTypes.FETCH_PHOTOS_ERROR,
        payload: "An error occurred while uploading users",
      });
    }
  };
};

export function setFotoPage(page: number): PhotoAction {
  return {type: PhotoActionTypes.SET_PHOTO_PAGE, payload: page}
}