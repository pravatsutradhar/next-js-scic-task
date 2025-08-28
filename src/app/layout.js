import AuthProvider from "./AuthProvider";
import './globals.css';

export const metadata = {
  title: 'My App',
  description: 'Next.js 15 App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
