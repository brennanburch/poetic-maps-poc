const config = {
  googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY as string,
  isDev: import.meta.env.DEV,
};

export default config;
