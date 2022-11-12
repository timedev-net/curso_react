import Navbar from "./components/Navbar";

function Main({ Page }) {

  return (
  <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#ccc', height: '100vh', alignItems: 'center'}}>
      <Navbar />
      <main className="container border p-3 rounded shadow bg-light">
        <Page />
      </main>
      <footer style={{ width: '100vw', textAlign: 'center', marginTop: 20}}>
        <span>Desenvoldido pelo Instituto Federal de Educação, Ciência e Tecnologia de Rondônia</span>
      </footer>
      
    </div>
  );
}

export default Main;