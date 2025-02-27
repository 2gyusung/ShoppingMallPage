function login(id,password) {
  return (dispath, getState) => {
    dispath({type:"LOGIN_SUCCESS",payload:{id,password}})
  };
}

export const authenticateAction = { login };
