import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Nosotros() {
  return (
    <div className="w-[calc(100%-40px)] max-w-[720px] ml-10">
      <Header layoutClass="pt-10 w-[calc(100%-40px)] max-w-[1000px] mx-auto"/>
      <div className="pt-10 w-[calc(100%-40px)] max-w-[720px] mx-auto">
        <div className="content max-w-[700px] mx-auto relative">
          <h1 className="text-[50px] font-extrabold tracking-tighter mb-5">Nosotros</h1>
          <p className="mb-5">Somos Hashboxed, una pequeña agencia de UI/UX fundada en 2008 por Carlos Bruscoli. En Hashboxed nos encanta construir todo tipo de cosas: sitios web, aplicaciones web, aplicaciones móviles, lo que sea. Si aparece en una pantalla, estamos en ello.</p>
          <p className="mb-5">Nuestro enfoque está en crear interfaces de usuario modernas, escalables y eficientes, con un toque creativo que hace que las cosas funcionen bien y se vean geniales.</p>
          <Footer />
        </div>
      </div>
    </div>
  );
}