import AuthProvider from "./AuthProvider";
import Navbar from "./Navbar.client";
import './globals.css';

export const metadata = {
  title: 'My App',
  description: 'Next.js 15 App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
