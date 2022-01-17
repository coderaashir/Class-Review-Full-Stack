import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    className: String,
    rating: String,
    text: String,
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;