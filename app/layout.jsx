import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PropertyPulse | Find the perfect rental",
  description:
    "Discover new properties, compare prices, and book directly with PropertyPulse. Find the perfect rental",
  keywords: ["find properties", "find rentals", "search", "compare", "book"],
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
