export default function Minimum ({ Page }) {
  return (
    <div style={{display: "flex", flexDirection: "column", backgroundColor: "#ccc", height: "100vh", alignItems: "center", justifyContent: "center"}}>
      <div className="container border p-3 rounded shadow bg-light" style={{maxWidth: "30vw", borderRadius: "20px"}}>
        <Page />
      </div>
      <footer style={{ width: "100vw", textAlign: "center", marginTop: 20 }}>
        <span>
          Desenvolvido pelo Instituto Federal de Educação, Ciência e Tecnologia
          de Rondônia
        </span>
      </footer>
    </div>
  );
}
