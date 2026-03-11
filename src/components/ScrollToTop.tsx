import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
/**
 * Utility component that resets scroll position on route change.
 * Essential for a multi-page feel in a Single Page Application.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}