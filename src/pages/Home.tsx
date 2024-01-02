import { useUserContext } from "@/contexts/UserContext";

export default function Home() {
  const { loggedUser } = useUserContext();
  return (
    <div className="h-full">
      <h1 className="text-center">Home</h1>
      {loggedUser ? (
        <p>Logged in as {loggedUser?.userName}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
