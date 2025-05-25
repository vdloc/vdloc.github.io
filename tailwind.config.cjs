/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.astro'],
  darkMode: ['class', 'class'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Space Grotesk', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          blue: 'rgb(var(--color-primary-blue) / <alpha-value>)',
          green: 'rgb(var(--color-primary-green) / <alpha-value>)',
          yellow: 'rgb(var(--color-primary-yellow) / <alpha-value>)',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        text: {
          body: 'rgb(var(--color-text-body) / <alpha-value>)',
          bold: 'rgb(var(--color-text-bold) / <alpha-value>)',
          heading: 'rgb(var(--color-text-heading) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
          code: 'rgb(var(--color-text-code) / <alpha-value>)',
          link: 'rgb(var(--color-text-link) / <alpha-value>)',
          selection: 'rgb(var(--color-text-selection) / <alpha-value>)',
        },
        bg: {
          body: 'rgb(var(--color-bg-body) / <alpha-value>)',
          code: 'rgb(var(--color-bg-code) / <alpha-value>)',
          selection: 'rgb(var(--color-bg-selection) / <alpha-value>)',
        },
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 1.5px',
              backgroundPosition: '0 100%',
              backgroundImage:
                'linear-gradient(to right, rgb(var(--color-text-link)/1), rgb(var(--color-text-link)/1))',
              '&:hover': {
                color: 'rgb(var(--color-text-link))',
              },
            },
            'h1, h2, h3, h4, h5': {
              color: 'rgb(var(--color-text-heading))',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            blockquote: {
              border: 'none',
              position: 'relative',
              width: '96%',
              margin: '0 auto',
              fontSize: '1.0625em',
              paddingTop: '1.5rem',
              paddingBottom: '0.5rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
            },
            'blockquote::before': {
              fontFamily: 'Arial',
              content: '“',
              fontSize: '4em',
              color: 'rgb(var(--color-text-bold))',
              position: 'absolute',
              left: '-10px',
              top: '-10px',
            },
            'blockquote::after': {
              content: '',
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
          },
        },
        bubblegum: {
          css: {
            '--tw-prose-body': 'rgb(var(--color-text-body))',
            '--tw-prose-headings': 'rgb(var(--color-text-heading))',
            '--tw-prose-lead': 'rgb(var(--color-text-body))',
            '--tw-prose-links': 'rgb(var(--color-text-body))',
            '--tw-prose-bold': 'rgb(var(--color-text-bold))',
            '--tw-prose-counters': 'rgb(var(--color-text-body))',
            '--tw-prose-bullets': 'rgb(var(--color-text-body))',
            '--tw-prose-hr': 'rgb(var(--color-text-muted))',
            '--tw-prose-quotes': 'rgb(var(--color-text-body))',
            '--tw-prose-quote-borders': 'rgb(var(--color-text-muted))',
            '--tw-prose-captions': 'rgb(var(--color-primary-heading))',
            '--tw-prose-quote-captions': 'rgb(var(--color-primary-heading))',
            '--tw-prose-code': 'rgb(var(--color-text-code))',
            '--tw-prose-pre-code': 'rgb(var(--color-text-code))',
            '--tw-prose-pre-bg': 'rgb(var(--color-bg-code))',
            '--tw-prose-th-borders': 'rgb(var(--color-text-muted))',
            '--tw-prose-td-borders': 'rgb(var(--color-text-muted))',
          },
        },
      }),
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
