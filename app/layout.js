import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <div>{children}</div> */}
        {children}
      </body>
    </html>
  );
}
