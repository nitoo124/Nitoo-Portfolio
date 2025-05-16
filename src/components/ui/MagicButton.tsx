

interface Iprops{

    title:string,
    icon:React.ReactNode

}
function MagicButton({
    title, icon}:Iprops) {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex gap-1 h-full text-2xl w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 py-4  font-medium text-white backdrop-blur-3xl">
      {title}
      {icon}
    </span>
  </button>
  )
}

export default MagicButton
