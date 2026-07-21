import { User } from "../models/User.js";
import bcrypt from "bcryptjs";

export class AuthService {
  static async createNewUser(data) {
    try {
      const { name, email, password } = data;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedPassword });
      return await newUser.save();
    } catch (error) {
      console.error("error creating new user:", error);
    }
  }

  static async checkExistingUser(email) {
    try {
      const userExists = await User.findOne({ email });
      if (userExists) return userExists;
    } catch (error) {
      console.error("error finding user:", error);
    }
  }
}
