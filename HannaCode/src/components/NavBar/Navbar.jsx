import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, Code, Moon, Sun, User, LogOut, Settings as SettingsIcon, LayoutDashboardIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "../../lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useMobile } from "../../hooks/useMobile";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const { theme, setTheme } = useTheme();
  const isMobile = useMobile();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
    

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
    // Listen for login/logout in other tabs
    const handleStorage = () => setIsLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    
    
    
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-0">
            <img
          src="/Background1.png" 
          alt="HannaCode Logo"
          className="h-14 w-auto bg-transparent" 
        />
            <span className="text-2xl font-bold mt-2">HannaCode </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.path ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth Buttons Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <Link to="/login">
                  <Button variant="outline">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-primary hover:bg-primary/90">Sign up</Button>
                </Link>
              </>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/profile">
                      <User className="mr-2 h-4 w-4" /> Profile
                    </Link>
                  </DropdownMenuItem>
                 
                   <DropdownMenuItem asChild>
                    <Link to="/dashboard">
                      <LayoutDashboardIcon className="mr-2 h-4 w-4" /> dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary py-2",
                  pathname === item.path ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t">
              {!isLoggedIn ? (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Log in
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-primary hover:bg-primary/90">Sign up</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full flex items-center justify-start">
                      <User className="mr-2 h-4 w-4" /> Profile
                    </Button>
                  </Link>
                  <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full flex items-center justify-start">
                      <LayoutDashboardIcon className="mr-2 h-4 w-4" /> Dashboard
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-start"
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}