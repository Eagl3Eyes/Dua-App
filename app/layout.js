import "./globals.css";
import { FetchProvider } from "./authprovider/AuthProvider";


export const metadata = {
  title: "Dua & Ruqyah | All Duas Collection",
  description: "Generated by IRD Foundation",
  icons: {
    icon: "https://duaruqyah.com/assets/dua-logo.svg",
    apple: "https://duaruqyah.com/assets/dua-logo.svg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FetchProvider>
        <body>{children}</body>
      </FetchProvider>
    </html>
  );
}
