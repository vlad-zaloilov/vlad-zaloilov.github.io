import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Montserrat, Poppins, Roboto_Flex } from "next/font/google";

export const dynamic = "force-static";

export const Metadata = {
  title: "Vlad Zaloilov's Portfolio Website",
  description: "Website showcasing some of my work",
  keywords: "HTML, CSS, JavaScript, 3D, Graphics, Graphics Programming",
  name: "author"
}

/* I do not know of a better way at the moment to handle fonts to work
with regular CSS styling in nextjs; will update it once I do */

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

const robotoFlex = Roboto_Flex({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} ${robotoFlex.variable}`}>
        <head>
            <title>Vlad Zaloilov's Portfolio Website</title>
        </head>
        <body>
            <Header/>
            <Component {...pageProps}/>
            <Footer/>
        </body>
    </html>
    )
}