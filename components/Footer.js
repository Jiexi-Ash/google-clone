import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6 text-sm text-gray-600">
      <p>Copyright &copy; {year} Lance Jiexi</p>
    </footer>
  );
}

export default Footer;
