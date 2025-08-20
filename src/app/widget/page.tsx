import './widget.css'

export default function widget(){
  return(
    <>
      <div className="widget-container w-[calc(100%-40px)] max-w-[1200px] mx-auto bg-slate-100 rounded-md p-5 my-5">
        <div className="header min-[1140px]:grid min-[1140px]:grid-cols-2 min-[1140px]:h-fit">
          <div className="cargos-provincia grid grid-cols-[80px_1fr] gap-0 mb-5 min-[1140px]:mb-0">
            <div className="escudo w-[60px] h-[82px]">
              <img src="/elecciones/escudo-corrientes.png" alt="Elecciones Provinciales 2025 - Corrientes" />
            </div>
            <div className="">
              <div className="justify-start text-black text-lg font-black mb-2 lg:text-[26px] min-[1140px]:pb-3">Elecciones Provinciales 2025</div>
              <div className="">
                <form action="">
                  <select name="" id="" className="bg-white text-sm px-2 py-1 rounded-md border border-slate-300 mr-2 lg:text-base md:w-[45%]">
                    <option value="">Gobernador</option>
                  </select>
                  <select name="" id="" className="bg-white text-sm px-2 py-1 rounded-md border border-slate-300 lg:text-base md:w-[45%]">
                    <option value="">Toda la Provincia</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <hr className="background-slate-200 border border-b-white my-5 min-[1140px]:hidden"/>
          <div className="votos md:grid md:grid-cols-[40%_1fr] md:items-center min-[1140px]:grid-cols-[40%_1fr]">
            <div className="main-votos mb-2">
              <div className="flex flex-row items-center">
                <span className="font-bold mr-5">Votos</span>
                <span className="font-medium text-xs top-[1px] relative">xx% del Padrón</span>
              </div>
              <div className="">
                <p className="font-black tracking-tight text-[42px] leading-[46px]">4.343.553</p>
              </div>
            </div>
            <div className="votos-stats w-full max-w-[450px] grid grid-cols-3 md:pt-4 min-[1140px]:flex min-[1140px]:justify-between min-[1140px]:mx-5 min-[1140px]:pr-5">
              <div className="validos">
                <p className="text-xs">Validos</p>
                <p className="text-xl font-black">4.020.600</p>
              </div>
              <div className="blancos">
                <p className="text-xs">En Blanco</p>
                <p className="text-xl font-black">303.012</p>
              </div>
              <div className="nulos">
                <p className="text-xs">Nulos</p>
                <p className="text-xl font-black">20.051</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="background-slate-200 border border-b-white my-5"/>
        <div className="candidatos min-[1140px]:grid min-[1140px]:grid-cols-[1fr_260px]">
          <div className="min-[940px]:flex min-[1140px]:grid min-[1140px]:grid-cols-3">
            <div className="candidato-card candidato-card-lg">
              <div className="candidato">
                <div className="candidato-img">
                  <img src="/elecciones/candidate.png" alt="Candidate Name" />
                </div>
                <div className="candidato-block">
                  <div className="candidato-info">
                    <p className="candidato-name">Juan Pablo <span>Valdés</span></p>
                    <p className="candidato-porcentaje">34%</p>
                  </div>
                  <p className="candidato-partido">Vamos Corrientes</p>
                </div>
              </div>
              <p className="candidato-partido-lg">Vamos Corrientes</p>
            </div>
            <div className="candidato-card candidato-card-lg">
              <div className="candidato">
                <div className="candidato-img">
                  <img src="/elecciones/candidate.png" alt="Candidate Name" />
                </div>
                <div className="candidato-block">
                  <div className="candidato-info">
                    <p className="candidato-name">Juan Pablo <span>Valdés</span></p>
                    <p className="candidato-porcentaje">34%</p>
                  </div>
                  <p className="candidato-partido">Vamos Corrientes</p>
                </div>
              </div>
              <p className="candidato-partido-lg">Vamos Corrientes</p>
            </div>
            <div className="candidato-card candidato-card-lg">
              <div className="candidato">
                <div className="candidato-img">
                  <img src="/elecciones/candidate.png" alt="Candidate Name" />
                </div>
                <div className="candidato-block">
                  <div className="candidato-info">
                    <p className="candidato-name">Juan Pablo <span>Valdés</span></p>
                    <p className="candidato-porcentaje">34%</p>
                  </div>
                  <p className="candidato-partido">Vamos Corrientes</p>
                </div>
              </div>
              <p className="candidato-partido-lg">Vamos Corrientes</p>
            </div>
          </div>
          <div className="min-[940px]:flex min-[1140px]:inline">
            <div className="candidato-card candidato-card-sm">
              <div className="candidato">
                <div className="candidato-img">
                  <img src="/elecciones/candidate.png" alt="Candidate Name" />
                </div>
                <div className="candidato-block">
                  <div className="candidato-info">
                    <p className="candidato-name">Juan Pablo <span>Valdés</span></p>
                    <p className="candidato-porcentaje">34%</p>
                  </div>
                  <p className="candidato-partido">Vamos Corrientes</p>
                </div>
              </div>
            </div>
            <div className="candidato-card candidato-card-xs">
              <div className="candidato">
                <div className="candidato-img">
                  <img src="/elecciones/candidate.png" alt="Candidate Name" />
                </div>
                <div className="candidato-block">
                  <div className="candidato-info">
                    <p className="candidato-name">Juan Pablo <span>Valdés</span></p>
                    <p className="candidato-porcentaje">34%</p>
                  </div>
                  <p className="candidato-partido">Vamos Corrientes</p>
                </div>
              </div>
              <div className="candidato">
                <div className="candidato-img">
                  <img src="/elecciones/candidate.png" alt="Candidate Name" />
                </div>
                <div className="candidato-block">
                  <div className="candidato-info">
                    <p className="candidato-name">Juan Pablo <span>Valdés</span></p>
                    <p className="candidato-porcentaje">34%</p>
                  </div>
                  <p className="candidato-partido">Vamos Corrientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}