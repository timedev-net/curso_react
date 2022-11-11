import Navbar from "./components/Navbar";

function Main({ Page }) {

  return (
  <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#ccc', height: '100vh', alignItems: 'center'}}>
      <Navbar />
      <Page />
      <span style={{ width: '100vw', textAlign: 'center', marginTop: 20}}>Desenvoldido pelo Instituto Federal de Educação, Ciência e Tecnologia de Rondônia</span>
    </div>
  );
}

export default Main;