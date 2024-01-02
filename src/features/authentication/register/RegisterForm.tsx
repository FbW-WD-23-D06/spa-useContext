import { FormEvent, useState } from "react";
import { useUserContext } from "@/contexts/UserContext";

export default function RegisterForm() {
  const [userName, setUserName] = useState("");
  const { dispatch } = useUserContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userID = crypto.randomUUID();
    dispatch({
      type: "register",
      payload: { id: userID, userName },
    });
    // Auto - Login the user after registering
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
      <button
        className="border my-4 bg-green-600  disabled:bg-green-300"
        type="submit"
        disabled={!userName}
      >
        Register User
      </button>
    </form>
  );
}
