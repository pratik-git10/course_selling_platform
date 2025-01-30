import Link from "next/link";
import React from "react";

const NonDashboardNavbar = () => {
  return (
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar__container">
        <Link
          href="/"
          className="font-bold text-lg sm:text-xl hover:text-customgreys-dirtyGrey">
          CourseSell
        </Link>
        <div className="flex items-center gap-4">
          <div className="realtive group">
            <Link href="/search" className="nondashboard-navbar__search-input">
              <span className="hidden sm:inline">Search Courses</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NonDashboardNavbar;
