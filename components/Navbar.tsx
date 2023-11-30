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
      name: "Purna-blog",
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
    <div className="sticky top-0 py-4 bg-bg-clr leading-relaxed">
      <div className="flex items-center justify-around space-x-4">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            className="text-text-clr hover:text-gray-200 font-medium text-xl md:text-2xl"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
