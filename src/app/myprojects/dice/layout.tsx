
import "@/projectsfolder/dicegamecomps/gamescreen/Gamescreen.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
