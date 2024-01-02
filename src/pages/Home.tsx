import { useUserContext } from "@/contexts/UserContext";

export default function Home() {
  const { dispatch } = useUserContext()!;
  return (
    <div className="h-full">
      <h1 className="text-center">Home</h1>
    </div>
  );
}
