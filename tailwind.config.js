module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        // primary
        turquoise: '#1ABC9C',
        sea_green: '#16A085',

        // success
        emerald: '#2ECC71',
        nephritis: '#27AE60',

        // info
        peter_river: '#3498DB',
        belieze_hole: '#2980B9',

        // acsent_primary
        amethyst: '#9B59B6',
        wisteria: '#8E44AD',

        // inverse
        wet_asphalt: '#34495E',
        midnight_blue: '#2C3E50',

        // warning
        sunflower: '#F1C40F',
        orange: '#F39C12',

        // acsent_secondary
        carrot: '#E67E22',
        pumpkin: '#D35400',

        // danger
        alizarin: '#E74C3C',
        pomegranate: '#C0392B',

        // default
        clouds: '#ECF0F1',
        silver: '#BDC3C7',

        // secondary
        concrete: '#95A5A6',
        asbestos: '#7F8C8D'
      },
      fontFamily: {
        nunito: ['Nunito'],
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
