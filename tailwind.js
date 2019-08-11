module.exports = {
  theme: {
    extend: {
      colors:{
        'menu-background' : 'rgba(0,0,0,0.50)',
        'project-background' : 'rgba(0,0,0,0,0)',
        'project-background-active' : 'rgba(0,0,0,.7)',
        'jsYellow': '#F7DF1D',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover',],
  },
  plugins: []
}
