import { getCityBounds } from "@/utils/getCityBounds";
import { useRef, useEffect } from "react";
import Map, { AttributionControl, MapRef, Marker } from "react-map-gl/mapbox";
import { MapMouseEvent } from "mapbox-gl";

interface Props {
  selectedPoint: { lat: number; lng: number } | null;
  selectedCity: string | null;
  onMark?: (event: MapMouseEvent | null) => void;
  setSelectedPoint: (point: { lat: number; lng: number } | null) => void;
}

function playSound() {
  const pinAudio = new Audio("/assets/pin.mp3");
  pinAudio.play().catch(() => {
    console.error("dint paly lol");
  });
}

export default function Globe({
  selectedCity,
  onMark,
  selectedPoint,
  setSelectedPoint,
}: Props) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;
  const mapRef = useRef<MapRef>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const bounds = getCityBounds(selectedCity);

    if (selectedCity && bounds) {
      // Animate to the city bounds
      mapRef.current.fitBounds(bounds, {
        padding: 20,
        duration: 3000,
      });
    } else {
      // Animate zoom out to world view when city is null
      mapRef.current.flyTo({
        center: [0, 0],
        zoom: 0,
        duration: 2000,
      });

      setSelectedPoint(null);
    }
  }, [selectedCity]);

  return (
    <div className="rounded-2xl  h-full w-full">
      <Map
        ref={mapRef}
        mapboxAccessToken={token}
        initialViewState={{ zoom: 0 }}
        mapStyle="mapbox://styles/mapbox/standard"
        projection="globe"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "0.5rem",
          background: "none",
        }}
        onClick={(event) => {
          if (onMark) {
            onMark(event);

            console.log(selectedPoint);
            playSound();
          }
        }}
        attributionControl={false}
      >
        <AttributionControl position="top-left" />
        {selectedPoint && (
          <Marker
            longitude={selectedPoint.lng}
            latitude={selectedPoint.lat}
            color="red"
          />
        )}
      </Map>
    </div>
  );
}
