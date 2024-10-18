import type { Metadata } from "next";
import "./_styles/App.scss";
import Header from "./_components/Header/Header";


export const metadata: Metadata = {
  title: "SportSee",
  description: "SportSee, le tableau de bord de vos performances sportives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">

      <body>
        <Header />
        {children}
        </body>
    </html>
  );
}
