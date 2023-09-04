import "./globals.css";
import { Montserrat, Rubik } from "next/font/google";
import ReduxProvider from "./redux/ReduxProvider";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "India Online Pay - A Secure Online Payment Gateway",
  description:
    "India Online Pay is a secure online Payment Gateway provider supporting e-commerce transactions. Easy Sign-up, instant activation with no setup cost.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${rubik.variable}`}>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
