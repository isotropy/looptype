export const host = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'looptype.com';
  }
  if (process.env.LOCAL_SERVER) {
    return 'localhost:3000';
  }
  return 'localhost:3000';
};

export const protocolAndHost = () => `${location.protocol}//${host()}`;

export const signInUrl = hostName => {
  const root = 'http://localhost:8080';
  switch(hostName) {
    case 'github':
      return `${root}/auth/github`;
    case 'google':
      return `${root}/auth/google`;
    case 'facebook':
      return `${root}/auth/facebook`;
    default:
      return '';
  }
};