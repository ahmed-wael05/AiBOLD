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
            title: "We Made To ACCELERATE",
            tagline: "AI Systems for Brands Ready to Move Faster",
            subtitle:
              "Strategy, automation, and intelligent execution — built with Silicon Valley standards, designed for real-world growth.",
            ctaPrimary: "Explore Our Approach →",
            microcopy: "No spam. No pressure. No sales noise."
          },

          who: {
            heading: "Who We Work With",

            startups: {
              title: "Startups & Founders",
              desc: "Early-stage teams building with velocity. We help you move fast without breaking your foundation."
            },

            growth: {
              title: "Growth-Stage Companies",
              desc: "Scaling operations need intelligent systems. We build the infrastructure your growth demands."
            },

            enterprise: {
              title: "Established Brands Modernizing with AI",
              desc: "Legacy meets innovation. We bridge the gap between your brand equity and AI-powered efficiency."
            }
          },

          servicesSection: {
            heading: "What We Do",

            automation: {
              title: "AI Automation & Agents",
              desc: "Autonomous systems that handle workflows, decisions, and operations — so your team can focus on what matters."
            },

            strategy: {
              title: "Brand & Growth Strategy",
              desc: "Data-informed positioning and growth playbooks designed to compound over time."
            },

            content: {
              title: "Content & Digital Experience Design",
              desc: "High-conversion digital experiences built with precision and narrative clarity."
            },

            data: {
              title: "Data-Driven Decision Systems",
              desc: "Dashboards, pipelines, and models that turn raw data into strategic advantage."
            }
          },

          credibility: {
            heading: "Let's Build Your Intelligent System.",
            intro: "We Build With Intelligence — And We Listen.",
            description:
              "We continuously refine our systems based on real founder and operator feedback."
          },

          clientDiscovery: {
            label: "For Our Users",
            heading: "Help Us Improve the Experience",
            description:
              "We're running a short survey to better understand how users interact with our platform and how language preferences shape their experience. Your feedback helps us improve our AI systems.",
            cta: "Take the Survey →"
          },

          consultation: {
            name: "Name",
            email: "Email",
            company: "Company",
            challenge: "Main Challenge",
            button: "Start the Conversation →"
          },

          creator: {
            heading: "For Creators & Content Strategists",
            subtitle:
              "If you build audiences, shape culture, or produce digital content — we'd love to collaborate.",
            name: "Name",
            platform: "Platform",
            audience: "Audience Size",
            email: "Email",
            reason: "Why do you want to collaborate?",
            cta: "Apply to Collaborate →"
          },

          buildCTA: {
            title: "Let's Build Your Intelligent System.",
            button: "Start the Conversation →"
          },

          standards: {
            heading: "Global Standards. Local Intelligence.",
            description:
              "Founded with Silicon Valley methodology and operating in the Egyptian and US market, AIBold bridges advanced AI infrastructure with real commercial execution."
          },

          footer: {
            rights: "© 2026 AIBold. All rights reserved.",
            languagePreference: "Language Preference"
          }
        }
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
            tagline: "أنظمة ذكاء اصطناعي للعلامات الجاهزة للتحرك بسرعة",
            subtitle:
              "استراتيجية، أتمتة، وتنفيذ ذكي — بمعايير وادي السيليكون ومصمم للنمو الحقيقي.",
            ctaPrimary: "استكشف منهجيتنا →",
            microcopy: "لا رسائل مزعجة. لا ضغط. لا ضوضاء بيع."
          },

          who: {
            heading: "من نعمل معهم",

            startups: {
              title: "الشركات الناشئة ورواد الأعمال",
              desc: "فرق في مراحلها الأولى تبني بسرعة. نساعدك على التحرك سريعًا دون التأثير على أساسك."
            },

            growth: {
              title: "شركات في مرحلة النمو",
              desc: "التوسع يحتاج إلى أنظمة ذكية. نبني البنية التحتية التي يتطلبها نموك."
            },

            enterprise: {
              title: "علامات تجارية راسخة تطور نفسها بالذكاء الاصطناعي",
              desc: "نمزج بين إرث علامتك والابتكار الحديث لنمنحك كفاءة مدعومة بالذكاء الاصطناعي."
            }
          },

          servicesSection: {
            heading: "ماذا نقدم",

            automation: {
              title: "الأتمتة ووكلاء الذكاء الاصطناعي",
              desc: "أنظمة ذاتية تدير العمليات والقرارات وسير العمل — ليتمكن فريقك من التركيز على ما يهم."
            },

            strategy: {
              title: "استراتيجية العلامة والنمو",
              desc: "تموضع واستراتيجيات نمو مبنية على البيانات ومصممة للتوسع المستمر."
            },

            content: {
              title: "تصميم المحتوى والتجربة الرقمية",
              desc: "تجارب رقمية عالية التحويل مبنية بدقة ووضوح سردي."
            },

            data: {
              title: "أنظمة اتخاذ القرار المعتمدة على البيانات",
              desc: "لوحات تحكم ونماذج تحول البيانات الخام إلى ميزة استراتيجية."
            }
          },

          credibility: {
            heading: "لنقم ببناء نظامك الذكي.",
            intro: "نحن نبني بالذكاء — ونستمع.",
            description:
              "نطور أنظمتنا باستمرار اعتمادًا على ملاحظات المؤسسين والمشغلين."
          },

          clientDiscovery: {
            label: "لمستخدمينا",
            heading: "ساعدنا في تحسين التجربة",
            description:
              "نُجري استطلاعًا قصيرًا لفهم كيفية تفاعل المستخدمين مع منصتنا بشكل أفضل وكيف تؤثر تفضيلات اللغة على تجربتهم.",
            cta: "ابدأ الاستبيان →"
          },

          consultation: {
            name: "الاسم",
            email: "البريد الإلكتروني",
            company: "الشركة",
            challenge: "أهم التحديات",
            button: "ابدأ المحادثة →"
          },

          creator: {
            heading: "لصنّاع المحتوى واستراتيجيي المحتوى",
            subtitle:
              "إذا كنت تبني جمهورًا أو تصنع محتوى رقميًا — يسعدنا التعاون معك.",
            name: "الاسم",
            platform: "المنصة",
            audience: "حجم الجمهور",
            email: "البريد الإلكتروني",
            reason: "لماذا ترغب في التعاون؟",
            cta: "التقديم للتعاون →"
          },

          buildCTA: {
            title: "دعنا نبني نظامك الذكي.",
            button: "ابدأ المحادثة →"
          },

          standards: {
            heading: "معايير عالمية. ذكاء محلي.",
            description:
              "تأسست AIBold وفق منهجية وادي السيليكون وتعمل في السوق المصري والأمريكي، حيث نربط البنية التحتية المتقدمة للذكاء الاصطناعي بالتنفيذ التجاري الحقيقي."
          },

          footer: {
            rights: "© 2026 AIBold. جميع الحقوق محفوظة.",
            
          }
        }
      }
    }
  });

export default i18n;