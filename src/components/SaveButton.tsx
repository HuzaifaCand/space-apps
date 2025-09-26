import { useEffect, useState } from "react";

export default function SaveButton({
  selectedCity,
}: {
  selectedCity: string | null;
}) {
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    if (selectedCity) {
      setJustSaved(true);
      const timer = setTimeout(() => setJustSaved(false), 3000); // flash duration
      return () => clearTimeout(timer);
    }
  }, [selectedCity]);

  return (
    <button
      disabled={!selectedCity}
      className={`mt-4 px-4 py-2 text-xs font-medium rounded-sm shadow-md transition-colors duration-300
  ${
    selectedCity
      ? justSaved
        ? "bg-blue-700 animate-pulse text-white"
        : "bg-blue-700 text-white"
      : "bg-blue-900/80 text-white/80 cursor-not-allowed"
  }`}
    >
      {selectedCity ? (justSaved ? "Selecting" : "Selected") : "Select"}
    </button>
  );
}
