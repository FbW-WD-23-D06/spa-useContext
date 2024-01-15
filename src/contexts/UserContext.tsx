import { Action, User, UserState, reducer } from "@/features/authentication/userReducer";
import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";



// const reducer = (state: UserState, action: Action): UserState => {
//   switch (action.type) {
//     case "register":
//       return { ...state, users: [...state.users, action.payload] };
//     case "login":
//       return { ...state, loggedUserID: action.payload.id };
//     case "logout":
//       return { ...state, loggedUserID: null };
//     case "updateLoggedUser":
//       return {
//         ...state,
//         users: state.users.map((user) =>
//           user.id === action.payload.id ? action.payload : user
//         ),
//       };
//     default: throw new Error("Invalid action type");
//       // return state;
//   }
// };

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

const initialState = { users: [], loggedUserID: null };

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [userState, dispatch] = useReducer(reducer, initialState);

  const loggedUser = userState.users.find((user) => user.id === userState.loggedUserID);

  return (
    <UserContext.Provider value={{ userState, dispatch, loggedUser }}>
      {children}
    </UserContext.Provider>
  );
}
