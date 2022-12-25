module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px',
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'transparent': 'transparent',
      'blue': '#313D5A',
      'yellow':'#FEC527',
      'light-grey':'#C4C4C4',
      'sky-blue':'#03B3DA',
      'grey-background':'#F0F0F0',
      'green':'#4EAC91',
    },
    fontFamily: {
      ttfirsNeueFontBold:['ttfirsNeuebold','sans-serif'],
      ttfirsNeueFontSemiBold:['ttfirsNeuesemibold','sans-serif'],
      montFontRegular:['montRegular','sans-serif'],
      montFontSemiBold:['montSemibold','sans-serif'],
      montFontBold:['montbold','sans-serif'],
    },
    container: {
      center: true,  
    },
    extend: {},
  },
  plugins: [],
}
