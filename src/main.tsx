import '@/lib/errorReporter';
import { enableMapSet } from "immer";
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import { Toaster } from '@/components/ui/sonner';
import '@/index.css';
// Pages
import { HomePage } from '@/pages/HomePage';
import { HRServicesPage } from '@/pages/HRServicesPage';
import { FinancialServicesPage } from '@/pages/FinancialServicesPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
enableMapSet();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/hr-advisory",
    element: <HRServicesPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/financial-services",
    element: <FinancialServicesPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <RouteErrorBoundary />,
  },
]);
const container = document.getElementById('root');
if (!container) throw new Error("Root element not found");
createRoot(container).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
        <Toaster
          position="top-right"
          richColors
          closeButton
          theme="light"
          toastOptions={{
            style: { border: '1px solid #3341551A' }
          }}
        />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
);