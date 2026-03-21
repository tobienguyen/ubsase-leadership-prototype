interface Member {
  id: number;
  name: string;
  desc: string;
}

const TOP_LEADERSHIP: Member[] = [
  { id: 1, name: "JESSICA KIM", desc: "President" },
  { id: 2, name: "HONG YI YANG", desc: "Vice President" },
  { id: 3, name: "BRENDAN ELLIOT", desc: "Secretary" },
];

const BOARD_MEMBERS: Member[] = [
  { id: 4, name: "CHANDRA MIKO", desc: "Treasurer" },
  { id: 5, name: "MATTHEW COLLINS", desc: "Events Coordinator" },
  { id: 6, name: "DEVON SUKHDEO", desc: "Committee Coordinator" },
  { id: 7, name: "LORENZO SICAT", desc: "Technical Chair" },
  { id: 8, name: "ISHRAQ MAHMUD", desc: "Public Relations" },
  { id: 9, name: "KHINE NYEIN YU", desc: "Co-Leader in Marketing" },
  { id: 10, name: "GARY WANG", desc: "Co-Leader in Marketing" },
  { id: 11, name: "CHRIS TEDIANTO", desc: "Cultural Chair" },
  { id: 12, name: "Brandan Zhang", desc: "Senior Advisor" },
];

function MemberHoverCard({ member }: { member: Member }) {
  return (
    <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 absolute top-full mt-4 left-0 w-[400px] p-6 bg-white shadow-2xl border border-gray-100 pointer-events-none z-[100] transition-all grid grid-cols-[120px_1fr] gap-4">
      <div className="w-full h-32 bg-blue-50/50 border border-blue-100 flex items-center justify-center overflow-hidden">
        {/* REPLACE PORTRAIT: <img src="/path-to-photo.png" /> */}
        <span className="text-[8px] uppercase tracking-widest text-blue-300 font-bold italic text-center">Portrait</span>
      </div>
      
      <div className="flex flex-col justify-between">
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-1">{member.name}</h4>
          <p className="text-[10px] leading-relaxed text-gray-500 uppercase tracking-widest font-medium">{member.desc}</p>
        </div>
        
        <div className="w-16 h-16 bg-gray-50 border border-gray-100 self-end flex items-center justify-center overflow-hidden p-2">
          {/* REPLACE SECONDARY IMAGE: <img src="/path-to-logo.png" /> */}
          <span className="text-[6px] uppercase tracking-tighter opacity-30 text-center">Small Image</span>
        </div>
      </div>
    </div>
  );
}

function TopMemberNode({ member, index }: { member: Member, index: number }) {
  const positions = [
    { top: '-18%', angle: -25, textOffset: '-14px' }, // Manually raised
    { top: '50%', angle: 0, textOffset: '0px' },   
    { top: '118%', angle: 25, textOffset: '14px' }   // Manually lowered
  ];
  
  const pos = positions[index];

  return (
    <div 
      className="absolute flex items-center group pointer-events-auto"
      style={{ 
        top: pos.top,
        left: '100%',
        transform: `translateY(-50%)`,
        marginLeft: '20px'
      }}
    >
      <div 
        className="w-24 h-[1px] bg-black/20 group-hover:bg-blue-600 transition-all duration-500 origin-left"
        style={{ transform: `rotate(${pos.angle}deg)` }}
      ></div>

      <div 
        className="ml-6 relative"
        style={{ transform: `translateY(${pos.textOffset})` }}
      >
        <h3 className="text-3xl font-light uppercase tracking-[0.3em] whitespace-nowrap group-hover:text-blue-600 group-hover:italic transition-all duration-300">
          {member.name}
        </h3>
        <div className="h-[1px] w-0 group-hover:w-full bg-blue-600 transition-all duration-500 origin-left"></div>
        <MemberHoverCard member={member} />
      </div>
    </div>
  );
}

function BoardMemberNode({ member, index, total }: { member: Member, index: number, total: number }) {
  const angle = (index / total) * 360;
  return (
    <div 
      className="absolute group flex items-center pointer-events-auto"
      style={{ transform: `rotate(${angle}deg) translateX(250px)` }}
    >
      <div className="w-16 h-[1px] bg-black/20 group-hover:bg-blue-600 transition-all duration-500"></div>
      <div className="ml-4 cursor-pointer relative" style={{ transform: `rotate(-${angle}deg)` }}>
        <h3 className="text-[11px] tracking-[0.2em] font-light uppercase whitespace-nowrap group-hover:text-blue-600 transition-all">
          {member.name}
        </h3>
        <div className="h-[1px] w-0 group-hover:w-full bg-blue-600 transition-all duration-500 origin-left"></div>
        <MemberHoverCard member={member} />
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <main className="relative w-full h-screen bg-[#f2f0eb] overflow-hidden text-black font-sans flex items-center justify-center">
      
      <div className="absolute top-12 left-12 flex flex-col z-50">
        <span className="text-blue-600 text-4xl font-serif italic tracking-tighter leading-none">SASE</span>
        <span className="text-blue-600 text-[10px] uppercase tracking-[0.7em] font-light mt-1">Leadership</span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
          <span className="absolute top-[18%] left-[12%] text-[160px] font-serif italic opacity-[0.03] leading-none select-none tracking-tighter">SCIENCES</span>
          <span className="text-[70px] font-serif italic opacity-[0.06] leading-none select-none">and</span>
          <span className="absolute bottom-[18%] right-[12%] text-[160px] font-serif italic opacity-[0.03] leading-none select-none tracking-tighter">ENGINEERING</span>
        </div>
      </div>

      <div className="absolute left-[-180px] w-[600px] h-[600px] flex items-center justify-center pointer-events-none z-10">
        <div className="relative w-72 h-72 rounded-full bg-white shadow-2xl flex items-center justify-center border border-gray-100 z-50 pointer-events-auto">
           {/* REPLACE DRAWING: <img src="/somethingsomething-drawing.png" /> */}
           <span className="text-[10px] uppercase tracking-widest opacity-20 font-bold">Drawing</span>
           
           <div className="absolute inset-0 pointer-events-none">
              {TOP_LEADERSHIP.map((item, index) => (
                <TopMemberNode key={item.id} member={item} index={index} />
              ))}
           </div>
        </div>
      </div>

      <div className="absolute right-[10%] w-[450px] h-[450px] flex items-center justify-center z-10">
        <div className="relative w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-100 z-50">
            {/* REPLACE SECOND DRAWING: <img src="/second-drawing.png" /> */}
            <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
            {BOARD_MEMBERS.map((item, index) => (
              <BoardMemberNode key={item.id} member={item} index={index} total={BOARD_MEMBERS.length} />
            ))}
        </div>
      </div>

      <div className="absolute bottom-12 left-12 z-50">
        <p className="text-[10px] uppercase tracking-[0.5em] opacity-30 font-bold italic text-gray-900">"Advancing Professionals and Leaders"</p>
      </div>
    </main>
  );
}
