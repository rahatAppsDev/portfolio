
import "@/projectsfolder/dicegamecomps/Dicegamepage/Dicegamepage.css";

import "@/projectsfolder/Todos/Todo/Todo.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
