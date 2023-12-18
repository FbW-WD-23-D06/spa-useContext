import { NavLink } from "react-router-dom";

interface LinkProps {
  to: string;
  name: string;
}

export default function Link({ to, name }: LinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending, isTransitioning }) => {
        switch (true) {
          case isPending:
            return "text-slate-900";
          case isActive:
            return "text-red-200";
          case isTransitioning:
            return "text-red-200";
          default:
            return "";
        }
      }}
    >
      {name}
    </NavLink>
  );
}
