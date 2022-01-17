import React, { useEffect, useState } from "react";
import "./App.css";
import FormReview from './components/Form/Form';
import Reviews from './components/Reviews';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getPosts } from './actions/posts';
import { useDispatch } from 'react-redux'

const App = () => {
  const [currentId] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return(
  <div className="app">
    <div className="container">
      <h1 className="text-center mb-4">Class Ratings List</h1>
      <div class="d-flex justify-content-sm-center"> <FormReview /></div>
      <div>
        <Reviews />
      </div>
    </div>
  </div>
  );
}

export default App;
