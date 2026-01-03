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
    <div className={`rounded-3xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Grades</h3>
      <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
        {grades.map((grade) => {
          const isSelected = selectedGrade === grade;
          return (
            <button
              key={grade}
              onClick={() => onGradeClick?.(grade)}
              className={`w-full px-4 py-2 rounded-lg border text-sm font-medium transition-colors text-left ${
                isSelected
                  ? "border-construction-orange bg-construction-orange text-white"
                  : "border-gray-200 bg-gray-50 text-gray-700 hover:border-construction-orange hover:bg-construction-orange/5 hover:text-construction-orange"
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







