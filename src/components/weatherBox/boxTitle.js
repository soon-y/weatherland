import { titleIcon } from "@/lib/param"

export default function BoxTitle({ title }) {
  if(!title) return

  const isMoon = title.includes('moon')
  const titleName =  isMoon ? title.split('_')[0] : title
  const imgName =  isMoon ? title.split('_')[1] : title

  return (
    <div className="flex gap-1 items-center opacity-60 mb-1">
      <img src={titleIcon(imgName).src}
       alt={titleIcon(imgName).alt} />
      <p className={`font-bold text-sm uppercase`}>{titleName}</p>
    </div>
  )
}