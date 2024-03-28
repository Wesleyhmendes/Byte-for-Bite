"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRecipesInfos = exports.profileInfos = exports.profileInfosModel = exports.invalidToken = exports.validToken = exports.token = exports.validUser = exports.findOneUser = void 0;
;
exports.findOneUser = {
    dataValues: {
        "username": "User",
        "role": "user",
        "email": "user@user.com",
        "profileImage": null,
        "password": "$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO"
    }
};
exports.validUser = {
    "email": "user@user.com",
    "password": "secret_user"
};
exports.token = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwiaWF0IjoxNzExMzk4MDk5LCJleHAiOjE3MTIwMDI4OTl9.MzxZ73eycufVeI9HXBcoXBBaGowyO_VsbMZ2D4oGvqs"
};
exports.validToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyMUB1c2VyLmNvbSIsImlhdCI6MTcxMTQ2ODU4OSwiZXhwIjoxNzEyMDczMzg5fQ.7TTV9EYxsHlcnHd2o0V2hpH-3MuU1jA-C7yHC8OwO2c";
exports.invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyMUB1c2VyLmNvbSIsImlhdCI6MTcxMTQ2ODU4OSwiZXhwIjoxNzEyMDczMzg5fQ.7TTV9EYxsHlcnHd2o0V2hpH-3MuU1jA-C7yHC8OwO2c";
exports.profileInfosModel = {
    dataValues: {
        "id": 2,
        "username": "User",
        "role": "user",
        "email": "user@user.com",
        "profileImage": null
    }
};
exports.profileInfos = {
    "id": 2,
    "username": "User",
    "role": "user",
    "email": "user@user.com",
    "profileImage": null
};
exports.profileRecipesInfos = {
    "favoritesCount": 0,
    "inProgressCount": 0,
    "finishedCount": 3
};
//# sourceMappingURL=user.mock.js.map