import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./globals.css";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
// console.log(clientId)
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  // 'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
  // "Cross-Origin-Opener-Policy": "restrict-properties"
  "Cross-Origin-Embedder-Policy": "require-corp"
};


export default function RootLayout({ children }) {
  return (
    <>
        <GoogleOAuthProvider clientId={clientId}>
      <html lang="en">
        
        <body className={inter.className}>
          {children}
         
        </body>
       
      </html>
        </GoogleOAuthProvider>
    </>
  );
}
