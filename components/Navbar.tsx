import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    // {
    //   name: "Home",
    //   href: "/",
    // },
    // {
    //   name: "About",
    //   href: "/about",
    // },
    {
      name: "Logo",
      href: "/",
    },
    // {
    //   name: "Contact",
    //   href: "/contact",
    // },
    // {
    //   name: "Blog",
    //   href: "/blog",
    // },
  ];

  return (
    <div className="w-full bg-red-500 sticky top-0 p-4">
      <div className="flex items-center justify-around space-x-4">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            className="text-white hover:text-gray-200 text-sm font-medium"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
