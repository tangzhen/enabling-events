export const Auth = {
  isAuthenticated: false,
  isAdmin: false,
  authenticate(role: string, cb: () => void) {
    Auth.isAuthenticated = true;
    Auth.isAdmin = role === "admin";
    setTimeout(cb, 100);
  },
};
