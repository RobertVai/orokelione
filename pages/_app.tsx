import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "@/contexts/AuthContext";
import { BookingsProvider } from "@/contexts/BookingContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <BookingsProvider>
        <Component {...pageProps} />
      </BookingsProvider>
    </AuthProvider>
  );
}