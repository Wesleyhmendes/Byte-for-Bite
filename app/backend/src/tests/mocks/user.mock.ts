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