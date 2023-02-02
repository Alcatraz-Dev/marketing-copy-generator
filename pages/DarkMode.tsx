// "use client";
// import React from "react";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
// function DarkMode() {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme, systemTheme } = useTheme();

//   // useEffect only runs on the client, so now we can safely show the UI
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }
//   const currentTheme = theme === "system" ? systemTheme : theme;
//   return (
//     <>
//       <select
//         className="w-auto items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black dark:border-gray-800 dark:text-white"
//         value={theme}
//         onChange={(e) => setTheme(e.target.value)}
//       >
//         <option
//           className="inline-flex w-full justify-between items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black dark:border-gray-500 dark:text-white"
//           value="system"
//         >
//           System
//         </option>
//         <option
//           className="inline-flex w-full justify-between items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black dark:border-gray-500 dark:text-white"
//           value="dark"
//         >
//           Dark
//         </option>
//         <option
//           className="inline-flex w-full justify-between items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black dark:border-gray-500 dark:text-white"
//           value="light"
//         >
//           Light
//         </option>
//       </select>
//       {currentTheme === "dark" ? (
//         <BsFillSunFill
//           className="h-6 w-6 text-yellow-500 cursor-pointer hover:text-yellow-300"
//           onClick={() => setTheme("light")}
//         />
//       ) : (
//         <BsFillMoonFill
//           className="h-6 w-6 text-blue-400 cursor-pointer hover:text-blue-200"
//           onClick={() => setTheme("dark")}
//         />
//       )}
//     </>
//   );
// }

// export default DarkMode;
