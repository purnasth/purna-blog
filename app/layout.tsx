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
      <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-600">
        <p>Created by Anubhav </p>
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
