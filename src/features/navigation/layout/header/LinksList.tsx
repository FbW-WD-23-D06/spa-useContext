import { links } from "./links";
import Link from "./Link";

export default function LinksList() {
  return (
    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      {links.map((link) => (
        <li
          key={link.name}
          className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
        >
          {/* the link object has same keys and same of the Link props, for this reason I can use "{...link}" and I don't need to define each props */}
          <Link {...link} />
        </li>
      ))}
    </ul>
  );
}
