import Link from "next/link";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = <Navbar />;

  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-6 py-6 text-center text-light-green-clr/50">
        <p>
          Created by{" "}
          <Link
            href="https://purnashrestha.com.np"
            target="_blank"
            className="hover:underline"
          >
            Purna Shrestha
          </Link>{" "}
        </p>
      </div>
    </footer>
  );
  return (
    <html>
      <head />
      <body className="mx-auto w-full md:w-[70%] px-6">
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
