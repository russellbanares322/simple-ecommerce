import { register } from "../controllers/authenticationController";
import { Router } from "express";

export default(router: Router) => {
    router.post('/auth/register', register)
}