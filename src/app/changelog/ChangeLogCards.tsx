import { ChangelogData, ChangelogDataTypes } from "../../../data/changelogData"

interface ChangeLogCardsProps {
  layoutClass?: string
}

export default function ChangeLogCards({layoutClass} : ChangeLogCardsProps){
  return(
    <div className={layoutClass}>
      {ChangelogData.map((update: ChangelogDataTypes, index) => (
        <div className="changelog-card py-5 border-slate-400 border-b-[0.5px]" key={index}>
          <small className="timestamp font-bold text-zinc-400 text-xs mb-0 pb-0 m-0">{update.date}</small>
          <p dangerouslySetInnerHTML={{ __html: update.copy }}></p>
        </div>
      ))}
    </div>
  )
}