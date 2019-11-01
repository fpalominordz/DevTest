import mongoose from 'mongoose';

const schema = mongoose.Schema;

const postSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
}

export default postSchema;
