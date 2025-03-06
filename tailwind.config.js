/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        backgroundGradientStart: '#040268',
        backgroundGradientMiddle: '#1410B4',
        backgroundGradientEnd: '#040268',
        buttonGradientStart: '#2BC990',
        buttonGradientEnd: '#2BC990',
        foreground: '#FFFFFF',
      },
      padding: {
        inputHorizontal: "20px",
        inputVertical: "18px",
        page:"60px",
      },
      fontSize: {
        title: "18px",
        input: "14px",
        label: "18px",
      },
      fontFamily: {
        sans: ['Inter_400Regular', 'sans-serif'],
        bold: ['Inter_700Bold', 'sans-serif'],
        medium: ['Inter_500Medium', 'sans-serif'],
        black: ['Inter_900Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}