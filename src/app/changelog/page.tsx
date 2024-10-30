import Header from "../components/Header"
import ChangeLogCards from "./ChangeLogCards"

export default function Changelog(){
  return(
    <div className="w-[calc(100%-40px)] max-w-[720px] mx-auto">
      <Header layoutClass="pt-5 mb-5"/>
      <h1 className="text-[50px] font-extrabold tracking-tighter">Changelog</h1>
      <ChangeLogCards layoutClass="my-6"/>
    </div>
  )
}