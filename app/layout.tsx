import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "AfriCapital - Empowering African Entrepreneurs",
  description: "We empower African entrepreneurs with the skills, tools, and networks they need to build sustainable businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/assets/images/favicons/site.webmanifest" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Vendor CSS */}
        <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/custom-animate.css" />
        <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.min.css" />
        <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.pips.css" />
        <link rel="stylesheet" href="/assets/vendors/odometer/odometer.min.css" />
        <link rel="stylesheet" href="/assets/vendors/swiper/swiper.min.css" />
        <link rel="stylesheet" href="/assets/vendors/oxpins-icons/style.css" />
        <link rel="stylesheet" href="/assets/vendors/tiny-slider/tiny-slider.min.css" />
        <link rel="stylesheet" href="/assets/vendors/reey-font/stylesheet.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/vendors/bxslider/jquery.bxslider.css" />
        <link rel="stylesheet" href="/assets/vendors/bootstrap-select/css/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/assets/vendors/vegas/vegas.min.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/vendors/timepicker/timePicker.css" />

        {/* Template CSS */}
        <link rel="stylesheet" href="/assets/css/oxpins.css" />
      </head>
      <body className="custom-cursor grid grid-cols-1 max-w-screen overflow-x-hidden">
        <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div>

        <Header />
        <Providers>
          {children}
        </Providers>
        <Footer />

        {/* Vendor Scripts */}
        <Script src="/assets/vendors/jquery/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendors/jarallax/jarallax.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-appear/jquery.appear.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-validate/jquery.validate.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/nouislider/nouislider.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/odometer/odometer.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/swiper/swiper.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/tiny-slider/tiny-slider.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/wnumb/wNumb.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/wow/wow.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/isotope/isotope.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/countdown/countdown.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/owl-carousel/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/bxslider/jquery.bxslider.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/bootstrap-select/js/bootstrap-select.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/vegas/vegas.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/jquery-ui/jquery-ui.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/timepicker/timePicker.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/circleType/jquery.circleType.js" strategy="lazyOnload" />
        <Script src="/assets/vendors/circleType/jquery.lettering.min.js" strategy="lazyOnload" />

        {/* Template JS */}
        <Script src="/assets/js/oxpins.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
