import { useEffect, useState } from "react";

type ScrollDirState = "up" | "down" | null;

/** Hook to get scroll direction. 
 * @source https://www.codemzy.com/blog/react-sticky-header-disappear-scroll
*/
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirState>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}
