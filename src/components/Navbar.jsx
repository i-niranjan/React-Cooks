import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

import { MagicCard } from "@/components/magicui/magic-card";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { ShineBorder } from "./magicui/shine-border";
import { BorderBeam } from "./magicui/border-beam";
export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const lessons = [
    {
      title: "useState",
      href: "",
    },
    {
      title: "useEffect",
      href: "",
    },
    {
      title: "useContext",
      href: "",
    },
    {
      title: "useReducer",
      href: "",
    },
    {
      title: "useRef",
      href: "",
    },
    {
      title: "useCallback",
      href: "",
    },
    {
      title: "useMemo",
      href: "",
    },
    {
      title: "useImperativeHandle",
      href: "",
    },
    {
      title: "useLayoutEffect",
      href: "",
    },
    {
      title: "useDebugValue",
      href: "",
    },
  ];
  return (
    <>
      <nav className="w-full border-b">
        <div className="w-full flex justify-between mx-auto container p-2 max-w-screen-xl ">
          <div>
            <NavigationMenu>
              <NavigationMenuList className="flex gap-2 md:gap-8 p-1 ">
                <SparklesText
                  className={"text-sm md:text-lg font-normal"}
                  text="React Cooks"
                  sparklesCount="4"
                />
                <NavigationMenuItem>
                  <NavigationMenuLink href="/">Home</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{`Recipies (Lessons)`}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MagicCard>
                      <div>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {lessons.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                    </MagicCard>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm " href="/">
                    Meet The Chef
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex gap-2 content-center items-center">
            <Button variant={"outline"} size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
