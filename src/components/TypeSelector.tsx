"use client";

type TypeSelectorProps = {
  types: string[];
  selectedType: string;
  onTypeChange: (type: string) => void;
  className?: string;
};

export default function TypeSelector({
  types,
  selectedType,
  onTypeChange,
  className = "",
}: TypeSelectorProps) {
  if (types.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <label htmlFor="type-selector" className="block text-sm font-medium text-gray-700 mb-2">
        Product Type
      </label>
      <select
        id="type-selector"
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:border-construction-orange/50 focus:border-construction-orange focus:outline-none focus:ring-2 focus:ring-construction-orange/20"
      >
        <option value="all">All Types ({types.length})</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

