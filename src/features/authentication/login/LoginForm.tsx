import { FormEvent, useState } from "react";
import { useUserContext } from "@/contexts/UserContext";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const { dispatch, state } = useUserContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userID = state.users.find((user) => user.userName === userName)?.id;
    if (!userID) {
      setError("User not found");
      return;
    }
    dispatch({
      type: "login",
      payload: { id: userID },
    });
    setUserName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-3/6">
      <label htmlFor="username">Username</label>
      <input
        className="border"
        type="text"
        placeholder="Username"
        name="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {error && <span className="text-red-600">{error}</span>}
      <button
        className="border my-4 bg-green-600  disabled:bg-green-300"
        type="submit"
        disabled={!userName}
      >
        Login
      </button>
    </form>
  );
}
