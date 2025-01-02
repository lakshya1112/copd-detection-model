const Navbar = ()=>{
    return(<>
        <div className="flex justify-center items-center bg-slate-800/60 backdrop-blur-md 
                    p-4 max-h-screen min-h-fit sticky top-0 z-50">
  <div className="relative w-full max-w-md">
    {/* <!-- Search Icon --> */}
    <span className="absolute inset-y-0 left-2 flex items-center text-gray-700">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l-4-4m0 0l4-4m-4 4h16" />
      </svg>
    </span>
    {/* <!-- Input Field --> */}
    <input
      type="search"
      placeholder="Search Alumni..."
      className="w-full mr-auto pl-10 pr-4 py-2 rounded-3xl border-none outline-none
              bg-slate-400 text-black placeholder:text-black
              focus:shadow-black/80 focus:shadow-md focus:bg-slate-950 focus:text-white focus:placeholder:text-slate-300"
    />
  </div>


  {/* Filter and Sort buttons */}
  <div className="flex flex-row">
    <ul><button className="text-white text-lg m-2 bg-cyan-700 rounded-lg p-1 active:bg-cyan-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
  <path strokeLinecap="round" strokeLinejoin="round" 
  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
</svg></button></ul>
    <ul><button className="text-white text-md m-2 bg-cyan-700 rounded-lg p-1 active:bg-cyan-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg></button></ul>
  </div>
</div>
</>
    )
}


export default Navbar;