/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'peach': '#E7816B',
        'custom-black': '#1D1C1E',
        'light-peach': '#FFAD9B',
        'dark-grey': '#333136',
        'light-grey': '#F1F3F5',
      },
      backgroundImage: {
        'hero-img': "url('/assets/home/desktop/image-hero-phone.png')",
        'hero-pattern' : "url('/assets/home/desktop/bg-pattern-hero-home.svg')",
        'sm-web' : "url('/assets/home/mobile/image-web-design.jpg')",
        'sm-app' : "url('/assets/home/mobile/image-app-design.jpg')",
        'sm-graphic' : "url('/assets/home/mobile/image-graphic-design.jpg')",
        'md-web' : "url('/assets/home/tablet/image-web-design.jpg')",
        'md-app' : "url('/assets/home/tablet/image-app-design.jpg')",
        'md-graphic' : "url('/assets/home/tablet/image-graphic-design.jpg')",
        'lg-web' : "url('/assets/home/desktop/image-web-design-large.jpg')",
        'lg-app' : "url('/assets/home/desktop/image-app-design.jpg')",
        'lg-graphic' : "url('/assets/home/desktop/image-graphic-design.jpg')",
        'small-circle-pattern' : "url('/assets/shared/desktop/bg-pattern-small-circle.svg')",
        'three-circle-pattern' : "url('/assets/shared/desktop/bg-pattern-three-circles.svg')",
        'call-to-action' : "url('/assets/shared/desktop/bg-pattern-call-to-action.svg')",
        'app-intro-pattern' : "url('/assets/app-design/desktop/bg-pattern-intro-app.svg')",
        'graphic-intro-pattern' : "url('/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg')",
        'web-intro-pattern' : "url('/assets/web-design/desktop/bg-pattern-intro-web.svg')",
        'sm-pattern-hero-about': "url('/assets/about/mobile/bg-pattern-hero-about-mobile.svg')",
        'lg-pattern-hero-about': "url('/assets/about/desktop/bg-pattern-hero-about-desktop.svg')",
        'sm-pattern-contact' : "url('/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg')",
        'lg-pattern-contact' : "url('/assets/contact/desktop/bg-pattern-hero-desktop.svg')",
        'sm-about-hero' : "url('/assets/about/mobile/image-about-hero.jpg')",
        'md-about-hero' : "url('/assets/about/tablet/image-about-hero.jpg')",
        'lg-about-hero' : "url('/assets/about/desktop/image-about-hero.jpg')",
        'sm-about-talent' : "url('/assets/about/mobile/image-world-class-talent.jpg')",
        'md-about-talent' : "url('/assets/about/tablet/image-world-class-talent.jpg')",
        'lg-about-talent' : "url('/assets/about/desktop/image-world-class-talent.jpg')",
        'sm-about-real-deal' : "url('/assets/about/mobile/image-real-deal.jpg')",
        'md-about-real-deal' : "url('/assets/about/tablet/image-real-deal.jpg')",
        'lg-about-real-deal' : "url('/assets/about/desktop/image-real-deal.jpg')",
        'sm-locations-canada' : "url('/assets/locations/tablet/image-map-canada.png')",
        'lg-locations-canada' : "url('/assets/locations/desktop/image-map-canada.png')",
        'sm-locations-canada' : "url('/assets/locations/tablet/image-map-canada.png')",
        'lg-locations-canada' : "url('/assets/locations/desktop/image-map-canada.png')",
        'sm-locations-australia' : "url('/assets/locations/tablet/image-map-australia.png')",
        'lg-locations-australia' : "url('/assets/locations/desktop/image-map-australia.png')",
        'sm-locations-uk' : "url('/assets/locations/tablet/image-map-uk.png')",
        'lg-locations-uk' : "url('/assets/locations/desktop/image-map-united-kingdom.png')",
      },
      backgroundPosition: {
        'center-bottom' : 'center bottom -24rem',
        'hero-mobile' : 'top 6.5rem left',
        'hero-tablet' : 'top 6rem right -5rem',
        'about-mobile-1' : 'top -9rem right',
        'about-tablet-1' : 'top -27rem left -7rem',
        'about-mobile-2' : 'top 19rem right -12rem',
        'about-tablet-2' : 'top 4rem right .2rem',
        'about-desktop-2' : 'top 22rem right 12rem',
        'hero-desktop-1' : 'top right',
        'location-tablet' : 'top 2rem left',
        'location-desktop' : 'top 2rem left 1rem',
        'contact-mobile' : 'top left -6rem',
        'contact-tablet' : 'top -2.8rem left -6rem',
        'contact-desktop' : 'top -8rem left -.2rem',
        'top-right' : 'right -5rem top -2rem',
        'top-left' : 'top 1.7rem right 1.5rem',
        'left-top' : 'top right'
      },
    },
  },
  plugins: [],
}
