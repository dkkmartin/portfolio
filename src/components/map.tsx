'use client';

import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import { Map as MapGL, MapEvent, Marker } from 'react-map-gl/maplibre';

export default function MyMap() {
  const [viewState, setViewState] = useState({
    longitude: 12.576574709893748,
    latitude: 55.679,
    zoom: 4,
  });
  const { theme } = useTheme();

  const handleLoad = (event: MapEvent) => {
    const map = event.target;
    map.flyTo({
      center: [viewState.longitude, viewState.latitude],
      zoom: 11,
      essential: true,
    });
  };

  return (
    <div className="relative rounded-tr-lg rounded-tl-lg overflow-hidden mb-2 h-48">
      <MapGL
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: '100%', height: 200 }}
        onLoad={handleLoad}
        mapStyle={
          theme === 'dark'
            ? 'https://api.maptiler.com/maps/872f5522-7f39-426f-915c-8f8a6535dbd7/style.json?key=jBMk5QBRIIJaoZrgu0uZ'
            : 'https://api.maptiler.com/maps/b350e71f-0b18-4f55-813f-af3707afff23/style.json?key=jBMk5QBRIIJaoZrgu0uZ'
        }
      >
        <Marker longitude={12.576574709893748} latitude={55.679}>
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-4 w-4 animate-ping-slow rounded-full bg-sky-500 opacity-50"></span>
            <span className="relative">
              <span className="text-white">&#128187;</span>
            </span>
          </div>
        </Marker>
      </MapGL>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(transparent,#9d9da200_60%,#fafafa)] dark:bg-[linear-gradient(transparent,#18181b73_60%,#0a0a0a)]"></div>
    </div>
  );
}
