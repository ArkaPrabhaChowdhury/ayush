"use client"
import { usePathname } from "next/navigation";
import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillBriefcaseFill, BsPeopleFill } from "react-icons/bs";
import { MdOutlineArticle } from "react-icons/md";
import { RiGuideFill } from "react-icons/ri";
const Sidebar = () => {
  const path =usePathname();
  console.log(path)
  return (
    <div>
      <aside
        id="default-sidebar"
        class="fixed top-16 left-0 z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="/"
               className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  path=="/" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
              >
                <BiSolidDashboard />
                <span class="ml-3">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="/communities"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  path=="/communities" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
              >
                <BsPeopleFill />
                <span class="flex-1 ml-3 whitespace-nowrap">Communities</span>
              </a>
            </li>
            <li>
              <a
                href="/resources"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  path=="/resources" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
              >
                <MdOutlineArticle/>
                <span class="flex-1 ml-3 whitespace-nowrap">Resources</span>
              </a>
            </li>
            <li>
              <a
                href="/opportunities"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  path=="/opportunities" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
              >
              <BsFillBriefcaseFill/>
                <span class="flex-1 ml-3 whitespace-nowrap">Opportunities</span>
              </a>
            </li>
            <li>
              <a
                href="/mentorship"
                className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  path=="/mentorship" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
              >
                <RiGuideFill/>
                <span class="flex-1 ml-3 whitespace-nowrap">Mentorship</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
