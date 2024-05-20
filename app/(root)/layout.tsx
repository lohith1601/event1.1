// import "./globals.css";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen"> {/* Use min-h-screen to ensure full height */}
      {/* <Header /> */}
      <main className="flex-1"> {/* flex-1 allows main to grow and fill available space */}
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
