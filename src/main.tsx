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
import { ContactPage } from '@/pages/ContactPage';
// Enable Immer Map/Set support for state management if needed
enableMapSet();
// Production-ready QueryClient configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Only retry once to avoid excessive network traffic on failure
      refetchOnWindowFocus: false, // Prevent refetching when user switches tabs
      staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
    },
  },
});
// Defined application routes with explicit error boundaries
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
    path: "/contact",
    element: <ContactPage />,
    errorElement: <RouteErrorBoundary />,
  },
]);
// Final application mount
const container = document.getElementById('root');
if (!container) throw new Error("Root element not found");
createRoot(container).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
        {/* Global Toast notifications for feedback across the app */}
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