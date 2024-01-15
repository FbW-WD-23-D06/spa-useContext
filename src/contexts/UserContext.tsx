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

  return (
    <UserContext.Provider value={{ userState, dispatch, loggedUser }}>
      {children}
    </UserContext.Provider>
  );
}
