export interface User {
  id: string;
  userName: string;
}

export type loggedUserID = null | string;

export interface UserState {
  users: User[];
  loggedUserID: loggedUserID;
}

export type Action =
  | { type: "register"; payload: User }
  | { type: "login"; payload: { id: string } }
  | { type: "logout" }
  | { type: "updateLoggedUser"; payload: User };

export const reducer = (state: UserState, action: Action): UserState => {
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
      throw new Error("Invalid action type");
    // return state;
  }
};
