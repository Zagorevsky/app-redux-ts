import { PhotoAction, PhotoActionTypes, PhotoState } from "../../types/photo";

const initialState: PhotoState = {
  loading: false,
  photos: [],
  error: null,
  page: 1,
  limit: 10,
};

export const photoReducer = (
  state = initialState,
  action: PhotoAction
): PhotoState => {
  switch (action.type) {
    case PhotoActionTypes.FETCH_PHOTOS:
      return { ...state, loading: true };
    case PhotoActionTypes.FETCH_PHOTOS_SUCCESS:
      return { ...state, loading: false, photos: action.payload };
    case PhotoActionTypes.FETCH_PHOTOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PhotoActionTypes.SET_PHOTO_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
