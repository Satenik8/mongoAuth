import AuthService from "../services/auth.service.js";

class AuthController {
    static async register(req, res) {
        try {
            const user = await AuthService.register(req.body);
            res.status(200).json({ message: "User registered successfully", user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async login(req, res) {
        try {
            const token = await AuthService.login(req.body.email, req.body.password);
            res.status(200).json({ message: "Login successful", token });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default AuthController;        



