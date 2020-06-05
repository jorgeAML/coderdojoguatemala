import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'icon': {
    'position': 'relative',
    'cursor': 'pointer'
  },
  'fontFace': {
    'fontFamily': ''Material Icons'',
    'fontStyle': 'normal',
    'fontWeight': '400',
    'src': 'url(.//material-design-icons/MaterialIcons-Regular.eot)',
    // For IE6-8
    'src': 'local('Material Icons'),
      local('MaterialIcons-Regular'),
      url(./material-design-icons/MaterialIcons-Regular.woff2) format('woff2'),
      url(./material-design-icons/MaterialIcons-Regular.woff) format('woff'),
      url(./material-design-icons/MaterialIcons-Regular.ttf) format('truetype')'
  },
  'material-iconsmd-18': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'material-iconsmd-24': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'material-iconsmd-36': {
    'fontSize': [{ 'unit': 'px', 'value': 36 }]
  },
  'material-iconsmd-48': {
    'fontSize': [{ 'unit': 'px', 'value': 48 }]
  },
  'material-iconsmd-dark': {
    'color': 'rgba(0, 0, 0, 0.54)'
  },
  'material-iconsmd-light': {
    'color': 'rgba(255, 255, 255, 1)'
  },
  'material-iconsmd-lightmd-inactive': {
    'color': 'rgba(255, 255, 255, 0.3)'
  },
  'button-light': {
    'color': 'var(--color-button-fill)',
    'transition': '0.25s',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }],
    'fontFamily': ''Squada One', cursive',
    'backgroundColor': 'transparent',
    'only screen&&>w1030': {
      'marginLeft': [{ 'unit': '%H', 'value': 0.03 }],
      'marginTop': [{ 'unit': '%V', 'value': 0 }]
    }
  },
  'button-light:hover': {
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'string', 'value': 'var(--hover-fill)' }]
  },
  'button-light:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'string', 'value': 'var(--hover-fill)' }]
  },
  'button-light:hover': {
    'borderColor': 'var(--hover-fill)',
    'color': '#fff'
  },
  'button-light': {
    'ColorButtonFill': '#a972cb',
    'HoverFill': '#a972cb',
    'TransitionAll': '0.25s'
  },
  'button-dark': {
    'color': 'var(--color-button-fill)',
    'transition': '0.25s',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }],
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }],
    'fontFamily': ''Squada One', cursive',
    'backgroundColor': 'transparent'
  },
  'button-dark:hover': {
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'string', 'value': 'var(--hover-fill)' }]
  },
  'button-dark:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'string', 'value': 'var(--hover-fill)' }]
  },
  'button-dark:hover': {
    'borderColor': 'var(--hover-fill)',
    'color': '#eeeeee'
  },
  'button-dark': {
    'ColorButtonFill': '#252b34',
    'HoverFill': '#252b34',
    'TransitionAll': '0.25s'
  },
  'material-icons': {
    'fontFamily': ''Material Icons'',
    'fontWeight': 'normal',
    'fontStyle': 'normal',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    // Preferred icon size
    'display': 'inline-block',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'textTransform': 'none',
    'letterSpacing': [{ 'unit': 'string', 'value': 'normal' }],
    'wordWrap': 'normal',
    'whiteSpace': 'nowrap',
    'direction': 'ltr',
    // Support for all WebKit browsers.
    'WebkitFontSmoothing': 'antialiased',
    // Support for Safari and Chrome.
    'textRendering': 'optimizeLegibility',
    // Support for Firefox.
    'MozOsxFontSmoothing': 'grayscale',
    // Support for IE.
    'fontFeatureSettings': ''liga''
  },
  // DESKTOPS
  'h1-sp-change': {
    'FontColorBack': '#d9e3e3',
    'FontColorChange': '#5e5e5e',
    'FontStyleChange': ''Squada One', cursive',
    'FontStyleChangeWork': ''Work Sans', sans-serif',
    'ColorHr': '#b2b2b2',
    'ColorBackFooter': '#c1c4ce',
    'ColorAHover': '#856a54'
  },
  'p_sp_change': {
    'FontColorBack': '#d9e3e3',
    'FontColorChange': '#5e5e5e',
    'FontStyleChange': ''Squada One', cursive',
    'FontStyleChangeWork': ''Work Sans', sans-serif',
    'ColorHr': '#b2b2b2',
    'ColorBackFooter': '#c1c4ce',
    'ColorAHover': '#856a54'
  },
  'h2_tp_change': {
    'FontColorBack': '#d9e3e3',
    'FontColorChange': '#5e5e5e',
    'FontStyleChange': ''Squada One', cursive',
    'FontStyleChangeWork': ''Work Sans', sans-serif',
    'ColorHr': '#b2b2b2',
    'ColorBackFooter': '#c1c4ce',
    'ColorAHover': '#856a54'
  },
  'in_box_change p': {
    'FontColorBack': '#d9e3e3',
    'FontColorChange': '#5e5e5e',
    'FontStyleChange': ''Squada One', cursive',
    'FontStyleChangeWork': ''Work Sans', sans-serif',
    'ColorHr': '#b2b2b2',
    'ColorBackFooter': '#c1c4ce',
    'ColorAHover': '#856a54'
  },
  'hr_tp_change': {
    'FontColorBack': '#d9e3e3',
    'FontColorChange': '#5e5e5e',
    'FontStyleChange': ''Squada One', cursive',
    'FontStyleChangeWork': ''Work Sans', sans-serif',
    'ColorHr': '#b2b2b2',
    'ColorBackFooter': '#c1c4ce',
    'ColorAHover': '#856a54'
  },
  'box_button_change > a': {
    'FontColorBack': '#d9e3e3',
    'FontColorChange': '#5e5e5e',
    'FontStyleChange': ''Squada One', cursive',
    'FontStyleChangeWork': ''Work Sans', sans-serif',
    'ColorHr': '#b2b2b2',
    'ColorBackFooter': '#c1c4ce',
    'ColorAHover': '#856a54'
  },
  'footer-container-change': {
    'FontColorBack': '#d9e3e3',
    'FontColorChange': '#5e5e5e',
    'FontStyleChange': ''Squada One', cursive',
    'FontStyleChangeWork': ''Work Sans', sans-serif',
    'ColorHr': '#b2b2b2',
    'ColorBackFooter': '#c1c4ce',
    'ColorAHover': '#856a54'
  },
  'hr-footer-change': {
    'FontColorBack': '#d9e3e3',
    'FontColorChange': '#5e5e5e',
    'FontStyleChange': ''Squada One', cursive',
    'FontStyleChangeWork': ''Work Sans', sans-serif',
    'ColorHr': '#b2b2b2',
    'ColorBackFooter': '#c1c4ce',
    'ColorAHover': '#856a54'
  },
  'footer-a1-change': {
    'FontColorBack': '#d9e3e3',
    'FontColorChange': '#5e5e5e',
    'FontStyleChange': ''Squada One', cursive',
    'FontStyleChangeWork': ''Work Sans', sans-serif',
    'ColorHr': '#b2b2b2',
    'ColorBackFooter': '#c1c4ce',
    'ColorAHover': '#856a54'
  },
  'active-black': {
    'FontColorBack': '#d9e3e3',
    'FontColorChange': '#5e5e5e',
    'FontStyleChange': ''Squada One', cursive',
    'FontStyleChangeWork': ''Work Sans', sans-serif',
    'ColorHr': '#b2b2b2',
    'ColorBackFooter': '#c1c4ce',
    'ColorAHover': '#856a54'
  }
});
