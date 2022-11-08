import Navbar from "./components/Navbar";

function Main({ Page }) {

  return (
    <>
      <Navbar />
      <div className="container border p-3 rounded-bottom shadow">
        <Page />
      </div>
    </>
  );
}

export default Main;