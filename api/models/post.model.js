import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        'https://www.google.com/imgres?q=elephant%20blog%20post%20image&imgurl=https%3A%2F%2Ffiles.worldwildlife.org%2Fwwfcmsprod%2Fimages%2FAsian_elephants_in_Thailand%2Fblog_show%2F53p8kj0gmv_Asian_Elephants_in_Thailand_c_Getty_Images_Teerayut_Chaisarn_WWF_US.jpg&imgrefurl=https%3A%2F%2Fwww.worldwildlife.org%2Fblog-posts%2Fasian-elephants-need-our-help&docid=us-Zyhs4LeIU3M&tbnid=NM0h4HVi9dGUnM&vet=12ahUKEwiiyIbYyZWNAxXf2TgGHeJtJGcQM3oECGQQAA..i&w=745&h=559&hcb=2&ved=2ahUKEwiiyIbYyZWNAxXf2TgGHeJtJGcQM3oECGQQAA',
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
