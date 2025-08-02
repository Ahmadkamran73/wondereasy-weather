export interface Forecast {
    dt_txt: string;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
  }
  
  export interface ForecastResponse {
    list: Forecast[];
    city: {
      name: string;
      country: string;
    };
  }
  