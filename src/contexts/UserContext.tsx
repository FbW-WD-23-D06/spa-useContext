import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

interface User {
  id: string;
  userName: string;
}

type loggedUserID = null | string;

interface State {
  users: User[];
  loggedUserID: loggedUserID;
}

type Action =
  | { type: "register"; payload: User }
  | { type: "login"; payload: { id: string } }
  | { type: "logout" }
  | { type: "updateLoggedUser"; payload: User };



const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "register":
      return { ...state, users: [...state.users, action.payload] };
    case "login":
      return { ...state, loggedUserID: action.payload.id };
    case "logout":
      return { ...state, loggedUserID: null };
    case "updateLoggedUser":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

type Context = {
  state: State;
  dispatch: Dispatch<Action>;
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
