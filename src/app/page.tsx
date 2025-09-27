"use client";

import LocationInput from "@/components/LocationInput";
import Stars from "@/components/Stars";
import { useState } from "react";
import Globe from "@/components/Map";
import ContinueButton from "@/components/ContinueButton";

export type SelPoint = {
  lat: number;
  lng: number;
} | null;
export default function Home() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<SelPoint>(null);
  const [redirecting, setRedirecting] = useState(false);
  return (
    <main>
      <Stars />
      <div className="max-w-6xl flex flex-col md:flex-row gap-8 md:items-stretch  justify-center mx-auto py-12 md:py-24 px-8">
        <div className="md:w-1/3 w-full">
          <div className="bg-background/80 ring-1 ring-blueBg text-white shadow-xl rounded-2xl h-full py-12 px-10 sm:py-14">
            <LocationInput
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          </div>
        </div>
        <div className="md:w-2/3 w-full">
          <div className="bg-background/80 ring-1 ring-blueBg text-white shadow-xl w-full rounded-xl h-full flex flex-col gap-4 px-10 sm:px-10 md:py-10 pb-16 pt-12">
            <h2 className="text-lg font-semibold text-white">
              Pin the exact location
            </h2>

            <div className="w-full p-4 h-60 bg-background border rounded-xl border-blueBg">
              <Globe
                selectedCity={selectedCity}
                setSelectedPoint={setSelectedPoint}
                selectedPoint={selectedPoint}
                onMark={(event) => setSelectedPoint(event?.lngLat ?? null)}
              />
            </div>
            <ContinueButton
              redirecting={redirecting}
              setRedirecting={setRedirecting}
              selectedPoint={selectedPoint}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
