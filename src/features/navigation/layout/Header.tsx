import LinksList from "./LinksList";

export default function Header() {
  return (
    <header>
      <nav className="bg-orange-200 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
           <LinksList />
          </div>
        </div>
      </nav>
    </header>
  );
}
