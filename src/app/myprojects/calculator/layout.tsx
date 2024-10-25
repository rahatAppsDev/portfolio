
import "@/projectsfolder/calculatorcomps/Calculatorpage/Calculatorpage.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
