import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-customgreys-secondarybg bottom-0 w-full py-8 mt-10 text-center text-sm">
      <p>&copy; 2025 CourseSell. All Right reserved</p>
      <div className="mt-2">
        {["About", "Privacy Policy", "License", "Contact"].map((item) => (
          <Link
            className="text-primary-500 mx-2"
            key={item}
            href={`/${item.toLowerCase().replace(" ", "-")}`}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
