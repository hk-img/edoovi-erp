import AdvanceFeatures from "@/components/advanceFeatures/AdvanceFeatures";
import AiFeatures from "@/components/aiFeatures/AiFeatures";
import AwardCarousel from "@/components/awardCarousel/AwardCarousel";
import Faq from "@/components/faq/Faq";
import HeroBanner from "@/components/heroBanner/HeroBanner";
import Result from "@/components/result/Result";
import Testimonial from "@/components/testimonial/Testimonial";
import TrustedLogo from "@/components/trustedLogo/TrustedLogo";
import WhyChoose from "@/components/whyChoose/WhyChoose";


export const metadata = {
  title: "Best School Management Software – Get 1 Year Free Access",
  description: "Edoovi ERP offers the best AI-powered School ERP & School Management Software with 1 Year Free access. Automate operations & boost efficiency. Start today!",

  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  openGraph: {
    title: "Smart School Management Software",
    description:
      "Edoovi ERP offers the best School Management Software with 1 Year Free access. Simplify school operations with smart features, cloud-based ERP & support.",
    siteName: "Edoovi ERP"
  },
};

export default function Home() {
  const orgWebsiteSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.edoovierp.com/#organization',
        name: 'Edoovi',
        url: 'https://www.edoovierp.com/',
        logo: '',
        sameAs: [],
        description:
          'Edoovi - 360° AI powered School Management ERP providing fee management, attendance, exams, timetable, parent app and more for schools.',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.edoovierp.com/#website',
        url: 'https://www.edoovierp.com/',
        name: 'Edoovi School ERP',
        publisher: {
          '@id': 'https://www.edoovierp.com/#organization',
        },
      },
    ],
  }

  const appServiceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://www.edoovierp.com/#edoovi-app',
        name: 'Edoovi School App',
        url: 'https://www.edoovierp.com/',
        applicationCategory: 'EducationApplication',
        operatingSystem: 'Android, iOS, Web',
        description:
          'AI-driven School ERP mobile and web app with fee management, AI timetable, attendance, notifications, exam module and parent/student apps.',
        featureList: [
          'AI-Powered Fee Collection & Reminders',
          'AI Timetable Generator',
          'Real-time Attendance',
          'Notifications via WhatsApp, SMS, Push and Email',
          'Face Recognition Visitor Report',
          'Event & Holiday Scheduler',
          'Request Action Center',
        ],
      },
      {
        '@type': 'Service',
        name: 'School Management ERP',
        serviceType: 'School Management Software',
        provider: {
          '@id': 'https://www.edoovierp.com/#organization',
        },
        description:
          'Comprehensive school ERP services including admissions automation, fees management, exams, analytics and 24/7 smart support.',
      },
    ],
  }
  return (
    <>
      {/* Organization + Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgWebsiteSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* SoftwareApplication + Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appServiceSchema).replace(/</g, '\\u003c'),
        }}
      />
      <HeroBanner />
      <Result />
      <AiFeatures />
      <AdvanceFeatures />
      <WhyChoose />
      <AwardCarousel />
      <TrustedLogo />
      {/* <LatestInsight /> */}
      <Testimonial />
      <Faq />
    </>
  );
}
