import { PostModel } from '../../dataBase/models';


const addPostAction = async (postData) => {
  try {
    return await PostModel.create(postData);
  } catch (error) {
    console.log("TCL: error", error)
  }
};

export {
  addPostAction,
}