import DarkModeToggle from "./DarkModeToggle";
import LinksList from "./LinksList";

export default function Header() {
  return (
    <header>
      <nav className="bg-orange-200 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 flex justify-between">
        <LinksList />
        <DarkModeToggle />
      </nav>
    </header>
  );
}
