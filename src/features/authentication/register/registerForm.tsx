import { FormEvent } from "react";

interface registerFormProps {}

export default function registerForm({}: registerFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Username" name="username" />
      <button type="submit">Register</button>
    </form>
  );
}
