/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Action,
  User,
  UserState,
  initialUserState,
  reducer,
} from "@/features/authentication/userReducer";
import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

type Context = {
  userState: UserState;
  dispatch: Dispatch<Action>;
  loggedUser: User | undefined;
  registerUser: any;
  registerAndLogin: any;
  logInUser: any;
};

const UserContext = createContext<Context | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [userState, dispatch] = useReducer(reducer, initialUserState);

  const loggedUser = userState.users.find(
    (user) => user.id === userState.loggedUserID
  );

  const userID = crypto.randomUUID();

  const registerUser = (userName: string) => {
    dispatch({
      type: "register",
      payload: { id: userID, userName },
    });
  };

  const logInUser = (userID: string) => {
    dispatch({
      type: "login",
      payload: { id: userID },
    });
  };

  const registerAndLogin = (userName: string) => {
    registerUser(userName);
    logInUser(userID);
  };

  return (
    <UserContext.Provider
      value={{
        userState,
        dispatch,
        loggedUser,
        registerUser,
        registerAndLogin,
        logInUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
