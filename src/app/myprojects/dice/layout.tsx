
import "@/projectsfolder/dicegamecomps/Dicegamepage/Dicegamepage.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
