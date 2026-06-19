/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Body workhorse — Inter, used deliberately for its tabular numerics
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Big, chunky, geometric — headlines, hero stats, mega numbers
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Ledger rows, transaction IDs, anywhere precise alignment matters
        mono: ['JetBrains Mono', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      colors: {
        // Sitewise design system — dark + amber, cream supports.
        ink: {
          DEFAULT: '#0A0E0D', // near-black, slightly green; primary dark surface
          2: '#13191A',       // one notch lighter — hover on ink rows
          3: '#1F2625',       // card surface in dark mode
          4: '#2A3231',       // dark-mode borders
        },
        cream: {
          DEFAULT: '#FAFAF7', // primary light surface
          2: '#F4F1EC',       // hover on cream rows
          3: '#EDE9E1',       // card surface in light mode (rare)
        },
        amber: {
          DEFAULT: '#FFB800', // THE accent. CTAs, key numbers, focus.
          deep: '#E69F00',    // hover on amber
          soft: '#FFF4D1',    // amber tint background, light mode only
        },
        forest: {
          DEFAULT: '#22C55E', // positive: paid, on-budget, success
          deep: '#15803D',
          soft: '#DCFCE7',
        },
        clay: {
          DEFAULT: '#E8743C', // destructive, over-budget, alert
          deep: '#C2410C',
          soft: '#FFE4D6',
        },
        stone: {
          DEFAULT: '#A8A29E', // secondary text, dividers
          2: '#78716C',       // tertiary text
          3: '#57534E',       // quaternary, captions on dark
        },
      },
      borderRadius: {
        sm: '6px',  // buttons, inputs, badges
        md: '12px', // cards, modals
        lg: '16px', // hero containers, marketing cards
      },
      boxShadow: {
        card: '0 1px 2px rgb(10 14 13 / 0.04), 0 4px 12px rgb(10 14 13 / 0.04)',
        modal: '0 24px 48px -12px rgb(10 14 13 / 0.18)',
      },
      transitionTimingFunction: {
        snap: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.32, 0.72, 0, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
