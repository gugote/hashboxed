import Link from "next/link"
import { ChangelogData, ChangelogDataTypes } from "../../../data/changelogData"

export default function LatestUpdate (){
  const latestUpdate = ChangelogData[ChangelogData.length - 1];
  return (
    <div className="latest-update border px-3 py-3 rounded-lg my-8 dark:dark-cards dark:border-dark-cards-border">
      <h3 className="text-sm font-bold mb-2">Latest update</h3>
      <small className="timestamp font-bold text-zinc-400 text-xs mb-0 pb-0 m-0">{latestUpdate.date}</small>
      <p className="mb-2" dangerouslySetInnerHTML={{ __html: latestUpdate.copy }}></p>
      <p>
        <Link className="font-bold text-green-600 text-xs" href="changelog">View Changelog</Link>
      </p>
    </div>
  )
}