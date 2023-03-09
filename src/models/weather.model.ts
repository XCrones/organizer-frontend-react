export interface IWeatherCurr {
  coord: {
    lon: number;
    lat: number;
  };

  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];

  base: string;

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };

  visibility: number;

  wind: {
    speed: number;
    deg: number;
    gust: number;
  };

  rain: {
    "1h"?: number;
    "3h"?: number;
  } | null;

  snow: {
    "1h"?: number;
    "3h"?: number;
  } | null;

  clouds: {
    all: number;
  } | null;

  dt: number;

  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
    message: string;
  };

  timezone: number;
  cityID: number;
  name: string;
  cod: number;
}

export interface IWeatherForecast {
  cod: string;
  message: number;
  cnt: number;

  list: IForecastItem[];

  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface IForecastItem {
  dt: number;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
    temp_max: number;
    temp_min: number;
    sea_level: number;
    feels_like: number;
    grnd_level: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    "1h": number;
    "3h": number;
  };
  snow: {
    "1h": number;
    "3h": number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface ICityWeather {
  id: number;
  name: string;
  country: string;
}

export interface IReqWeatherByName {
  city: string;
}

export interface IReqWeatherByGeo {
  lat: number;
  lon: number;
}
