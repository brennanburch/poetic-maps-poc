import grayscale from './greyscale';

interface Stylers {
  saturation?: number;
  color?: string;
}

interface Styles {
  featureType: string;
  stylers: Stylers[];
}

interface MapStyles {
  [key: string]: Styles[];
}

export type { Styles };

const mapStyles: MapStyles = {
  grayscale,
  default: [],
};

export default mapStyles;
