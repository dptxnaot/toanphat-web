export default function Loading() {
  return (
    <div className="px-4 md:px-7 py-10 max-w-[1400px] mx-auto">
      <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-8"/>
      <div className="flex gap-6">
        <div className="hidden md:block w-52 space-y-3 flex-shrink-0">{[...Array(8)].map((_,i)=><div key={i} className="h-8 bg-gray-200 rounded animate-pulse"/>)}</div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {[...Array(15)].map((_,i)=>(
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="h-36 bg-gray-200 animate-pulse"/>
              <div className="p-3 space-y-2"><div className="h-3 w-16 bg-gray-200 rounded animate-pulse"/><div className="h-4 bg-gray-200 rounded animate-pulse"/><div className="h-3 bg-gray-200 rounded animate-pulse"/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
