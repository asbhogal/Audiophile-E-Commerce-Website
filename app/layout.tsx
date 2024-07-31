import "./globals.css";
import { manrope, morganite } from "@/lib/fonts";
import { Header } from "@/components/globals/Header";
import Container from "@/components/globals/Container";
import Footer from "@/components/globals/Footer";
import { Toaster } from "@/components/ui/sonner";
import ShoppingCart from "@/providers/ShoppingCart";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShoppingCart>
      <html lang="en">
        <body
          className={`${manrope.variable} ${morganite.className} overflow-x-hidden`}
        >
          <Header />
          <Container>{children}</Container>
          <Footer />
          <Toaster />
        </body>
      </html>
    </ShoppingCart>
  );
}
