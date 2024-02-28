import { Montserrat, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/SharedComponents/Navbar/Navbar";
import Footer from "@/components/SharedComponents/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Textile waste recycle",
  description:
    "Textile recycling is good for both, environmental and economic benefits. It avoids many polluting and energy-intensive processes that are used to make textiles from fresh materials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className={montserrat.className}>
        <Navbar />
      </div>
      <body className={montserrat.className}>{children}</body>
      <div className={montserrat.className}>
        <Footer />
      </div>
    </html>
  );
}
