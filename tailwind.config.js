module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                mytheme: {

                    "primary": "#1154FE",

                    "secondary": "#2B62FE",

                    "accent": "#4F7FFD",
                    
                    "neutral": "#E1E0E1",

                    "base-100": "#FFFFFF",

                    "info": "#5069e7",

                    "success": "#1bdec8",

                    "warning": "#f8dc63",

                    "error": "#f0758f",
                },
                
            },
            {
            extend: {
                fontFamily: {
                  'overpass': ['Overpass Mono', 'monospace', 'sans-serif'],
                },
              },
            }
          

        ],
    },
    plugins: [
        require('daisyui','@tailwindcss/typography')
    ],
    //...
};
