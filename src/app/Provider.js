'use client'
import Footer from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

function Provider({children}) {
    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 60 * 10,
            retry: 2, 
            refetchOnWindowFocus: true, 
            refetchOnReconnect: true,
          },
        },
      });
  return (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider>
 {/* <Header /> */}
          <main>{children}</main>
          <Footer />
          </ThemeProvider>
    </QueryClientProvider>
    
  )
}

export default Provider
