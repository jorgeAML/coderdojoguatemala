import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'footer-container': {
    // background-image: url("./images/dark-honeycomb.png");
    'borderTop': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#576675' }]
  },
  'footer-img': {
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'height': [{ 'unit': '%V', 'value': 0.6 }]
  },
  'p-adjust': {
    'color': 'var(--color-font-one)',
    'fontFamily': 'var(--font-one)',
    'only screen&&>w1030': {
      'fontSize': [{ 'unit': 'rem', 'value': 0.8 }]
    }
  },
  'footer-row': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'footer-adjust': {
    'margin': [{ 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.02 }]
  },
  'footer-adjust2': {
    'display': 'inline-flex',
    'flexDirection': 'row',
    'alignContent': 'center'
  },
  'footer-post': {
    'backgroundColor': 'transparent'
  },
  'footer-post > h3': {
    'color': 'var(--color-font-two)',
    'fontFamily': 'var(--font-two)'
  },
  'footer-post > ul': {
    'color': 'var(--color-font-one)',
    'fontFamily': 'var(--font-one)'
  },
  'footer-a1 > a:hover': {
    'color': 'rgb(100,240,251)',
    'transition': '0.6s ease-in-out'
  },
  'footer-a2 > a:hover': {
    'color': 'rgb(26,233,76)',
    'transition': '0.6s'
  },
  'footer-a3 > a:hover': {
    'color': 'rgb(205,245,11)',
    'transition': '0.6s'
  },
  'piePagina-footer': {
    'color': 'var(--color-font-one)',
    'fontFamily': 'var(--font-two)',
    'textAlign': 'center'
  },
  // VARIABLES
  'p-adjust': {
    'FontOne': ''Work Sans', sans-serif',
    'FontTwo': ''Squada One', cursive',
    'ColorFontOne': '#f9f8f9',
    'ColorFontTwo': '#576675'
  },
  'footer-post > h3': {
    'FontOne': ''Work Sans', sans-serif',
    'FontTwo': ''Squada One', cursive',
    'ColorFontOne': '#f9f8f9',
    'ColorFontTwo': '#576675'
  },
  'footer-post > ul': {
    'FontOne': ''Work Sans', sans-serif',
    'FontTwo': ''Squada One', cursive',
    'ColorFontOne': '#f9f8f9',
    'ColorFontTwo': '#576675'
  },
  'piePagina-footer': {
    'FontOne': ''Work Sans', sans-serif',
    'FontTwo': ''Squada One', cursive',
    'ColorFontOne': '#f9f8f9',
    'ColorFontTwo': '#576675'
  }
});
