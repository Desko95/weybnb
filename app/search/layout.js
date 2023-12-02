import Header from "./Header";

export default function SearchLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
