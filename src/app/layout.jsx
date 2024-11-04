import "./globals.css";

export const metadata = {
  title: "My Kind of Cruise | Worlds 1st & Only Cruise Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
