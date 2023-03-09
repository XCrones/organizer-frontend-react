import { useEffect, useState } from "react";

const ERRORS = {
  denied: "User denied Geolocation",
};

interface ICoords {
  latitude: number;
  longitude: number;
  accuracy: number;
}

interface IGeoSucs {
  coords: ICoords;
}

interface IGeoErr {
  code: number;
  message: string;
}

export const useGeolocation = () => {
  const [geolocation, SetGeolocation] = useState<ICoords | null>(null);
  const [isLockGeo, SetLockGeo] = useState(false);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = ({ coords }: IGeoSucs) => {
    const geolocation: ICoords = {
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
    };

    SetGeolocation(geolocation);
  };

  const error = ({ code, message }: IGeoErr) => {
    if (ERRORS.denied === message) {
      SetLockGeo(true);
    }
    SetGeolocation(null);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return { geolocation, isLockGeo };
};
