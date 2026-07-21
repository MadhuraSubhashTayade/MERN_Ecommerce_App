import { AuthService } from "../services/authService.js";

export class AuthController {
  static async signUpUser(req, res) {}
}

export const signUpUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await AuthService.checkExistingUser(email);
    if (userExists) {
      return res.status(400).json({ error: "User already exists!" });
    }

    const newUser = await AuthService.createNewUser(req.body);
    if (!newUser)
      return res.status(500).json({ error: "Error creating new user" });
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: `Server error: ${error}` });
  }
};
