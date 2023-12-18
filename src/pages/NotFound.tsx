import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  return (
    <>
      <h1 className="text-center">404 NOT FOUND</h1>
      <p>{location.pathname} was not found</p>
    </>
  );
}
