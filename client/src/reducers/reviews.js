import { FETCH_ALL, CREATE, DELETE} from '../constants/actionTypes';

export default (reviews = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...reviews, action.payload];
    case DELETE:
      return reviews.filter((post) => post._id !== action.payload);
    default:
      return reviews;
  }
};

