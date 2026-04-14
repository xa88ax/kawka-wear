export const metadata = {
  title: "Kawka Wear",
  description: "Sklep odzieżowy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
