/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './templates/**/*.{js,ts,jsx,tsx}',
  ],
  jit: true,
  theme: {
    colors: {
      green: '#009c92',
      green15: 'rgba(0, 156, 146, 0.15)',
      red: '#be3c30',
      red15: 'rgba(207, 46, 31, 0.15)',
      yellow: '#eea51c',
      yellow15: 'rgba(238, 165, 28, 0.15)',
      blue: '#085bd8',
      blue15: 'rgba(8, 91, 216, 0.15)',
      pink: '#fb5888',
      pink15: 'rgba(251, 88, 136, 0.15)',
      purple: '#bd06db',
      purple15: 'rgba(189, 6, 219, 0.15)',
      skyBlue: '#029adc',
      skyBlue15: 'rgba(2, 154, 220, 0.15)',
      lime: '#a2a600',
      lime15: 'rgba(162, 166, 0, 0.15)',
      violet: '#6939f3',
      violet15: 'rgba(105, 57, 243, 0.15)',
      lightGreen: '#00ae12',
      lightGreen15: 'rgba(0, 174, 18, 0.15)',

      succeed3: '#00d398',
      succeed2: '#00d398',
      succeed1: '#d2fff2',
      error3: '#ff5a4b',
      error2: '#ff5a4b',
      error1: '#ffe3e0',

      background: '#e8edf4',

      violet8: '#826cff',
      violet7: '#a090ff',
      violet6: '#bbb1ff',
      violet5: '#e1dcff',
      violet4: '#eae7ff',
      violet3: '#f2f0ff',
      violet2: '#f4f3fb',
      violet1: '#fcfaff',

      blue8: '#3b7ee3',
      blue7: '#609fff',
      blue6: '#8ebbff',
      blue5: '#cadfff',
      blue4: '#e2eeff',
      blue3: '#eff7ff',
      blue2: '#f4f8fb',
      blue1: '#fcfeff',

      'grey-scale10': '#383852',
      'grey-scale9': '#4c4c68',
      'grey-scale8': '#606079',
      'grey-scale7': '#87879f',
      'grey-scale6': '#cbcbd7',
      'grey-scale5': '#dde0e9',
      'grey-scale4': '#edeff3',
      'grey-scale3': '#f3f5f9',
      'grey-scale2': '#f9fafd',
      'grey-scale1': '#ffffff',

      transparent: 'transparent',
    },
    fontSize: {
      '10pt': ['10px', '16px'],
      '12pt': ['12px', '20px'],
      '14pt': ['14px', '22px'],
      '16pt': ['16px', '24px'],
      '20pt': ['20px', '30px'],
    },
    fontWeight: {
      regular: '400', // regular
      'semi-bold': '600', // semi bold
      bold: '700', // bold
    },
    boxShadow: {
      light: '0px 2px 5px rgba(0, 0, 0, 0.05)',
      regular:
        '0px 4px 10px rgba(0, 0, 0, 0.05), 0px 2px 5px rgba(0, 0, 0, 0.05)',
      medium:
        '0px 4px 20px 5px rgba(0, 0, 0, 0.05), 0px 3px 10px rgba(0, 0, 0, 0.1)',
      bold: '0px 4px 50px 5px rgba(0, 0, 0, 0.05), 1px 3px 20px rgba(0, 0, 0, 0.05), 0px 10px 30px rgba(0, 0, 0, 0.1)',
    },
    extend: {
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      spacing: {
        0: '0px',
        2: '2px',
        4: '4px',
        8: '8px',
        10: '10px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
      },
      transitionProperty: {
        position: 'top, left, right, bottom',
      },
    },
  },
  plugins: [],
};
