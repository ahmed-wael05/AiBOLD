import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          about: "About",
          services: "Services",
          creators: "Creators",
          contact: "Contact",
          getStarted: "Get Started",
          forClients: "For Our Clients",

          hero: {
            title: "AI Systems for Brands Ready to Move Faster.",
            subtitle:
              "Strategy, automation, and intelligent execution — built with Silicon Valley standards, designed for real-world growth.",
            ctaPrimary: "Request a Consultation →",
            ctaSecondary: "Explore Our Approach",
            microcopy: "No spam. No pressure. No sales noise.",
          },

          who: {
            heading: "Who We Work With",

            startups: {
              title: "Startups & Founders",
              desc: "Early-stage teams building with velocity. We help you move fast without breaking your foundation.",
            },

            growth: {
              title: "Growth-Stage Companies",
              desc: "Scaling operations need intelligent systems. We build the infrastructure your growth demands.",
            },

            enterprise: {
              title: "Established Brands Modernizing with AI",
              desc: "Legacy meets innovation. We bridge the gap between your brand equity and AI-powered efficiency.",
            },
          },

          servicesSection: {
            heading: "What We Do",

            automation: {
              title: "AI Automation & Agents",
              desc: "Autonomous systems that handle workflows, decisions, and operations — so your team can focus on what matters.",
            },

            strategy: {
              title: "Brand & Growth Strategy",
              desc: "Data-informed positioning and growth playbooks designed to compound over time.",
            },

            content: {
              title: "Content & Digital Experience Design",
              desc: "High-conversion digital experiences built with precision and narrative clarity.",
            },

            data: {
              title: "Data-Driven Decision Systems",
              desc: "Dashboards, pipelines, and models that turn raw data into strategic advantage.",
            },
          },

          credibility: {
            title: "Global Standards. Local Intelligence.",
            desc: "Founded with Silicon Valley methodology and operating in the Egyptian and US market, AIBold bridges advanced AI infrastructure with real commercial execution.",
          },

          clientDiscovery: {
            title: "For Our Clients",
            desc: "Want to understand how AI systems can transform your brand operations?",
            button: "Explore Our Capabilities →",
          },

          consultation: {
            name: "Name",
            email: "Email",
            company: "Company",
            challenge: "Main Challenge",
            button: "Start the Conversation →",
          },

          creatorsSection: {
            title: "For Creators & Content Strategists",
            desc: "If you build audiences, shape culture, or produce digital content — we'd love to collaborate.",
            name: "Name",
            platform: "Platform",
            audience: "Audience Size",
            email: "Email",
            why: "Why do you want to collaborate?",
            button: "Apply to Collaborate →",
          },

          buildCTA: {
            title: "Let's Build Your Intelligent System.",
            button: "Start the Conversation →",
          },

          footer: {
            rights: "© 2026 AIBold. All rights reserved.",
            languagePreference: "Language Preference",
          },
        },
      },

      ar: {
        translation: {
          about: "من نحن",
          services: "الخدمات",
          creators: "المبدعين",
          contact: "تواصل",
          getStarted: "ابدأ الآن",
          forClients: "لعملائنا",

          hero: {
            title: "أنظمة ذكاء اصطناعي للعلامات الجاهزة للتحرك بسرعة.",
            subtitle:
              "استراتيجية، أتمتة، وتنفيذ ذكي — بمعايير وادي السيليكون، ومصمم للنمو الحقيقي.",
            ctaPrimary: "اطلب استشارة →",
            ctaSecondary: "استكشف منهجيتنا",
            microcopy: "لا رسائل مزعجة. لا ضغط. لا ضوضاء بيع.",
          },

          who: {
            heading: "من نعمل معهم",

            startups: {
              title: "الشركات الناشئة ورواد الأعمال",
              desc: "فرق في مراحلها الأولى تبني بسرعة. نساعدك على التحرك سريعًا دون التأثير على أساسك.",
            },

            growth: {
              title: "شركات في مرحلة النمو",
              desc: "التوسع يحتاج إلى أنظمة ذكية. نبني البنية التحتية التي يتطلبها نموك.",
            },

            enterprise: {
              title: "علامات تجارية راسخة تطور نفسها بالذكاء الاصطناعي",
              desc: "نمزج بين إرث علامتك والابتكار الحديث لنمنحك كفاءة مدعومة بالذكاء الاصطناعي.",
            },
          },

          servicesSection: {
            heading: "ماذا نقدم",

            automation: {
              title: "الأتمتة ووكلاء الذكاء الاصطناعي",
              desc: "أنظمة ذاتية تدير العمليات والقرارات وسير العمل — ليتمكن فريقك من التركيز على ما يهم.",
            },

            strategy: {
              title: "استراتيجية العلامة والنمو",
              desc: "تموضع واستراتيجيات نمو مبنية على البيانات ومصممة للتوسع المستمر.",
            },

            content: {
              title: "تصميم المحتوى والتجربة الرقمية",
              desc: "تجارب رقمية عالية التحويل مبنية بدقة ووضوح سردي.",
            },

            data: {
              title: "أنظمة اتخاذ القرار المعتمدة على البيانات",
              desc: "لوحات تحكم ونماذج تحول البيانات الخام إلى ميزة استراتيجية.",
            },
          },

          credibility: {
            title: "معايير عالمية. فهم محلي.",
            desc: "تأسست بمنهجية وادي السيليكون وتعمل في السوق المصري والأمريكي، وتربط AIBold بين بنية تحتية متقدمة للذكاء الاصطناعي وتنفيذ تجاري حقيقي.",
          },

          clientDiscovery: {
            title: "لعملائنا",
            desc: "هل ترغب في فهم كيف يمكن لأنظمة الذكاء الاصطناعي تطوير عمليات علامتك التجارية؟",
            button: "استكشف قدراتنا →",
          },

          consultation: {
            name: "الاسم",
            email: "البريد الإلكتروني",
            company: "الشركة",
            challenge: "أهم التحديات",
            button: "ابدأ المحادثة →",
          },

          creatorsSection: {
            title: "لصناع المحتوى والاستراتيجيين",
            desc: "إذا كنت تبني جمهورًا أو تصنع تأثيرًا رقميًا — يسعدنا التعاون معك.",
            name: "الاسم",
            platform: "المنصة",
            audience: "حجم الجمهور",
            email: "البريد الإلكتروني",
            why: "لماذا ترغب في التعاون؟",
            button: "قدّم للتعاون →",
          },

          buildCTA: {
            title: "دعنا نبني نظامك الذكي.",
            button: "ابدأ المحادثة →",
          },

          footer: {
            rights: "© 2026 AIBold. جميع الحقوق محفوظة.",
            languagePreference: "تفضيل اللغة",
          },
        },
      },
    },
  });

export default i18n;