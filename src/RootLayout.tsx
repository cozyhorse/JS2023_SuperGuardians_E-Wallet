import { Outlet } from "react-router-dom"; // Outlet är den komponent som byts ut vid t.ex. klick.

const RootLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
