interface LoginMock { email: string, password: string };

export const findOneUser = {
  dataValues: {
    "username": "User",
    "role": "user",
    "email": "user@user.com",
    "profileImage": null,
    "password": "$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO"
  }
}

export const validUser: LoginMock = {
  "email": "user@user.com",
  "password": "secret_user"
}

export const token = {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwiaWF0IjoxNzExMzk4MDk5LCJleHAiOjE3MTIwMDI4OTl9.MzxZ73eycufVeI9HXBcoXBBaGowyO_VsbMZ2D4oGvqs"
}

export const validToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyMUB1c2VyLmNvbSIsImlhdCI6MTcxMTQ2ODU4OSwiZXhwIjoxNzEyMDczMzg5fQ.7TTV9EYxsHlcnHd2o0V2hpH-3MuU1jA-C7yHC8OwO2c";

export const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyMUB1c2VyLmNvbSIsImlhdCI6MTcxMTQ2ODU4OSwiZXhwIjoxNzEyMDczMzg5fQ.7TTV9EYxsHlcnHd2o0V2hpH-3MuU1jA-C7yHC8OwO2c";

export const profileInfosModel = {
  dataValues: {
    "id": 2,
    "username": "User",
    "role": "user",
    "email": "user@user.com",
    "profileImage": null
  }
}

export const profileInfos = {
  "id": 2,
  "username": "User",
  "role": "user",
  "email": "user@user.com",
  "profileImage": null
}

export const profileRecipesInfos = {
	"favoritesCount": 0,
	"inProgressCount": 0,
	"finishedCount": 3
}