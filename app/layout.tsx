import type { Metadata } from "next";
import { Bricolage_Grotesque,Roboto ,Inter,Poppins,Rubik,Nunito,DM_Sans} from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: "400"
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

 
const rubik = Rubik({
  weight: '400',
  subsets: ['latin'],
})

const nunito = DM_Sans({
  weight: '400',
  subsets: ['latin'],
})

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolageGrotesque.className}>{children}</body>
    </html>
  );
}
