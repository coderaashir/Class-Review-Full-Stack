import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createReview } from '../../actions/posts';
import { Button, Form } from 'react-bootstrap';

import '../../App.css';

const FormReview = () => {
    const [reviewData, setReview] = useState({className: '', rating: 0, text: ''});
    const dispatch = useDispatch();

    const handleSubmit = e => {
      e.preventDefault();
      if(reviewData.text === "" || reviewData.className === "")
        return;
      console.log('handleSubmit', reviewData);
      dispatch(createReview(reviewData));
      setReview({text: "", rating: 0, className: ""});
    };
  
    const handleChange = e => {
      setReview({ ...reviewData, [e.target.name]: e.target.value });
    };

    return (
    <div className = "review">
    <Form onSubmit={handleSubmit}> 
        <label> 
            Class Name:
            <br />  
            <input name = "className" type = "text" value={reviewData.className} onChange = {(e)=>handleChange(e)} />
        </label>
        <br />
        <label> 
            Rating:
            <br />
            <select name="rating" value={reviewData.rating} onChange = {(e)=>handleChange(e)}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </label>
        <br />
        <label> 
            Review:
            <br />
            <textarea rows = "4" name = "text" type = "text" value={reviewData.text} onChange = {(e)=>handleChange(e)} />
        </label>
        <br />
        <div className = "button">
        <Button variant="primary mb-3" type="submit">
          Submit
        </Button>
        </div>      
    </Form>
    </div>
    );
}

export default FormReview;