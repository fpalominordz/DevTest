import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { UserModel } from '../../dataBase/models';

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

const createToken = (userData) => {
  const exp = new Date().addDays(5).getTime();
  const payload = {
    _id: userData.id,
    email: userData.email,
    name: userData.name,
    exp,
  }

  const token = jwt.sign(payload, process.env.JWT);
  return token;
}

const addUserAction = async (userData) => {
  try {
    const newUser = await UserModel.create(userData);
    const token = createToken(newUser);
    return { token };
  } catch (error) {
    console.log("TCL: error", error)
  }
};

const updateUserAction = async (filter, update) => {
  try {
    return await UserModel.findOneAndUpdate(filter, update, { new: true });
  } catch (error) {
    console.log("TCL: updateUserAction -> error", error)
  }
}

const findUserAction = async (filter) => {
  try {
    return await UserModel.findOne(filter);
  } catch (error) {
    console.log("TCL: findUserAction -> error", error)
  }
}

const doLoginAction = async (userName, password) => {
  try {
    const filter = { email: userName };
    const currentUser = await findUserAction(filter);
    const validLogin = await bcrypt.compare(password, currentUser.password);
    if (validLogin) {
      const token = createToken(currentUser);
      return { token };
    }

    return null;
  } catch (error) {
    console.log("TCL: doLoginAction -> error", error)
  }
};

const getUserDataAction = async (userData) => {
  try {
    return await UserModel.findById(userData._id).populate('posts');
  } catch (error) {
    console.log("TCL: getUserDataAction -> error", error)
  }
}

export {
  addUserAction,
  updateUserAction,
  findUserAction,
  doLoginAction,
  getUserDataAction
}