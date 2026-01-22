"use client";

type GradeMarqueeProps = {
  grades: string[];
  onGradeClick?: (grade: string) => void;
  selectedGrade?: string;
  className?: string;
};

export default function GradeMarquee({
  grades,
  onGradeClick,
  selectedGrade,
  className = "",
}: GradeMarqueeProps) {
  if (grades.length === 0) {
    return null;
  }

  return (
    <div className={`rounded-3xl border border-slate-200 bg-slate-50/50 backdrop-blur-sm p-6 shadow-sm ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-construction-orange"></div>
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Technical Grades</h3>
      </div>
      <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto custom-scrollbar pr-2">
        {grades.map((grade) => {
          const isSelected = selectedGrade === grade;
          return (
            <button
              key={grade}
              onClick={() => onGradeClick?.(grade)}
              className={`w-full px-4 py-3 rounded-xl border-2 text-xs font-black uppercase tracking-widest transition-all duration-300 text-left ${
                isSelected
                  ? "border-construction-orange bg-construction-orange text-white shadow-lg shadow-orange-500/20"
                  : "border-slate-100 bg-white text-construction-gray hover:border-construction-orange/30 hover:text-construction-orange"
              }`}
              disabled={!onGradeClick}
            >
              {grade}
            </button>
          );
        })}
      </div>
    </div>
  );
}







