//--------------------------------------------------------------------------
// Tailwind site configuration
//--------------------------------------------------------------------------
//
// Use this file to completely define the current sites design system by
// adding and extending to Tailwinds default utility classes.
//

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  presets: [],
  theme: {
    // Here we define the default colors available. If you want to include
    // all default Tailwind colors you should extend the colors instead.
    colors: {
      black:   '#000',
      white:  '#fff',
      // Neutrals: neutral colors, with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
      neutral: '#414036',
      // Primary: primary brand color with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
      primary: '#539717',
      secondary: '#CF5F1E'
    },
    extend: {
      boxShadow: ({theme}) => ({
        'flat': `6px 6px 0px 0px ${theme('colors.primary')}`,
      }),
      // Set default transition durations and easing when using the transition utilities.
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    // Remove the font families you don't want to use.
    fontFamily: {
      sans: [
        // Use a custom sans serif font for this site by changing 'Gaultier' to the
        // font name you want and uncommenting the following line.
        'Citizen',
        ...defaultTheme.fontFamily.sans,
      ],
      title: [
        // Use a custom serif font for this site by changing 'Lavigne' to the
        // font name you want and uncommenting the following line.
        'Handelson',
        ...defaultTheme.fontFamily.serif,
      ],
    },
    // The font weights available for this site.
    fontWeight: {
      // hairline: 100,
      // thin: 200,
      light: 300,
      // normal: 400,
      // medium: 500,
      // semibold: 600,
      bold: 700,
      // extrabold: 800,
      black: 900,
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        // Default color transition on links unless user prefers reduced motion.
        '@media (prefers-reduced-motion: no-preference)': {
          'a': {
            transition: 'color .3s ease-in-out',
          },
        },
        'html': {
            color: theme('colors.neutral'),
            //--------------------------------------------------------------------------
            // Set sans, serif or mono stack with optional custom font as default.
            //--------------------------------------------------------------------------
            // fontFamily: theme('fontFamily.mono'),
            fontFamily: theme('fontFamily.sans'),
            // fontFamily: theme('fontFamily.serif'),
        },
      })
    }),

    // Custom components for this particular site.
    plugin(function({ addComponents, theme }) {
      const components = {
      }
      addComponents(components)
    }),

    // Custom utilities for this particular site.
    plugin(function({ addUtilities, theme, variants }) {
      const newUtilities = {
      }
      addUtilities(newUtilities)
    }),
  ]
}
