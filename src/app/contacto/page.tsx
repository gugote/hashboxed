import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contacto() {
  return (
    <div className="w-[calc(100%-40px)] max-w-[720px] ml-10">
      <Header layoutClass="pt-10 w-[calc(100%-40px)] max-w-[1000px] mx-auto"/>
      <div className="pt-10 w-[calc(100%-40px)] max-w-[720px] mx-auto">
        <div className="content max-w-[700px] mx-auto relative">
          <h1 className="text-[50px] font-extrabold tracking-tighter mb-5">Contacto</h1>
          <p className="mb-5">¿Interesado en trabajar juntos? ¡Hablemos!</p>
          <p className="mb-5">Puedes contactarme a través de:</p>
          <ul className="mb-5">
            <li>Email: carlos@hashboxed.com</li>
            <li>LinkedIn: [Tu LinkedIn]</li>
            <li>Twitter: [Tu Twitter]</li>
          </ul>
          <p className="mb-5">O simplemente envíame un mensaje directo.</p>
          <Footer />
        </div>
      </div>
    </div>
  );
}