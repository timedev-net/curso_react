import Navbar from "./components/Navbar";

function Main({ Page }) {

  return (
    <>
      <Navbar />
      <div className="container border p-3 rounded-bottom shadow" style={{display: "flex", gap: 10, flexWrap: 'wrap', justifyContent: "center"}}>
        <Page />
      </div>
    </>
  );
}

export default Main;