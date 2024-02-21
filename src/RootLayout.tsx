import { Outlet } from "react-router-dom"; // Outlet är den komponent som byts ut vid t.ex. klick.
import "./RootLayout.scss";

const RootLayout = () => {
  return (
    <>
      <main className="background">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
