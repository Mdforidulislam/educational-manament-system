// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const customUtilities = {
        '.custom-scrollbar-container': {
          width: '100%',
          height: 'auto',
          overflowY: 'hidden',
          scrollbarWidth: 'thin',
          scrollbarColor: '#4a5568 #cbd5e0',
          position: 'relative',
          transition: ' 0.3s ease',
        },
        '.custom-scrollbar-container:hover': {
          overflowY: 'auto', // Show scrollbar on hover
        },
        '.custom-scrollbar-container::-webkit-scrollbar': {
          width: '8px',
          borderRadius: '100%',
        },
        '.custom-scrollbar-container::-webkit-scrollbar-thumb': {
          backgroundColor: '#4a5568',
          transition: 'background-color 0.3s', 
          borderRadius: '5px 5px 5px 5px',
        },
        '.custom-scrollbar-container::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        // Add more custom utilities as needed
      };
  
      addUtilities(customUtilities);
    },
  ],
};
