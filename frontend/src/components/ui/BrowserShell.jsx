function BrowserShell({ children }) {
  return (
    <div className="mx-auto w-full max-w-[350px] rounded-3xl bg-white p-2 shadow-[0_24px_60px_rgba(148,138,200,0.18)]">
      <div className="rounded-[18px] bg-[#F4F3F9] p-4">
        <div className="relative mb-4 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#FF6B5E]" />
          <span className="h-2 w-2 rounded-full bg-[#FFD84D]" />
          <span className="h-2 w-2 rounded-full bg-[#6ED6A5]" />
          <span className="absolute left-1/2 -translate-x-1/2 rounded-md bg-white px-5 py-[3px] text-[9px] text-[#85818F]">
            otake.com
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}

export default BrowserShell
