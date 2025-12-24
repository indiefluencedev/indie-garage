import teamData from "@/data/teamData";
import TeamCard from "@/components/scroll/TeamCard";

export default function TeamPanel() {
  return (
    <div className="panel flex items-center justify-center overflow-hidden">
      
      {/* INTERNAL HORIZONTAL SCROLL AREA */}
      <div className="w-full h-full overflow-x-auto">
        <div className="flex items-center h-full px-0.5 gap-0">
          {teamData.map((item) => (
            <TeamCard key={item.id} item={item} />
          ))}
        </div>
      </div>

    </div>
  );
}
