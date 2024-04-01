const tokenNotFound = 'Token not found';

export const getToken = (data: any) => {
  if (data.token) {
    return data.token as string;
  }
  return tokenNotFound;
};

export const getMessage = (data: any) => {
  if (data.message) {
    return data.message as string;
  }

  return '';
};

export const getReturnMessage = (token: string, message: string) => {
  if (token === tokenNotFound) {
    return message;
  }

  return 'Registration complete!';
};

export const getRoute = (token: string) => {
  if (token === tokenNotFound) {
    return '/signup';
  }

  return '/meals';
};
