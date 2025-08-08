import React from "react";
import { ThemeProvider } from "./themeProvider";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import "../Styles/globals.css"; 
import useAutoLogout from "../hooks/useAutoLogout"; 

export default function Layout({ children }) {
  useAutoLogout(() => {

  });

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}