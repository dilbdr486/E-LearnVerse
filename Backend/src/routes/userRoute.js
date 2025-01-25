import express from 'express'
import { 
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar
 } from "../Controllers/userController.js"
 import {upload} from "../midlewares/multer.js"
 import {verifyJWT} from "../midlewares/auth.js"

const userRoute = express.Router();

userRoute.route("/register").post(
    upload.fields([
        {
          name: 'avatar',
          maxCount: 1,
        },
      ]),
    registerUser
)

userRoute.route('/login').post(loginUser);

//secured routes
userRoute.route('/logout').post(verifyJWT, logoutUser);
userRoute.route('/refresh-token').post(refreshAccessToken);
userRoute.route("/change-password").post(verifyJWT, changeCurrentPassword)
userRoute.route("/current-user").get(verifyJWT, getCurrentUser)
userRoute.route("/update-account").patch(verifyJWT, updateAccountDetails)

userRoute.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)

export default userRoute;