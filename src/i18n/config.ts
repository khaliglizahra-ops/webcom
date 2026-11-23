import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { langFromPath } from './lang';

// Comprehensive translations for WebCom Agency
const resources = {
    en: {
        translation: {
            nav: {
                home: "Home",
                work: "Our Work",
                services: "Services",
                process: "How We Work",
                blog: "Blog",
                about: "About",
                contact: "Contact",
                bookCall: "Get a Quote"
            },
            meta: {
                workTitle: "Our Work | WebCom, Ankara",
                workDesc: "Websites and online stores we have built for shops and businesses, most of them in Ankara.",
                homeTitle: "WebCom | Websites, Online Stores and Google Visibility for Businesses",
                homeDesc: "WebCom designs websites and online stores for businesses, gets them found on Google and runs their ads. We stay with you after launch.",
                aboutTitle: "About | WebCom",
                aboutDesc: "A studio that starts every project by getting to know the business, and builds simple websites that bring results.",
                servicesTitle: "Services | WebCom",
                servicesDesc: "Websites, online stores, Google and Maps visibility, ad management, brand identity and automation.",
                processTitle: "How We Work | WebCom",
                processDesc: "From first conversation to launch and beyond: the four clear steps of a WebCom project.",
                blogTitle: "The WebCom Blog | Satirical Tech Insights",
                blogDesc: "Thought-leadership for founders who mistake confidence for competence.",
                contactTitle: "Contact | WebCom",
                contactDesc: "Tell us briefly about your project and we'll come back within one working day with a clear quote.",
                strategyTitle: "Get a Free Quote | WebCom",
                strategyDesc: "A free, no-obligation first call about your website, Google visibility or online store."
            },
            processPage: {
                titlePart1: "How we ",
                titleHighlight: "work.",
                subtitle: "Four clear steps, no surprises. At every stage you know what's being done and what it costs.",
                step1Num: "Step 01",
                step1Title: "Getting to know you",
                step1Desc: "We visit your business or talk on the phone. Once we understand where you are now, who your customers are and what you expect from your site, we send you a written quote.",
                step2Num: "Step 02",
                step2Title: "Design and build",
                step2Desc: "We design your site from scratch for your business, not from a bought template. We review the drafts together and make the changes you want.",
                step3Num: "Step 03",
                step3Title: "Testing",
                step3Desc: "We check every page on phones, tablets and computers, test the forms and payments, and make sure the site loads fast.",
                step4Num: "Step 04",
                step4Title: "Launch and support",
                step4Desc: "We put your site live and complete your Google listing. After that, we're here for updates, fixes and new pages."
            },
            blogPage: {
                titlePart1: 'Corporate ',
                titleHighlight: 'Buzzword Bingo.',
                subtitle: 'Thought-leadership content for founders who mistake confidence for competence.',
                readMore: 'Read Article',
                posts: {
                    p1Cat: 'Strategy',
                    p1Title: 'Re-branding as an AI Company Without Changing Any Code',
                    p1Desc: 'A step-by-step guide to adding ".ai" to your domain name and securing a $10M seed round for your basic CRUD app.',
                    p2Cat: 'Engineering',
                    p2Title: 'The 100-Hour Workweek: How to Flex Your Burnout on LinkedIn',
                    p2Desc: 'Sleeping is for the weak. How bragging about neglecting your personal life actually increases your startup\'s valuation.',
                    p3Cat: 'Insights',
                    p3Title: 'Agile Scrums for Ordering Pizza',
                    p3Desc: 'Why your dev team needs a 3-week design sprint just to decide between pepperoni and margherita.',
                    p4Cat: 'Architecture',
                    p4Title: 'The Microservices Trap: Splitting a Monolith into 50 Pieces of Trash',
                    p4Desc: 'Discover the joy of turning one easily fixable bug into a distributed network failure across 8 time zones.',
                    p5Cat: 'Marketing',
                    p5Title: 'Why Your Landing Page Needs More Vague Verbs',
                    p5Desc: '"Empower," "Synergize," "Unleash." How saying absolutely nothing can boost your perceived market value by 400%.',
                    p6Cat: 'Culture',
                    p6Title: 'Gamifying the Employee Layoff Process',
                    p6Desc: 'A visionary approach to HR: How we used a battle-royale style leadership leaderboard to determine our Q3 workforce reductions.',
                    p7Cat: 'Retention',
                    p7Title: 'Ghosting as a Customer Success Strategy',
                    p7Desc: 'Learn why completely ignoring user complaints makes them respect your software more.',
                    p8Cat: 'Startups',
                    p8Title: 'The Pivot: When You Realize Nobody Wants Your Product',
                    p8Desc: 'How to gracefully transition your failed B2C crypto-walnut delivery app into a B2B AI enterprise solution.',
                    p9Cat: 'Branding',
                    p9Title: 'Why You Absolutely Shouldn\'t Have a Website',
                    p9Desc: 'Discover the noble art of completely erasing your digital footprint so your competitors can finally get the customers they deserve.'
                },
                articles: {
                    p1p1: 'If there\'s anything modern software development has taught us, it\'s that actual innovation is hard, but buying a new domain name is incredibly easy. Why build a complex neural network when you can just append "AI-driven" to your existing marketing copy?',
                    p1p2: 'Think about it. Investors don\'t actually read source code. If your landing page has a dark mode and a glowing purple orb animation, you are scientifically an AI company.',
                    p1h1: 'The "If/Else" Learning Algorithm',
                    p1p3: 'Our proprietary research indicates that compiling 50 nested "if/else" statements qualifies as "machine learning" as long as you refuse to explain how it works. When asked, just mutter something about "LLM context windows" and slowly back out of the room.',
                    p1p4: 'In conclusion, stop writing actual software and start writing press releases about your proprietary algorithmic synergy. VCs literally cannot tell the difference.',

                    p2p1: 'Have you ever slept for 8 hours and felt an overwhelming sense of guilt because you weren\'t "hustling"? Welcome to modern entrepreneurship, where sleep deprivation is a badge of honor and therapy is just an un-optimized time block.',
                    p2p2: 'To begin your thought-leadership journey, you\'ll need to take a selfie looking vaguely exhausted but determined in an empty WeWork at 3 AM. Bonus points if there is an empty Red Bull can strategically placed in the background.',
                    p2h1: 'The Art of the Humble-Brag',
                    p2p3: '"Some people ask me how I manage to run three startups, angel invest, and train for an Ironman," you will write, completely ignoring the fact that your flagship product crashes on signup. The key is to emphasize that you take cold showers and read Meditations by Marcus Aurelius.',
                    p2p4: 'Remember: If it doesn\'t make your college friends mute you on social media, you aren\'t grinding hard enough.',

                    p3p1: 'No process is too simple that it can\'t be violently over-engineered by a middle manager who just read a book on the flight back from a conference. Take lunch, for example.',
                    p3p2: 'Instead of asking the team what they want to eat, we implement a robust, cross-functional Jira board. Every topping is a ticket. Every slice is an epic. We estimate pizza velocity in story points.',
                    p3h1: 'The Minimum Viable Pepperoni',
                    p3p3: 'By utilizing a two-week sprint methodology, we ensure that by the time the pizza arrives, it is not only cold, but perfectly aligned with our Q3 OKRs. The retrospective meeting on why the crust was burnt will take three hours.',
                    p3p4: 'Ultimately, the goal isn\'t to eat pizza. The goal is to document the ideation phase of the pizza consumption journey.',

                    p4p1: 'Is your single codebase too easy to maintain? Does a junior developer actually understand how data flows through your app? That is a massive red flag. You need microservices, and you need them yesterday.',
                    p4p2: 'By breaking your application into 50 identical micro-containers, you ensure that simple debugging requires an advanced degree in networking topology and blind luck.',
                    p4h1: 'Distributed Failure Dynamics',
                    p4p3: 'The true beauty of microservices is that when one fails, the error message gives you absolutely no context about which of the other 49 services actually caused it. This creates job security for dev-ops.',
                    p4p4: 'Your goal is a service mesh so complex that even AWS support hangs up on you.',

                    p5p1: 'If a potential customer lands on your website and immediately understands what your company actually builds, your marketing team has catastrophically failed.',
                    p5p2: 'We recommend replacing all concrete nouns with abstract concepts. Never say "We sell project management software." Say: "We architect next-generation synergy paradigms that empower asynchronous workflows."',
                    p5h1: 'The Power of Nothingness',
                    p5p3: 'The less the user understands, the more they will assume you are doing something incredibly advanced and expensive. Vague verbs like "activate," "elevate," and "catalyze" are the duct tape of enterprise sales.',
                    p5p4: 'If you can make the CEO read your hero text and say "Wow, I have no idea what this is but we need it," you\'ve won the market.',

                    p6p1: 'Layoffs are traditionally sad, tense events. But in the spirit of Web3 and the creator economy, why not make them engaging? We introduced gamification to our Q3 restructuring.',
                    p6p2: 'Employees were given a digital "health bar" tied to their commit history and slack response times. The bottom 10% entered the "Gulag Phase," where they had to present a slide deck on why they deserved to stay.',
                    p6h1: 'Leaderboard Driven HR',
                    p6p3: 'By displaying a live, scrolling leaderboard of employee "Survival Scores" on the office TVs, we increased productivity by 600% out of sheer, primal terror.',
                    p6p4: 'In the end, it\'s not just about cutting costs; it\'s about creating a memorable employee exit-journey.',

                    p7p1: 'The traditional "Customer Success" model is broken. When a user reports a bug, conventional wisdom suggests you should reply quickly and resolve the issue. We have discovered that this only makes them needy and entitled.',
                    p7p2: 'Instead, we implemented "Strategic Ghosting." When a high-tier enterprise client submits a critical outage ticket, our support automation instantly archives it and marks the sender\'s domain as "low priority."',
                    p7h1: 'The Psychology of Unavailability',
                    p7p3: 'Think about dating: the person who replies immediately is desperate. The person who calls you back three weeks later is high-value. By completely ignoring our users, they begin to assume our software is simply too advanced for them to comprehend.',
                    p7p4: 'When we finally do respond 45 days later with a generic link to our FAQ page, their gratitude is immeasurable.',

                    p8p1: 'You spent 18 months and $4 million building a decentralized marketplace for artisanal crypto-walnuts. The launch came. Nobody downloaded it. Now what?',
                    p8p2: 'You pivot. But you don\'t pivot the product—you just pivot the landing page. The codebase stays exactly the same, but the marketing transforms it into an "Enterprise B2B AI Supply-Chain Logistics Engine."',
                    p8h1: 'The Art of the Hard Pivot',
                    p8p3: 'It doesn\'t matter that the backend is literally just a smart contract written by a teenager. You are now an AI company. Add a dark-mode theme, put "Predictive Models" in the nav bar, and raise the price by 5000%.',
                    p8p4: 'Startups don\'t fail because the product is bad. They fail because they didn\'t lie confidently enough on their Series A deck.',

                    p9p1: 'Everyone has a website these days. It\'s exhausting. Do you know what happens when a potential client searches for your company and actually finds a well-designed landing page? They might contact you. They might even try to buy your services. Who needs that kind of pressure?',
                    p9p2: 'By refusing to have a website, you achieve the ultimate act of corporate philanthropy. When a warm lead frantically Googles your name, finds absolutely nothing, and immediately gives up in frustration, where do they go? Straight to your competitors. You are literally keeping the local economy afloat.',
                    p9h1: 'Becoming the Industry\'s Favorite Loser',
                    p9p3: 'Think of the goodwill you\'ll generate! Your rival agencies will host annual galas in your honor. "To our greatest asset," they\'ll toast, "the company that refuses to buy a $10 domain name." It\'s a brilliant strategy for building fierce B2B loyalty—just not from your own clients.',
                    p9p4: 'In conclusion, a website is just a desperate plea for attention. Maintain your dignity, delete your server, and enjoy the profound peace of an empty inbox while your competitors struggle with the horrific burden of increasing revenue.'
                }
            },
            work: {
                arcSub: "From a pet shop to a tattoo studio, a pizza place to an electrical contractor: sites we built for very different businesses. All of them are live, so open any one and take a look.",
                arcAccent: "websites that work",
                arcTitle: "Real businesses, websites that work.",
                reelPlay: "Play showreel",
                reelPause: "Pause showreel",
                reelLabel: "Showreel",
                count_other: "{{count}} projects",
                count_one: "{{count}} project",
                accent: "work",
                headline: "Some of our work",
                allLink: "All work",
                pageTitle: "Our work",
                pageSubtitle: "Every project started by getting to know the business and its customers. Click a project to open the live site.",
                visit: "Visit site",
                demo: "Demo",
                items: {
                    petshop6: {
                        type: "Pet shop",
                        place: "Bahçelievler, Ankara",
                        desc: "Online shop for cat and dog food. Customers fill a basket and confirm the order on WhatsApp; delivery inside Ankara is free.",
                        tags: "Online store · WhatsApp orders · Turkish and English"
                    },
                    blackinkart: {
                        type: "Tattoo and piercing studio",
                        place: "Çankaya, Ankara",
                        desc: "Studio website with portfolio, artists, hygiene information, online booking and a 3D tattoo preview.",
                        tags: "Website · Booking · 3D preview"
                    },
                    piercingland: {
                        type: "Piercing store",
                        place: "Bahçelievler, Ankara",
                        desc: "Online store that ships across Türkiye, with categories, ready-made sets, material guides and a page to try piercings on.",
                        tags: "Online store · Try-on · Turkish and English"
                    },
                    balkabagi: {
                        type: "Cold-pressed juice shop",
                        place: "Bahçelievler, Ankara",
                        desc: "A bright, simple site with the menu, the shop’s story, directions and a call button.",
                        tags: "Website · Menu · Directions"
                    },
                    bagizza: {
                        type: "Baguette pizza restaurant",
                        place: "Türkiye",
                        desc: "Brand site with the menu, campaigns, branches and franchise pages, plus an order button.",
                        tags: "Website · Menu · Franchise"
                    },
                    zet: {
                        type: "Electrical contractor",
                        place: "Lüleburgaz",
                        desc: "Company site for an industrial electrical contractor: services, references, projects and a quote request.",
                        tags: "Company website · Quote form"
                    },
                    nukleon: {
                        type: "Lab equipment manufacturer",
                        place: "İvedik OSB, Ankara",
                        desc: "Product catalogue with 360° 3D product views, filters and comparison. Built as a demo; ordering is switched off.",
                        tags: "Catalogue · 3D product view"
                    }
                }
            },
            marquee: {
                label: "Businesses we've built for",
            },
            manifesto: {
                badge: "Why us?",
                text: "When someone looks you up, the first thing they usually see is your site on their phone. If the menu won't open or they can't find your number, they move on to the next one. We get those first few seconds right: a site that loads fast, says plainly what you do, and lets people call you with one tap.",
            },
            cards: {
                menu: "Menu · Prices · Contact",
                search: "bakery near me",
                pin: "Your shop",
                order: "New order",
                paid: "Paid",
            },
            tech: {
                index: "Project index",
                reach: "Online, everywhere your customers are",
                next: "Next project",
                preparing: "Preparing system",
                online: "System online",
                local: "Time",
                c1Label: "Web design",
                c1Text: "A website that loads fast and",
                c1Accent: "earns trust.",
                c2Label: "Online store",
                c2Text: "A store that keeps taking orders",
                c2Accent: "while you sleep.",
                c3Label: "Google & Maps",
                c3Text: "When people nearby search,",
                c3Accent: "they find you first.",
                c4Label: "Ads",
                c4Text: "Ads that account for",
                c4Accent: "every lira spent.",
                projects_one: "{{count}} live project",
                projects_other: "{{count}} live projects",
                studio: "Web · E-commerce · Search",
                latest: "Latest project",
                scroll: "Scroll",
            },
            hero: {
                after: "for your business.",
                words: "Websites|Online stores|Google visibility|Ads that sell",
                before: "",
                photoCaption: "Built for the shops on your street.",
                accent: "online stores",
                eyebrow: "Web studio in Ankara",
                recentLabel: "Recent work:",
                headline: "Websites and online stores for your business.",
                subheadline: "We build websites and online stores made for your business and help you get found on Google. Once your site is live, we're still a message away.",
                primaryCta: "Get a Free Quote",
                secondaryCta: "See Our Work"
            },
            problem: {
                headline1: "Most shops already have a website. ",
                headlineHighlight: "It just doesn't do much.",
                title1: "Hard to find",
                desc1: "People search \"near me\" and your shop isn't on Google or Maps, or the details are out of date.",
                title2: "Hard to use on a phone",
                desc2: "Most visitors are on their phones. If the menu, prices or phone number are hard to find, they leave.",
                title3: "No way to order or book",
                desc3: "Customers want to order, book or message you from the site. If they can't, they call someone else.",
                inlineCta: "Let's look at yours"
            },
            servicesMenu: {
                accent: "from one team",
                headline: "Everything you need online, from one team.",
                allLink: "All services",
                s1: "Websites",
                d1: "A site that opens flawlessly on any phone and shows, at a glance, what you offer, where you are and how to reach you.",
                s2: "Google & Maps",
                d2: "We set up your Google Business profile and your site together, so customers searching nearby actually find you.",
                s3: "Ad Management",
                d3: "We run your Google, Instagram and Facebook ads within your budget and show you what they bring in, in plain reports.",
                s4: "Logo & Brand Identity",
                d4: "An identity that keeps you looking consistent everywhere, from your shop sign and menu to social media and business cards.",
                s5: "Online Stores",
                d5: "Card payments, stock tracking and delivery options, all set up, so you can focus on the orders.",
                s6: "Automation",
                d6: "Online booking, WhatsApp order forms, automatic invoices… Small tools that take the repetitive work off your week.",
                learnMore: "See details"
            },
            glitch: {
                title: 'We Build Good Websites for You',
                desc: 'We are a synergy-driven agency leveraging blockchain SEO to maximize your ROI paradigm.',
                btn1: 'Get Started Today',
                btn2: 'Learn More',
                disclaimer: 'What you are about to see is purely for marketing purposes. No access is granted to your device and no harm is done.',
                okBtn: 'OK',
                terminal: {
                    line1: '> INITIATING SECURITY OVERRIDE...',
                    line2: '> GENERIC_TEMPLATE_DETECTED.',
                    line3: '> STATUS: UNACCEPTABLE.',
                    line4: '> INITIATING_WEBCOM_SYSTEM_PURGE...',
                }
            },
            difference: {
                title: "That was the joke.",
                desc: "Plenty of sites still look like that first screen. Ours don't. Have a look around.",
                btn: "Show me the site",
                ps: "(P.S. No, we didn't hack your computer.)"
            },
            servicesPage: {
                title: "Our services",
                subtitle: "Everything you need to build a strong presence online, from one team. Each job is priced on its scope; tell us what you need and we'll prepare a quote for you.",
                btn: "Get a Quote",
                s1: {
                    title: "Websites",
                    desc: "A site that opens flawlessly on any phone and shows, at a glance, what you offer, where you are and how to reach you.",
                    f1: "Mobile-friendly design",
                    f2: "Turkish and English versions",
                    f3: "Call, map and WhatsApp buttons",
                    btn: "Details",
                    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                },
                s2: {
                    title: "Google & Maps",
                    desc: "We set up your Google Business profile and your site together, so customers searching nearby actually find you.",
                    f1: "Google Business profile",
                    f2: "Local keywords",
                    f3: "Site speed and technical fixes",
                    btn: "Details",
                    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
                },
                s3: {
                    title: "Ad Management",
                    desc: "We run your Google, Instagram and Facebook ads within your budget and show you what they bring in, in plain reports.",
                    f1: "Google Ads",
                    f2: "Instagram and Facebook ads",
                    f3: "Monthly results report",
                    btn: "Details",
                    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                },
                s4: {
                    title: "Logo & Brand Identity",
                    desc: "An identity that keeps you looking consistent everywhere, from your shop sign and menu to social media and business cards.",
                    f1: "Logo design",
                    f2: "Colours and fonts",
                    f3: "Sign, menu and social media templates",
                    btn: "Details",
                    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                },
                s5: {
                    title: "Online Stores",
                    desc: "Card payments, stock tracking and delivery options, all set up, so you can focus on the orders.",
                    f1: "Product catalogue",
                    f2: "Card payments",
                    f3: "Stock and order tracking",
                    btn: "Details",
                    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
                },
                s6: {
                    title: "Automation",
                    desc: "Online booking, WhatsApp order forms, automatic invoices… Small tools that take the repetitive work off your week.",
                    f1: "Online booking",
                    f2: "WhatsApp and form orders",
                    f3: "Simple admin panel",
                    btn: "Details",
                    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
                }
            },
            process: {
                more: "See the full process",
                s1: "Getting to know you",
                d1: "We listen to your business, pin down what you need and give you a clear, written quote.",
                s2: "Design and build",
                d2: "We design your site from scratch around your business and share drafts with you at every stage.",
                s3: "Launch",
                d3: "We test it carefully on phones and computers, put it live and connect it to Google.",
                s4: "Support",
                d4: "After launch, we're one message away for updates, fixes and questions.",
                headline: "How does a project work?"
            },
            trust: {
                q1: "They didn't just build a website; they built a revenue engine. Our lead volume tripled in 3 months.",
                q2: "Strategic, fast, and highly technical. The new platform is lightyears ahead of our old setup.",
                headline: 'Trusted by Forward-Thinking Growth Brands',
            },
            cta: {
                accent: "what we can do",
                headline: "Let's see what we can do for your business.",
                desc: "Tell us about your business in a few lines. We'll write back with what we'd do and what it costs. If it's not for you, that's fine too.",
                primaryBtn: "Get a Free Quote",
                secondaryBtn: "Write to Us"
            },
            xray: {
                titlePart1: "A nice shop front is half the job.",
                titleHighlight: "The other half is underneath",
                subtitle: "Drag the slider. On the left is what your customers see; on the right is the code that takes their order and payment.",
                labelCore: "What runs underneath",
                labelSurface: "What customers see",
                node1: "Database",
                node2: "Cache",
                uiTitle: "Headphones",
                uiPrice: "$299.00",
                uiBtn: "Add to Cart",
                uiReviews: "★★★★★ (124 reviews)"
            },
            footer: {
                bigAccent: "yours",
                big: "Let's make yours next.",
                tag: "Websites, online stores, Google and ad services for businesses.",
                links: "Pages",
                legal: "Legal",
                privacy: "Privacy Policy",
                terms: "Terms of Service",
                rights: "All rights reserved."
            },
            about: {
                titlePart1: "A web studio that ",
                titleHighlight: "understands your business.",
                desc: "We work on websites, online stores and Google visibility, and we start every project by getting to know the business itself.",
                positioningTitle: "What we believe",
                positioningDesc: "A good website doesn't have to be complicated. It should load fast, look flawless on a phone, show up on Google and make it easy to call, order or book. That's exactly what we build, and we keep it simple for you to run.",
                btn: "Get in Touch",
                storyTitle: "How we started",
                storyDesc1: "Again and again, we saw businesses paying for websites that looked good but never brought in a single customer: they couldn't be found on Google, couldn't be called from a phone, couldn't take an order.",
                storyDesc2: "That's why we set up WebCom: to handle the site, the Google side, the ads and the support afterwards from one place, talking directly with the person who runs the business.",
                valuesTitle: "How we work",
                value1Title: "Clear communication",
                value1Desc: "We talk in your language, not in technical terms. You always know what we're doing and why.",
                value2Title: "Transparent pricing",
                value2Desc: "Every job is priced in writing before it starts. No surprise invoices.",
                value3Title: "Lasting support",
                value3Desc: "After your site goes live, we're still here for changes, fixes and questions."
            },
            contact: {
                title: "Let's talk about your project.",
                desc: "A new site, an online store, or help with Google and ads… Tell us briefly what you need and we'll get back to you within one working day.",
                formTitle: "Write to us",
                fields: {
                    fname: "First name",
                    lname: "Last name",
                    email: "Email",
                    company: "Business name",
                    project: "Tell us about your project",
                    projectPlaceholder: "For example: we'd like a site with our menu where customers can order on WhatsApp."
                },
                btn: "Send Message",
                sending: "Sending...",
                sent: "Your message has reached us. We'll get back to you shortly.",
                error: "Your message couldn't be sent. Please try again or email us directly.",
                infoTitle: "Contact details",
                emailTitle: "Email",
                officeTitle: "Location",
                officeDesc: "Ankara, Türkiye",
                callTitle: "Free first call",
                callDesc: "Let's set up a 30-minute call at a time that suits you.",
                callBtn: "Book a Call"
            },
            common: {
                back: "Back",
                backHome: "Back to Home",
            },
            strategy: {
                title: "Get a free quote",
                subtitle: "Tell us a little about your business. We'll call you, look at where you are together and send you a written quote.",
                successTitle: "Thank you, we've received your request.",
                successDesc: "Within one working day we'll call or email you to set up a time to talk.",
                noRisk: "Free and no obligation.",
                titlePart1: "A free 30-minute call ",
                titleHighlight: "about your business.",
                desc: "We review your current site and Google visibility, explain what we'd change and why, and send you a written quote.",
                b1: "A short review of your current site",
                b2: "How you show up on Google and Maps",
                b3: "A written quote for the work",
                formTitle: "Book your call",
                fields: {
                    fname: "First name",
                    lname: "Last name",
                    email: "Email",
                    company: "Business name",
                    goals: "How can we help?",
                    goalsPlaceholder: "Tell us briefly about your business and what you'd like to change…"
                },
                btn: "Request a Quote",
                sending: "Sending...",
                error: "The form didn't go through. Please try again.",
                privacy: "We only use your details to contact you about this request.",
                fields_placeholder: {
                    fname: "John",
                    lname: "Doe",
                    email: "john@yourshop.com",
                    company: "Your Shop",
                    project: "Tell us about your business and what you'd like to change..."
                }
            }
        }
    },
    tr: {
        translation: {
            nav: {
                home: "Ana Sayfa",
                work: "İşlerimiz",
                services: "Hizmetler",
                process: "Nasıl Çalışıyoruz",
                blog: "Blog",
                about: "Hakkımızda",
                contact: "İletişim",
                bookCall: "Teklif Alın"
            },
            meta: {
                workTitle: "İşlerimiz | WebCom, Ankara",
                workDesc: "Çoğu Ankara’da olmak üzere dükkanlar ve işletmeler için yaptığımız web siteleri ve online mağazalar.",
                homeTitle: "WebCom | İşletmeler İçin Web Sitesi, Online Mağaza ve Google Görünürlüğü",
                homeDesc: "WebCom, işletmeler için web sitesi ve online mağaza tasarlar, Google'da bulunmalarını sağlar ve reklamlarını yönetir. Yayından sonra da yanınızdayız.",
                aboutTitle: "Hakkımızda | WebCom",
                aboutDesc: "İşletmeyi tanıyarak başlayan, sade ve sonuç odaklı web projeleri hazırlayan bir stüdyo.",
                servicesTitle: "Hizmetlerimiz | WebCom",
                servicesDesc: "Web sitesi, online mağaza, Google ve Haritalar görünürlüğü, reklam yönetimi, kurumsal kimlik ve otomasyon.",
                processTitle: "Nasıl Çalışıyoruz | WebCom",
                processDesc: "Tanışmadan yayına ve sonrasına: WebCom ile bir projenin dört net adımı.",
                blogTitle: "WebCom Blog | Satirik Teknoloji İçgörüleri",
                blogDesc: "Özgüveni yetkinlikle karıştıran kurucular için kanaat önderliği içerikleri.",
                contactTitle: "İletişim | WebCom",
                contactDesc: "Projenizi kısaca anlatın, bir iş günü içinde size net bir teklifle dönelim.",
                strategyTitle: "Ücretsiz Teklif Alın | WebCom",
                strategyDesc: "Siteniz, Google görünürlüğünüz ya da online mağazanız için ücretsiz ve taahhütsüz bir ön görüşme."
            },
            processPage: {
                titlePart1: "Nasıl ",
                titleHighlight: "çalışıyoruz.",
                subtitle: "Dört net adım, sürprizsiz bir süreç. Her aşamada neyin yapıldığını ve maliyetini bilirsiniz.",
                step1Num: "Adım 01",
                step1Title: "Tanışma ve keşif",
                step1Desc: "İşletmenizi yerinde ziyaret ediyor ya da telefonda görüşüyoruz. Mevcut durumunuzu, müşterilerinizi ve sitenizden beklentinizi dinledikten sonra size yazılı bir teklif sunuyoruz.",
                step2Num: "Adım 02",
                step2Title: "Tasarım ve geliştirme",
                step2Desc: "Sitenizi hazır bir şablondan değil, işinize özel olarak sıfırdan tasarlıyoruz. Taslakları birlikte inceliyor, istediğiniz değişiklikleri birlikte yapıyoruz.",
                step3Num: "Adım 03",
                step3Title: "Test",
                step3Desc: "Her sayfayı telefonda, tablette ve bilgisayarda tek tek kontrol ediyor; formları ve ödemeleri deniyor, sitenin hızlı açıldığından emin oluyoruz.",
                step4Num: "Adım 04",
                step4Title: "Yayın ve destek",
                step4Desc: "Sitenizi yayına alıyor ve Google kaydınızı tamamlıyoruz. Sonrasında güncellemeler, düzeltmeler ve yeni sayfalar için yanınızdayız."
            },
            blogPage: {
                titlePart1: 'Kurumsal ',
                titleHighlight: 'Buzdolabı Sözcükleri.',
                subtitle: 'Sinerji, paradigma ve pivot kelimelerini aynı cümlede kullanarak kendini zeki sanan kurucular için inovatif zırvalar.',
                readMore: 'Makaleyi Oku',
                posts: {
                    p1Cat: 'Strateji',
                    p1Title: 'Tek Satır Kod Yazmadan Nasıl "Yapay Zeka" Şirketi Olunur?',
                    p1Desc: 'Basit bir CRUD uygulamanızın alan adına ".ai" ekleyip nasıl 10 milyon dolar yatırım alabileceğinize dair adım adım rehber.',
                    p2Cat: 'İçgörüler',
                    p2Title: 'Haftada 100 Saat Çalışmak: Tükenmişlik Sendromuyla LinkedIn Şovu',
                    p2Desc: 'Uyumak zayıflar içindir. Kişisel hayatınızı mahvettiğinizle övünmek girişiminizin değerlemesini nasıl artırır?',
                    p3Cat: 'Mühendislik',
                    p3Title: 'Pizza Siparişi İçin Çevik (Agile) Sprintler',
                    p3Desc: 'Geliştirici ekibinizin sosisli ve margarita arasında karar vermek için neden 3 haftalık bir tasarım sprintine ihtiyacı var?',
                    p4Cat: 'Mimari',
                    p4Title: 'Mikroservis Tuzağı: Bir Monoliti 50 Çöp Parçasına Bölmek',
                    p4Desc: 'Kolayca düzeltilebilir tek bir hatayı 8 saat dilimine yayılan dağıtılmış bir ağ arızasına dönüştürmenin neşesini keşfedin.',
                    p5Cat: 'Pazarlama',
                    p5Title: 'Açılış Sayfanızın Neden Daha Fazla Soyut Fiile İhtiyacı Var?',
                    p5Desc: '"Güçlendirin", "Sinerji yaratın", "Serbest bırakın." Hiçbir şey söylemeyerek piyasa değerinizi nasıl %400 artırırsınız.',
                    p6Cat: 'Kültür',
                    p6Title: 'Çalışan İşten Çıkarma Sürecini Oyunlaştırmak',
                    p6Desc: 'İnsan Kaynaklarına vizyoner bir yaklaşım: 3. çeyrekteki iş gücü azaltımlarımızı belirlemek için Battle-Royale tarzı bir liderlik tablosunu nasıl kullandık?',
                    p7Cat: 'Elde Tutma',
                    p7Title: 'Bir Müşteri Başarısı Stratejisi Olarak Görmezden Gelmek (Ghosting)',
                    p7Desc: 'Kullanıcı şikayetlerini tamamen görmezden gelmenin yazılımınıza nasıl daha fazla saygı duymalarını sağladığını öğrenin.',
                    p8Cat: 'Girişim',
                    p8Title: 'Pivot: Kimsenin Ürününüzü İstemediğini Fark Ettiğiniz O An',
                    p8Desc: 'Başarısız B2C kripto-ceviz teslimat uygulamanızı, B2B Yapay Zeka kurumsal çözümüne zarif bir şekilde nasıl dönüştürürsünüz?',
                    p9Cat: 'Markalaşma',
                    p9Title: 'Neden Bir Web Siteniz Olmamalı?',
                    p9Desc: 'Dijital ayak izinizi tamamen silerek rakiplerinizin nihayet hak ettikleri müşterilere kavuşmasını sağlamanın asil sanatı.'
                },
                articles: {
                    p1p1: 'Modern yazılım geliştirme bize bir şey öğrettiyse o da şudur: Gerçekten inovasyon yapmak çok zordur, ancak yeni bir alan adı satın almak inanılmaz derecede kolaydır. Pazarlama metninize "Yapay Zeka Destekli" yazmak varken neden karmaşık bir sinir ağı kurasınız ki?',
                    p1p2: 'Düşünün. Yatırımcılar aslında kaynak kodunu okumazlar. Açılış sayfanızda karanlık mod ve parlayan mor bir küre animasyonu varsa, bilimsel olarak bir yapay zeka şirketisiniz demektir.',
                    p1h1: '"If/Else" Öğrenme Algoritması',
                    p1p3: 'Kendi özel araştırmamız gösteriyor ki, iç içe geçmiş 50 "if/else" döngüsü yazmak, nasıl çalıştığını açıklamayı reddettiğiniz sürece "makine öğrenimi" sayılır. Biri size detay sorarsa, "LLM bağlam pencereleri" hakkında bir şeyler geveleyip yavaşça odadan çıkın.',
                    p1p4: 'Sonuç olarak, gerçek yazılım yazmayı bırakın ve özel algoritmik sinerjiniz hakkında basın bültenleri yazmaya başlayın. Yatırımcılar aradaki farkı kelimenin tam anlamıyla anlayamıyor.',

                    p2p1: 'Hiç 8 saat uyuyup, "hustle culture"a ihanet ettiğiniz için ezici bir suçluluk duygusu hissettiniz mi? Uyku yoksunluğunun bir onur nişanı olduğu ve terapinin sadece optimize edilmemiş bir zaman bloğu sayıldığı modern girişimciliğe hoş geldiniz.',
                    p2p2: 'Kanaat önderliği yolculuğunuza başlamak için gece saat 3\'te boş bir ofiste biraz yorgun ama kararlı görünen bir selfie çekmeniz gerekecek. Arka plana stratejik olarak yerleştirilmiş boş bir enerji içeceği kutusu varsa ekstra puan.',
                    p2h1: 'Mütevazı Övünme Sanatı',
                    p2p3: '"İnsanlar bana üç girişimi nasıl yönettiğimi, melek yatırımcılığı nasıl yaptığımı ve Ironman\'e nasıl hazırlandığımı soruyor," diye yazacaksınız, ana ürününüzün daha kayıt ekranında çöktüğü gerçeğini tamamen görmezden gelerek. Buradaki kilit nokta, soğuk duş aldığınızı ve Marcus Aurelius okuduğunuzu vurgulamaktır.',
                    p2p4: 'Unutmayın: Eğer bu paylaşımlarınız üniversite arkadaşlarınızın sizi sosyal medyada sessize almasına neden olmuyorsa, yeterince çok çalışmıyorsunuz demektir.',

                    p3p1: 'Hiçbir süreç, bir konferanstan dönerken uçakta kitap okuyan bir orta kademe yönetici tarafından şiddetli bir şekilde aşırı mühendisliğe maruz kalamayacak kadar basit değildir. Mesela öğle yemeğini ele alalım.',
                    p3p2: 'Ekibe ne yemek istediklerini sormak yerine, sağlam, çapraz fonksiyonel bir Jira panosu uyguluyoruz. Her malzeme bir iş bileti (ticket). Her dilim bir destan (epic). Pizza hızını hikaye puanlarıyla (story points) tahmin ediyoruz.',
                    p3h1: 'Minimum Uygulanabilir Pepperoni',
                    p3p3: 'İki haftalık bir sprint metodolojisi kullanarak, pizzanın geldiğinde sadece soğuk olmasını değil, aynı zamanda 3. çeyrek OKR\'larımızla mükemmel bir şekilde uyumlu olmasını sağlıyoruz. Kenarların neden yandığına dair geriye dönük (retrospective) toplantı tam üç saat sürecek.',
                    p3p4: 'Sonuç olarak, amaç pizza yemek değil. Amaç, pizza tüketim yolculuğunun fikir aşamasını belgelendirmektir.',

                    p4p1: 'Tek parçalı kod tabanınızın bakımı çok mu kolay? Junior bir geliştirici uygulamanızda verinin nasıl aktığını gerçekten anlayabiliyor mu? Bu devasa bir red flag\'dir. Sizin mikroservislere ihtiyacınız var ve bunlara dünden ihtiyacınız var.',
                    p4p2: 'Uygulamanızı 50 tane birbirinin aynısı mikro konteynere bölerek, basit bir hata ayıklamanın bile ağ topolojisi alanında ileri derece bilgi ve kör tesadüf gerektirmesini sağlarsınız.',
                    p4h1: 'Dağıtılmış Hata Dinamikleri',
                    p4p3: 'Mikroservislerin asıl güzelliği, biri çöktüğünde alınan hata mesajının, ona diğer 49 servisten hangisinin sebep olduğu konusunda size kesinlikle hiçbir bağlam sunmamasıdır. Bu, Dev-Ops için iş güvencesi yaratır.',
                    p4p4: 'Amacınız, AWS destek hattının bile telefonu yüzünüze kapatacağı kadar karmaşık bir hizmet ağı örmektir.',

                    p5p1: 'Potansiyel bir müşteri web sitenize girip de şirketinizin aslında ne yaptığını hemen anlarsa, pazarlama ekibiniz felaket bir şekilde başarısız olmuş demektir.',
                    p5p2: 'Tüm somut isimleri soyut kavramlarla değiştirmenizi şiddetle tavsiye ederiz. Asla "Proje yönetimi yazılımı satıyoruz" demeyin. Bunun yerine şunu kullanın: "Asenkron iş akışlarını güçlendiren yeni nesil sinerji paradigmaları tasarlıyoruz."',
                    p5h1: 'Hiçliğin Gücü',
                    p5p3: 'Kullanıcı ne kadar az anlarsa, inanılmaz derecede gelişmiş ve pahalı bir şey yaptığınızı o kadar çok varsayacaktır. "Harekete geçir", "yükselt" ve "katalize et" gibi soyut fiiller, kurumsal B2B satışlarının koli bandıdır.',
                    p5p4: 'Eğer CEO\'nun kahraman metninizi okuyup "Vay canına, bunun ne olduğu hakkında hiçbir fikrim yok ama kesinlikle almalıyız" demesini sağlayabiliyorsanız, piyasayı ele geçirmişsinizdir.',

                    p6p1: 'İşten çıkarmalar geleneksel olarak üzücü ve gergin olaylardır. Ancak Web3\'ün ve yaratıcı ekonominin ruhuna uygun olarak, onları neden ilgi çekici hale getirmeyelim? Üçüncü çeyrekteki yeniden yapılanmamıza oyunlaştırma getirdik.',
                    p6p2: 'Çalışanlara, github commit geçmişleri ve Slack yanıt sürelerine bağlı dijital bir "sağlık çubuğu" verildi. Sağlık durumu en alttaki %10\'luk kesim, neden şirkette kalmayı hak ettiklerine dair bir slayt sunumu yapmak zorunda oldukları "Arena Aşamasına" geçtiler.',
                    p6h1: 'Liderlik Tablosu Odaklı İK',
                    p6p3: 'Ofis televizyonlarında çalışanların "Hayatta Kalma Puanlarını" gösteren canlı, kayan bir liderlik tablosu yayınlayarak, sırf ilkel bir dehşet duygusuyla üretkenliği %600 artırdık.',
                    p6p4: 'Sonuçta, konu sadece maliyetleri düşürmek değildir; çalışanlar için unutulmaz bir çıkış yolculuğu deneyimi yaratmaktır.',

                    p7p1: 'Geleneksel "Müşteri Başarısı" modeli bozuktur. Bir kullanıcı bir hata bildirdiğinde, genel kanı hızla yanıt vermeniz ve sorunu çözmeniz gerektiğini savunur. Ancak biz, bunun onları sadece daha talepkar ve şımarık yaptığını keşfettik.',
                    p7p2: 'Bunun yerine "Stratejik Görmezden Gelme (Ghosting)" yöntemini uyguladık. Üst düzey kurumsal bir müşteri kritik bir kesinti bileti gönderdiğinde, destek otomasyonumuz bunu anında arşive kaldırır ve gönderenin etki alanını "Düşük Öncelikli" olarak işaretler.',
                    p7h1: 'Ulaşılamazlığın Psikolojisi',
                    p7p3: 'Bunu flört etmek gibi düşünün: Size anında cevap veren kişi çaresizdir. Sizi üç hafta sonra geri arayan kişi ise yüksek değerli ve meşguldür. Kullanıcılarımızı tamamen görmezden gelerek, yazılımımızın onların kavrayamayacağı kadar gelişmiş olduğunu varsaymalarını sağlıyoruz.',
                    p7p4: 'Nihayet 45 gün sonra SSS (Sıkça Sorulan Sorular) sayfamıza yönlendiren jenerik bir bağlantıyla cevap verdiğimizde ise, minnettarlıklarının bir sınırı olmuyor.',

                    p8p1: 'El yapımı kripto-cevizler (crypto-walnut) için merkezi olmayan bir pazar yeri oluşturmak amacıyla 18 ay ve 4 milyon dolar harcadınız. Lansman günü geldi. Kimse uygulamayı indirmedi. Şimdi ne olacak?',
                    p8p2: 'Pivot yaparsınız. Ancak ürünü pivotlamazsınız—sadece açılış sayfasını pivotlarsınız. Kod tabanı tamamen aynı kalır, ancak pazarlama onu bir "Kurumsal B2B Yapay Zeka Tedarik Zinciri Lojistik Motoru"na dönüştürür.',
                    p8h1: 'Sert Pivot Sanatı',
                    p8p3: 'Arka ucun tam anlamıyla bir ergen tarafından yazılmış bir akıllı sözleşme olması hiç önemli değil. Siz artık bir yapay zeka şirketisiniz. Karanlık bir tema ekleyin, gezinme çubuğuna "Tahmine Dayalı Modeller" koyun ve fiyatı %5000 artırın.',
                    p8p4: 'Girişimler ürün kötü olduğu için başarısız olmazlar. Seri A yatırım sunumlarında yeterince özgüvenli yalan söyleyemedikleri için başarısız olurlar.',

                    p9p1: 'Bugünlerde herkesin bir web sitesi var. Gerçekten çok yorucu. Potansiyel bir müşteri şirketinizi arayıp düzgün tasarlanmış bir açılış sayfası bulduğunda ne olur biliyor musunuz? Sizinle iletişime geçebilirler. Hatta hizmetlerinizi satın almaya bile çalışabilirler. Bu kadar baskıya kimin ihtiyacı var ki?',
                    p9p2: 'Bir web sitesine sahip olmayı reddederek, kurumsal hayırseverliğin zirvesine ulaşırsınız. Sıcak bir müşteri adayı isminizi çılgınca Google\'da aratıp hiçbir şey bulamadığında ve anında hüsranla vazgeçtiğinde nereye gider? Doğruca rakiplerinize. Kelimenin tam anlamıyla yerel ekonomiyi tek başınıza ayakta tutuyorsunuz.',
                    p9h1: 'Sektörün En Sevilen Kaybedeni Olmak',
                    p9p3: 'Yaratacağınız iyi niyeti bir düşünün! Rakip ajanslar sizin onurunuza yıllık galalar düzenleyecekler. "En büyük değerimize," diye kadeh kaldıracaklar, "10 dolarlık bir alan adı almayı reddeden o yüce şirkete." Bu, B2B sadakati oluşturmak için harika bir stratejidir—sadece kendi müşterilerinizden değil, rakiplerinizden.',
                    p9p4: 'Sonuç olarak, bir web sitesi sadece çaresiz bir ilgi arayışıdır. Haysiyetinizi koruyun, sunucunuzun fişini çekin ve rakipleriniz artan gelirin korkunç yüküyle boğuşurken siz boş bir gelen kutusunun derin huzurunun tadını çıkarın.'
                }
            },
            work: {
                arcSub: "Pet shop'tan dövme stüdyosuna, pizzacıdan elektrik firmasına kadar farklı işletmeler için hazırladığımız siteler. Hepsi yayında; dilediğinizi açıp inceleyebilirsiniz.",
                arcAccent: "çalışan siteler",
                arcTitle: "Gerçek işletmeler, çalışan siteler.",
                reelPlay: "Showreel'i oynat",
                reelPause: "Showreel'i durdur",
                reelLabel: "Showreel",
                count_other: "{{count}} proje",
                count_one: "{{count}} proje",
                accent: "işlerden",
                headline: "Yaptığımız işlerden bazıları",
                allLink: "Tüm çalışmalar",
                pageTitle: "Çalışmalarımız",
                pageSubtitle: "Her proje, işletmeyi ve müşterisini tanıyarak başladı. Bir projeye tıklayarak canlı siteyi inceleyebilirsiniz.",
                visit: "Siteyi aç",
                demo: "Demo",
                items: {
                    petshop6: {
                        type: "Pet shop",
                        place: "Bahçelievler, Ankara",
                        desc: "Kedi ve köpek maması için online mağaza. Müşteri sepeti doldurup siparişi WhatsApp’tan onaylıyor; Ankara içi teslimat ücretsiz.",
                        tags: "Online mağaza · WhatsApp sipariş · Türkçe ve İngilizce"
                    },
                    blackinkart: {
                        type: "Dövme ve piercing stüdyosu",
                        place: "Çankaya, Ankara",
                        desc: "Portfolyo, sanatçılar, hijyen bilgisi, online randevu ve 3D dövme önizlemesi olan stüdyo sitesi.",
                        tags: "Web sitesi · Randevu · 3D önizleme"
                    },
                    piercingland: {
                        type: "Piercing mağazası",
                        place: "Bahçelievler, Ankara",
                        desc: "Türkiye geneline gönderim yapan online mağaza; kategoriler, hazır setler, materyal rehberleri ve piercing deneme sayfası.",
                        tags: "Online mağaza · Deneme sayfası · Türkçe ve İngilizce"
                    },
                    balkabagi: {
                        type: "Soğuk sıkım meyve suyu dükkanı",
                        place: "Bahçelievler, Ankara",
                        desc: "Menü, dükkanın hikâyesi, yol tarifi ve arama butonu olan sade, renkli bir site.",
                        tags: "Web sitesi · Menü · Yol tarifi"
                    },
                    bagizza: {
                        type: "Baget pizza restoranı",
                        place: "Türkiye",
                        desc: "Menü, kampanyalar, şubeler ve franchise sayfaları ile sipariş butonu olan marka sitesi.",
                        tags: "Web sitesi · Menü · Franchise"
                    },
                    zet: {
                        type: "Elektrik taahhüt firması",
                        place: "Lüleburgaz",
                        desc: "Endüstriyel elektrik taahhüt firması için kurumsal site: hizmetler, referanslar, projeler ve teklif formu.",
                        tags: "Kurumsal site · Teklif formu"
                    },
                    nukleon: {
                        type: "Laboratuvar cihazı üreticisi",
                        place: "İvedik OSB, Ankara",
                        desc: "360° 3D ürün inceleme, filtre ve karşılaştırma özellikli ürün kataloğu. Demo olarak hazırlandı; sipariş kapalı.",
                        tags: "Katalog · 3D ürün inceleme"
                    }
                }
            },
            marquee: {
                label: "Birlikte çalıştığımız işletmeler",
            },
            manifesto: {
                badge: "Neden biz?",
                text: "Biri sizi aradığında çoğu zaman ilk gördüğü şey telefonundaki sitenizdir. Menü açılmıyorsa, telefon numaranızı bulamıyorsa bir sonrakine geçer. Biz o ilk birkaç saniyeyi sağlam yapıyoruz: hızlı açılan, ne iş yaptığınızı açıkça anlatan, tek dokunuşla aranabilen bir site.",
            },
            cards: {
                menu: "Menü · Fiyatlar · İletişim",
                search: "yakınımdaki fırın",
                pin: "Dükkanınız",
                order: "Yeni sipariş",
                paid: "Ödendi",
            },
            tech: {
                index: "Proje dizini",
                reach: "Müşterileriniz neredeyse, orada",
                next: "Sıradaki proje",
                preparing: "Sistem hazırlanıyor",
                online: "Sistem çevrimiçi",
                local: "Saat",
                c1Label: "Web sitesi",
                c1Text: "Telefonda hızlı açılan, güven veren",
                c1Accent: "bir web sitesi.",
                c2Label: "Online mağaza",
                c2Text: "Siz uyurken de sipariş alan",
                c2Accent: "bir mağaza.",
                c3Label: "Google ve Haritalar",
                c3Text: "Yakınınızda arayan müşteri",
                c3Accent: "önce sizi görsün.",
                c4Label: "Reklam yönetimi",
                c4Text: "Harcanan her liranın hesabını veren",
                c4Accent: "reklamlar.",
                projects_one: "{{count}} canlı proje",
                projects_other: "{{count}} canlı proje",
                studio: "Web · E-ticaret · Arama",
                latest: "Son proje",
                scroll: "Kaydır",
            },
            hero: {
                after: "",
                words: "web sitesi.|online mağaza.|Google görünürlüğü.|satan reklamlar.",
                before: "İşletmeniz için",
                photoCaption: "Mahallenizdeki dükkanlar için.",
                accent: "web sitesi",
                eyebrow: "Ankara’da bir web stüdyosu",
                recentLabel: "Son işler:",
                headline: "İşletmeniz için web sitesi ve online mağaza.",
                subheadline: "İşletmenize özel web siteleri ve online mağazalar hazırlıyor, Google'da bulunmanıza yardım ediyoruz. Siteniz yayına girdikten sonra da bir mesaj uzağındayız.",
                primaryCta: "Ücretsiz Teklif Alın",
                secondaryCta: "Çalışmalarımızı İnceleyin"
            },
            problem: {
                headline1: "Çoğu dükkanın bir web sitesi var. ",
                headlineHighlight: "Sadece pek bir işe yaramıyor.",
                title1: "Bulunmuyor",
                desc1: "İnsanlar \"yakınımdaki\" diye arıyor; dükkanınız Google'da ya da Haritalar'da yok veya bilgileri eski.",
                title2: "Telefonda zor kullanılıyor",
                desc2: "Ziyaretçilerin çoğu telefondan geliyor. Menü, fiyat ya da telefon numarası zor bulunuyorsa siteyi kapatıyorlar.",
                title3: "Sipariş veya randevu yok",
                desc3: "Müşteri siteden sipariş vermek, randevu almak ya da size yazmak istiyor. Yapamazsa başka birini arıyor.",
                inlineCta: "Sizinkine bakalım"
            },
            servicesMenu: {
                accent: "tek ekipten",
                headline: "İnternette ihtiyacınız olan her şey, tek ekipten.",
                allLink: "Tüm hizmetler",
                s1: "Web Sitesi",
                d1: "Telefonda kusursuz açılan; ne sunduğunuzu, nerede olduğunuzu ve size nasıl ulaşılacağını ilk bakışta anlatan bir site.",
                s2: "Google ve Haritalar",
                d2: "Yakınınızda arama yapan müşterilerin sizi bulması için Google İşletme profilinizi ve sitenizi birlikte düzenliyoruz.",
                s3: "Reklam Yönetimi",
                d3: "Google, Instagram ve Facebook reklamlarınızı bütçenize göre kuruyor, ne kazandırdığını sade raporlarla paylaşıyoruz.",
                s4: "Logo ve Kurumsal Kimlik",
                d4: "Tabeladan menüye, sosyal medyadan kartvizite kadar her yerde aynı özenle görünmenizi sağlayan bir kimlik.",
                s5: "Online Mağaza",
                d5: "Kartla ödeme, stok takibi ve teslimat seçenekleri hazır; siz yalnızca siparişlere odaklanın.",
                s6: "Otomasyon",
                d6: "Online randevu, WhatsApp sipariş formu, otomatik fatura… Her hafta saatlerinizi alan işleri sizin yerinize halleden küçük araçlar.",
                learnMore: "Detayları gör"
            },
            glitch: {
                title: 'Sizin İçin İyi Web Siteleri Yapıyoruz',
                desc: "ROI paradigmanızı maksimize etmek için blockchain SEO'dan yararlanan sinerji odaklı bir ajansız.",
                btn1: 'Bugün Başlayın',
                btn2: 'Daha Fazla Bilgi',
                disclaimer: 'Az sonra görecekleriniz tamamen reklam amaçlıdır, cihazınıza hiçbir erişim sağlanmamakta ve zarar verilmemektedir.',
                okBtn: 'Tamam',
                terminal: {
                    line1: '> GÜVENLİK PROTOKOLLERİ DEVRE DIŞI BIRAKILIYOR...',
                    line2: '> SIRADAN_ŞABLON_TESPİT_EDİLDİ.',
                    line3: '> DURUM: KABUL EDİLEMEZ.',
                    line4: '> WEBCOM_SİSTEM_YÜKLEMESİ_BAŞLATILIYOR...',
                }
            },
            servicesPage: {
                title: "Hizmetlerimiz",
                subtitle: "İnternette güçlü bir yer edinmek için ihtiyacınız olan her şeyi aynı ekipten alırsınız. Her iş kapsamına göre fiyatlandırılır; ihtiyacınızı anlatın, size özel bir teklif hazırlayalım.",
                btn: "Teklif Alın",
                s1: {
                    title: "Web Sitesi",
                    desc: "Telefonda kusursuz açılan; ne sunduğunuzu, nerede olduğunuzu ve size nasıl ulaşılacağını ilk bakışta anlatan bir site.",
                    f1: "Mobil uyumlu tasarım",
                    f2: "Türkçe ve İngilizce sürüm",
                    f3: "Arama, harita ve WhatsApp butonları",
                    btn: "Detaylar",
                    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                },
                s2: {
                    title: "Google ve Haritalar",
                    desc: "Yakınınızda arama yapan müşterilerin sizi bulması için Google İşletme profilinizi ve sitenizi birlikte düzenliyoruz.",
                    f1: "Google İşletme profili",
                    f2: "Yerel anahtar kelimeler",
                    f3: "Site hızı ve teknik düzeltmeler",
                    btn: "Detaylar",
                    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
                },
                s3: {
                    title: "Reklam Yönetimi",
                    desc: "Google, Instagram ve Facebook reklamlarınızı bütçenize göre kuruyor, ne kazandırdığını sade raporlarla paylaşıyoruz.",
                    f1: "Google Ads",
                    f2: "Instagram ve Facebook reklamları",
                    f3: "Aylık sonuç raporu",
                    btn: "Detaylar",
                    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                },
                s4: {
                    title: "Logo ve Kurumsal Kimlik",
                    desc: "Tabeladan menüye, sosyal medyadan kartvizite kadar her yerde aynı özenle görünmenizi sağlayan bir kimlik.",
                    f1: "Logo tasarımı",
                    f2: "Renkler ve yazı tipleri",
                    f3: "Tabela, menü ve sosyal medya şablonları",
                    btn: "Detaylar",
                    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                },
                s5: {
                    title: "Online Mağaza",
                    desc: "Kartla ödeme, stok takibi ve teslimat seçenekleri hazır; siz yalnızca siparişlere odaklanın.",
                    f1: "Ürün kataloğu",
                    f2: "Kartla ödeme",
                    f3: "Stok ve sipariş takibi",
                    btn: "Detaylar",
                    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
                },
                s6: {
                    title: "Otomasyon",
                    desc: "Online randevu, WhatsApp sipariş formu, otomatik fatura… Her hafta saatlerinizi alan işleri sizin yerinize halleden küçük araçlar.",
                    f1: "Online randevu",
                    f2: "WhatsApp ve form ile sipariş",
                    f3: "Basit yönetim paneli",
                    btn: "Detaylar",
                    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
                }
            },
            process: {
                more: "Süreci detaylı inceleyin",
                s1: "Tanışma",
                d1: "İşletmenizi dinliyor, ihtiyacınızı netleştiriyor ve size yazılı, açık bir teklif sunuyoruz.",
                s2: "Tasarım ve geliştirme",
                d2: "Sitenizi işinize özel olarak sıfırdan tasarlıyor, her aşamada taslakları sizinle paylaşıyoruz.",
                s3: "Yayın",
                d3: "Telefonda ve bilgisayarda titizlikle test edip yayına alıyor, Google'a bağlıyoruz.",
                s4: "Destek",
                d4: "Yayından sonra da güncelleme, düzeltme ve sorularınız için bir mesaj uzağınızdayız.",
                headline: "Bir proje nasıl ilerler?"
            },
            trust: {
                q1: "Sadece bir web sitesi yapmadılar; bir gelir motoru kurdular. Lead hacmimiz 3 ayda üç katına çıktı.",
                q2: "Stratejik, hızlı ve son derece teknik. Yeni platform eski sistemimizden ışık yılı ötede.",
                headline: 'İleri Görüşlü Büyüme Markaları Tarafından Güveniliyor',
            },
            cta: {
                accent: "ne yapabileceğimize",
                headline: "İşiniz için ne yapabileceğimize bir bakalım.",
                desc: "Birkaç cümleyle işletmenizi anlatın. Ne yapacağımızı ve ne kadar tutacağını açıkça yazarız. Size uymazsa da sorun değil.",
                primaryBtn: "Ücretsiz Teklif Alın",
                secondaryBtn: "Bize Yazın"
            },
            xray: {
                titlePart1: "Güzel bir vitrin işin yarısı.",
                titleHighlight: "Diğer yarısı altında",
                subtitle: "Kaydırıcıyı sürükleyin. Solda müşterinin gördüğü, sağda siparişi ve ödemeyi alan kod var.",
                labelCore: "Altta çalışan kısım",
                labelSurface: "Müşterinin gördüğü",
                node1: "Veritabanı",
                node2: "Önbellek",
                uiTitle: "Kulaklık",
                uiPrice: "₺2.999,00",
                uiBtn: "Sepete Ekle",
                uiReviews: "★★★★★ (124 değerlendirme)"
            },
            footer: {
                bigAccent: "sizinki",
                big: "Sıradaki site sizinki olsun.",
                tag: "İşletmeler için web sitesi, online mağaza, Google ve reklam hizmetleri.",
                links: "Sayfalar",
                legal: "Yasal",
                privacy: "Gizlilik Politikası",
                terms: "Kullanım Koşulları",
                rights: "Tüm hakları saklıdır."
            },
            difference: {
                title: "Şakaydı.",
                desc: "Hâlâ pek çok site o ilk ekran gibi görünüyor. Bizimkiler öyle değil. Etrafa bir göz atın.",
                btn: "Siteyi göster",
                ps: "(Not: Hayır, bilgisayarınızı hacklemedik.)"
            },
            about: {
                titlePart1: "İşinizi anlayan ",
                titleHighlight: "bir web stüdyosu.",
                desc: "Web sitesi, online mağaza ve Google görünürlüğü üzerine çalışıyoruz. Her projeye, işletmenin kendisini tanıyarak başlıyoruz.",
                positioningTitle: "Neye inanıyoruz",
                positioningDesc: "İyi bir site karmaşık olmak zorunda değil. Hızlı açılmalı, telefonda kusursuz görünmeli, Google'da bulunmalı ve müşterinin aramasını, sipariş vermesini ya da randevu almasını kolaylaştırmalı. Biz tam olarak bunu yapıyor, yönetimini de sizin için basit tutuyoruz.",
                btn: "Bize Ulaşın",
                storyTitle: "Nasıl başladık",
                storyDesc1: "Pek çok işletmenin, güzel görünen ama tek bir müşteri getirmeyen sitelere para ödediğini defalarca gördük: Google'da bulunamıyorlardı, telefondan aranamıyorlardı, sipariş alamıyorlardı.",
                storyDesc2: "WebCom'u bu yüzden kurduk: siteyi, Google tarafını, reklamları ve sonrasındaki desteği tek bir yerden, işin sahibiyle doğrudan konuşarak yapmak için.",
                valuesTitle: "Çalışma ilkelerimiz",
                value1Title: "Açık iletişim",
                value1Desc: "Teknik terimlerle değil, sizin dilinizle konuşuruz. Neyi neden yaptığımızı her zaman bilirsiniz.",
                value2Title: "Şeffaf fiyat",
                value2Desc: "Her iş, başlamadan önce yazılı olarak fiyatlandırılır. Sürpriz fatura olmaz.",
                value3Title: "Kalıcı destek",
                value3Desc: "Siteniz yayına girdikten sonra da değişiklik, düzeltme ve sorularınız için yanınızdayız."
            },
            contact: {
                title: "Projenizi konuşalım.",
                desc: "Yeni bir site, online mağaza ya da Google ve reklam desteği… İhtiyacınızı kısaca yazın, bir iş günü içinde size dönüş yapalım.",
                formTitle: "Bize yazın",
                fields: {
                    fname: "Ad",
                    lname: "Soyad",
                    email: "E-posta",
                    company: "İşletme adı",
                    project: "Projenizden bahsedin",
                    projectPlaceholder: "Örneğin: menümüzün yer aldığı ve WhatsApp'tan sipariş alabildiğimiz bir site istiyoruz."
                },
                btn: "Mesajı Gönder",
                sending: "Gönderiliyor...",
                sent: "Mesajınız bize ulaştı. En kısa sürede size dönüş yapacağız.",
                error: "Mesajınız gönderilemedi. Lütfen tekrar deneyin ya da bize e-posta ile ulaşın.",
                infoTitle: "İletişim bilgileri",
                emailTitle: "E-posta",
                officeTitle: "Konum",
                officeDesc: "Ankara, Türkiye",
                callTitle: "Ücretsiz ön görüşme",
                callDesc: "Size uygun bir saatte 30 dakikalık bir görüşme planlayalım.",
                callBtn: "Görüşme Planla"
            },
            common: {
                back: "Geri",
                backHome: "Ana Sayfaya Dön",
            },
            strategy: {
                title: "Ücretsiz teklif alın",
                subtitle: "İşletmenizden kısaca bahsedin. Sizi arayalım, mevcut durumunuzu birlikte değerlendirelim ve size yazılı bir teklif gönderelim.",
                successTitle: "Teşekkürler, talebiniz bize ulaştı.",
                successDesc: "Bir iş günü içinde sizi arayarak ya da e-posta göndererek uygun bir görüşme saati belirleyeceğiz.",
                noRisk: "Ücretsiz ve taahhütsüz.",
                titlePart1: "İşletmeniz hakkında ",
                titleHighlight: "ücretsiz 30 dakikalık görüşme.",
                desc: "Mevcut sitenizi ve Google görünürlüğünüzü inceliyor, neyi neden değiştirmenizi önerdiğimizi anlatıyor ve size yazılı bir teklif sunuyoruz.",
                b1: "Mevcut sitenizin kısa bir değerlendirmesi",
                b2: "Google ve Haritalar'daki görünürlüğünüz",
                b3: "Yapılacak işler için yazılı teklif",
                formTitle: "Görüşmenizi ayarlayın",
                fields: {
                    fname: "Ad",
                    lname: "Soyad",
                    email: "E-posta",
                    company: "İşletme adı",
                    goals: "Nasıl yardımcı olabiliriz?",
                    goalsPlaceholder: "İşletmenizden ve değiştirmek istediğiniz şeylerden kısaca bahsedin…"
                },
                btn: "Teklif İste",
                sending: "Gönderiliyor...",
                error: "Form gönderilemedi. Lütfen tekrar deneyin.",
                privacy: "Bilgilerinizi yalnızca bu talep için sizinle iletişime geçmek amacıyla kullanırız.",
                fields_placeholder: {
                    fname: "Ahmet",
                    lname: "Yılmaz",
                    email: "ahmet@dukkaniniz.com",
                    company: "Dükkanınız",
                    project: "İşletmenizden ve neyi değiştirmek istediğinizden bahsedin..."
                }
            }
        }
    },
    az: {
        translation: {
            nav: {
                home: "Ana Səhifə",
                work: "İşlərimiz",
                services: "Xidmətlər",
                process: "Necə işləyirik",
                blog: "Bloq",
                about: "Haqqımızda",
                contact: "Əlaqə",
                bookCall: "Təklif alın"
            },
            meta: {
                workTitle: "Portfolio: hazırladığımız saytlar | WebCom",
                workDesc: "Pet shop, restoran, döymə studiyası, elektrik şirkəti və digər bizneslər üçün hazırladığımız, hazırda işləyən veb saytlar və onlayn mağazalar.",
                homeTitle: "Sayt sifarişi və hazırlanması, onlayn mağaza, SEO | WebCom",
                homeDesc: "Azərbaycan bizneslərinə veb sayt hazırlanması, onlayn (internet) mağaza və Google-da görünürlük (SEO). Telefonda sürətli açılan, müştəri gətirən saytlar. Pulsuz təklif alın.",
                aboutTitle: "Haqqımızda | WebCom veb studiyası",
                aboutDesc: "Hər layihəyə biznesi tanımaqla başlayan, sadə və nəticəyönümlü veb saytlar hazırlayan studiya.",
                servicesTitle: "Xidmətlər: sayt hazırlanması, onlayn mağaza, SEO | WebCom",
                servicesDesc: "Veb sayt və internet mağaza hazırlanması, Google və Xəritələrdə görünmə (SEO), Instagram və Google reklamları, loqo və korporativ üslub, avtomatlaşdırma.",
                processTitle: "Sayt necə hazırlanır? İş prosesimiz | WebCom",
                processDesc: "İlk tanışlıqdan açılışa və sonrasına: WebCom layihəsinin dörd aydın addımı.",
                blogTitle: "WebCom Bloq | Texnologiya və Satira",
                blogDesc: "Özünə inamı bacarıqla səhv salan startapçılar üçün faydalı (və acı) həqiqətlər.",
                contactTitle: "Əlaqə: sayt sifarişi üçün yazın | WebCom",
                contactDesc: "Saytınız və ya onlayn mağazanız üçün layihənizi qısaca yazın; bir iş günü ərzində aydın qiymət təklifi ilə qayıdaq.",
                strategyTitle: "Saytın qiyməti nə qədərdir? Pulsuz təklif alın | WebCom",
                strategyDesc: "Sayt, onlayn mağaza və ya SEO üçün pulsuz və öhdəliksiz qiymət təklifi alın. Biznesinizi danışın, nə edəcəyimizi və qiymətini yazaq."
            },
            processPage: {
                titlePart1: "Necə ",
                titleHighlight: "işləyirik.",
                subtitle: "Dörd aydın addım, sürprizsiz proses. Hər mərhələdə nəyin görüldüyünü və qiymətini bilirsiniz.",
                step1Num: "Addım 01",
                step1Title: "Tanışlıq və araşdırma",
                step1Desc: "Telefon, WhatsApp və ya görüntülü zənglə danışırıq. Hazırkı vəziyyətinizi, müştərilərinizi və saytdan gözləntinizi dinlədikdən sonra sizə yazılı təklif təqdim edirik.",
                step2Num: "Addım 02",
                step2Title: "Dizayn və hazırlanma",
                step2Desc: "Saytınızı hazır şablondan yox, işinizə xüsusi olaraq sıfırdan dizayn edirik. Qaralamalara birlikdə baxır, istədiyiniz dəyişiklikləri birlikdə edirik.",
                step3Num: "Addım 03",
                step3Title: "Yoxlama",
                step3Desc: "Hər səhifəni telefonda, planşetdə və kompüterdə ayrıca yoxlayır, formaları və ödənişləri sınayır, saytın tez açıldığına əmin oluruq.",
                step4Num: "Addım 04",
                step4Title: "Açılış və dəstək",
                step4Desc: "Saytınızı yayıma verir və Google qeydiyyatınızı tamamlayırıq. Sonra yeniləmələr, düzəlişlər və yeni səhifələr üçün yanınızdayıq."
            },
            blogPage: {
                titlePart1: 'Korporativ ',
                titleHighlight: 'Boş Boğazlıqlar.',
                subtitle: 'Sinerji, paradiqma və pivot sözlərini eyni cümlədə işlədərək özünü dahi hesab edən qurucular üçün innovativ cəfəngiyatlar.',
                readMore: 'Davamını Oxu',
                posts: {
                    p1Cat: 'Strategiya',
                    p1Title: 'Heç Kimə Lazım Olmayan Məhsulu Necə "Süni İntellekt" Adlandırmaq Olar?',
                    p1Desc: 'Sadə bir tətbiqin domen adına ".ai" yazıb necə 10 milyon dollar investisiya almaq olar? Addım-addım acı bələdçi.',
                    p2Cat: 'Analiz',
                    p2Title: 'Həftədə 100 Saat İşləmək: LinkedIn-in Yeni "Gülməli" Şousu',
                    p2Desc: 'Yuxu yalnız zəiflər üçündür. Şəxsi həyatınızı necə fəda edib bununla trendə çevrilmək olar?',
                    p3Cat: 'Mühəndislik',
                    p3Title: 'Pizza Sifarişi Üçün Çevik (Agile) Sprintlərimiz',
                    p3Desc: 'Dizayner komandanızın pepperoni və marqarita arasında seçim etmək üçün niyə 3 həftəlik sprintə ehtiyacı var?',
                    p4Cat: 'Memarlıq',
                    p4Title: 'Mikroservis Bataqlığı: Hər Şeyi 50 Parçaya Bölməyin Ləzzəti',
                    p4Desc: 'Asanlıqla həll edilə biləcək tək bir xətanı necə 8 ölkəyə yayılan şəbəkə qəzasına çevirmək olar?',
                    p5Cat: 'Marketinq',
                    p5Title: 'Açılış Səhifənizdə Niyə Daha Çox Mücərrəd Sözlər Olmalıdır?',
                    p5Desc: '"Ekosistem", "Sinerji", "İnnovasiya." Heç bir şey demədən özünü necə bahalı göstərmək olar?',
                    p6Cat: 'Mədəniyyət',
                    p6Title: 'İşçi İxtisarını Necə Maraqlı Show-ya Çevirmək Olar?',
                    p6Desc: 'İnsan resurslarına vizyoner yanaşma: Həqiqətən kimin getməli olduğunu müəyyən etmək üçün ofisdə Battle-Royale keçirtdik.',
                    p7Cat: 'Xidmət',
                    p7Title: 'Müştəri İlə "Ghosting" Ünsiyyət Strategiyası',
                    p7Desc: 'İstifadəçi şikayətlərinə tamamilə məhəl qoymamağın məhsulunuzun dəyərini necə artırdığını öyrənin.',
                    p8Cat: 'Startap',
                    p8Title: 'Pivot: Çıxılmaz Vəziyyəti Necə "Yeni Strategiya" Adlandırmaq Olar?',
                    p8Desc: 'Heç kimin istəmədiyi tətbiqinizi "B2B Süni İntellekt həlli" kimi təqdim etməyin sənəti.',
                    p9Cat: 'Brendinq',
                    p9Title: 'Niyə Veb Saytınız Olmamalıdır?',
                    p9Desc: 'Müştərilərinizin rəqiblərinizə qaçmasını təmin etmək üçün rəqəmsal izinizi tamamilə silməyin alicənab yolu.'
                },
                articles: {
                    p1p1: 'Müasir proqram təminatı dünyası bizə bir şeyi öyrədib: Həqiqətən innovasiya etmək çətindir, amma yeni domen almaq inanılmaz dərəcədə asandır. Marketinq mətninizə "Süni İntellektlə İdarə Olunur" yazmaq varkən niyə mürəkkəb neyron şəbəkələri qurasınız ki?',
                    p1p2: 'Düşünün. İnvestorlar onsuz da kodun içinə baxmırlar. Əgər açılış səhifənizdə qaranlıq rejim və parlayan bənövşəyi kürə animasiyası varsa, elmi baxımdan siz artıq bir süni intellekt şirkətisiniz.',
                    p1h1: '"If/Else" Öyrənmə Alqoritmi',
                    p1p3: 'Şəxsi araşdırmalarımız göstərir ki, iç-içə 50 dənə "if/else" yazmaq, necə işlədiyini izah etməkdən imtina etdiyiniz müddətcə "maşın öyrənməsi" sayılır. Kimsə detal soruşsa, "LLM kontekst pəncərələri" haqqında nəsə mızıldanıb yavaş-yavaş otaqdan çıxın.',
                    p1p4: 'Nəticə olaraq, həqiqi proqram yazmağı dayandırın və xüsusi alqoritmik sinerjiniz barədə mətbuat relizləri yazmağa başlayın. İnvestorlar fərqi onsuz da anlamırlar.',

                    p2p1: 'Heç 8 saat yatıb "hustle" mədəniyyətinə xəyanət etdiyiniz üçün vicdan əzabı çəkmisinizmi? Yuxusuzluğun şərəf nişanı sayıldığı və terapiyanın sadəcə "itirilmiş zaman bloku" hesab olunduğu müasir sahibkarlığa xoş gəlmisiniz.',
                    p2p2: 'LinkedIn-də post paylaşmaq üçün gecə saat 3-də boş ofisdə yorğun, amma qərarlı görünən bir selfi çəkdirməli olacaqsınız. Arxa planda strateji olaraq yerləşdirilmiş boş enerji içkisi qutusu varsa, bu sizə əlavə xal qazandıracaq.',
                    p2h1: 'Təvazökar Paylaşımlar Sənəti',
                    p2p3: '"İnsanlar məndən üç startapı necə eyni vaxtda idarə etdiyimi, həm mələk investor olub, həm də İronman-ə necə hazırlandığımı soruşurlar," deyə yazacaqsınız. Əsas məhsulunuzun hələ qeydiyyat ekranında çökdüyünü isə tamamilə unudun. Əsas odur ki, soyuq duş qəbul etdiyinizi və Mark Avreli oxuduğunuzu vurğulayasınız.',
                    p2p4: 'Unutmayın: Əgər bu paylaşımlarınız keçmiş sinif yoldaşlarınızın sizi sosial şəbəkələrdə bloklamasına səbəb olmursa, deməli, kifayət qədər çox işləmirsiniz.',

                    p3p1: 'Heç bir proses, bir konfransdan qayıdan və təyyarədə kitab oxuyan orta səviyyəli menecer tərəfindən məhv edilməyəcək qədər sadə deyil. Gəlin elə nahar yeməyini misal gətirək.',
                    p3p2: 'Komandadan nə yemək istədiklərini soruşmaq əvəzinə, biz möhkəm və çoxfunksiyalı bir Jira paneli tətbiq edirik. Hər bir inqrediyent bir bilet (ticket), hər dilim isə bir dastan (epic) sayılır. Pizzanın tezliyini isə "story points" ilə hesablayırıq.',
                    p3h1: 'Minimum Tətbiq Olunabilən Pepperoni',
                    p3p3: 'İki həftəlik sprint metodologiyası ilə pizzanın gələndə sadəcə soyuq olmasını deyil, həm də rüblük hədəflərimizlə (OKR) mükəmməl uyğunlaşmasını təmin edirik. Kənarların niyə yanması barədə keçirilən "retrospective" toplantısı isə düz üç saat çəkəcək.',
                    p3p4: 'Nəticə etibarilə, əsas odur ki, pizza yeməyək. Əsas odur ki, pizza yemək prosesinin ideya mərhələsini rəqəmsal olaraq sənədləşdirək.',

                    p4p1: 'Tək parçalı kod bazanızın saxlanması çoxmu asandır? Junior proqramçı tətbiqinizdə məlumatların necə axdığını həqiqətən anlaya bilirmi? Bu çox böyük bir "red flag"dır. Sizin mikroservislərə ehtiyacınız var və onlara dünəndən ehtiyacınız var.',
                    p4p2: 'Tətbiqinizi 50 dənə bir-birinin eyni mikro konteynerə bölərək, sadə bir xətanın belə tapılmasının şəbəkə topologiyasında mütəxəssislik və böyük şans tələb etməsini təmin edirsiniz.',
                    p4h1: 'Paylanmış Xəta Dinamikaları',
                    p4p3: 'Mikroservislərin əsl gözəlliyi ondadır ki, biri çökdükdə alınan xəta mesajı, ona digər 49 servisin hansının səbəb olduğu ilə bağlı sizə heç bir məlumat vermir. Bu, Dev-Ops komandası üçün ömürlük iş zəmanəti deməkdir.',
                    p4p4: 'Məqsədiniz AWS dəstək xidmətinin belə telefonu üzünüzə qapatacağı qədər mürəkkəb bir xidmət şəbəkəsi qurmaqdır.',

                    p5p1: 'Potensial müştəri veb saytınıza daxil olub şirkətinizin əslində nə iş gördüyünü dərhal anlayırsa, marketinq komandanız biabırçı şəkildə uğursuz olmuşdur.',
                    p5p2: 'Bütün konkret isimləri abstrakt anlayışlarla əvəz etməyinizi şiddətlə tövsiyə edirik. Heç vaxt "Biz layihə idarəetmə proqramı satırıq" deməyin. Əvəzində deyin: "Biz asinxron iş axınlarını gücləndirən yeni nəsil sinerji paradiqmaları hazırlayırıq."',
                    p5h1: 'Heçliyin Gücü',
                    p5p3: 'İstifadəçi nə qədər az anlasa, inanılmaz dərəcədə inkişaf etmiş və bahalı bir iş gördüyünüzü bir o qədər çox zənn edəcək. "Hərəkətə gətir", "yüksəlt", və "katalizə et" kimi abstrakt fellər korporativ satışın ən böyük sirridir.',
                    p5p4: 'Açılış səhifənizi oxuyan CEO "Vay canına, bunun nə olduğu barədə heç bir fikrim yoxdur, amma bizə mütləq lazımdır" deyirsə, bazarı artıq ələ keçirmisiniz.',

                    p6p1: 'İxtisarlar adətən kədərli və gərgin hadisələrdir. Lakin Web3 və yaradıcı iqtisadiyyat ruhuna uyğun olaraq, nədən bunları daha əyləncəli etməyək? Biz rüblük struktur dəyişikliyinə "gamification" gətirdik.',
                    p6p2: 'İşçilərə Slack-dəki cavab sürətinə və kod aktivliyinə bağlı olaraq rəqəmsal "can barı" verildi. Canı ən az olan 10% işçi "Vida Mərhələsinə" keçdi, orada isə şirkətdə niyə qalmalı olduqlarına dair slayd təqdimatı etməli idilər.',
                    p6h1: 'Liderlik Cədvəli İlə İdarə Edilən HR',
                    p6p3: 'Ofis ekranlarında işçilərin "Həyatda Qalma Xallarını" göstərən canlı cədvəl açaraq, yalnız ibtidai bir qorxu sayəsində məhsuldarlığı 600% artırdıq.',
                    p6p4: 'Sonda, söhbət sadəcə büdcəni ixtisar etməkdən getmir; işçilər üçün unudulmaz bir "işdən çıxarılma səyahəti" yaratmaqdan gedir.',

                    p7p1: 'Ənənəvi "Müştəri Uğuru" modeli artıq köhnəlib. Bir istifadəçi xəta bildirdikdə, hamı dərhal cavab verib problemi həll etməyi təklif edir. Amma biz fərqinə vardıq ki, bu, onları sadəcə daha tələbkar və ərköyün edir.',
                    p7p2: 'Bunun əvəzinə biz "Strateji Sükut (Ghosting)" üsulunu tətbiq edirik. Korporativ bir müştəri kritik texniki xəta biletini (ticket) göndərdikdə, avtomatlaşdırılmış sistemimiz bunu dərhal arxivləyir və həmin müştərini "aşağı prioritetli" siyahısına əlavə edir.',
                    p7h1: 'Əlçatmazlığın Psixologiyası',
                    p7p3: 'Bunu bir münasibət kimi düşünün: Hər mesaja dərhal cavab verən tərəf çarəsiz görünür. Üç həftə sonra geri dönən isə həm məşğul, həm də dəyərlidir. Müştərilərimizə məhəl qoymayaraq, onlarda proqramımızın anlaya bilməyəcəkləri qədər mürəkkəb olduğu fikrini yaradırıq.',
                    p7p4: 'Nəhayət, 45 gün keçdikdən sonra sadəcə FAQ səhifəmizə bir link göndərərək cavab verdikdə, onların bizə olan minnətdarlığının həddi-hüdudu olmur.',

                    p8p1: 'Siz əl işi "kripto-qozlar" üçün mərkəzləşdirilməmiş bazar yeri yaratmaq məqsədilə 18 ay vaxt və 4 milyon dollar xərclədiniz. Açılış günü gəldi və... heç kim tətbiqi yükləmədi. Bəs indi nə etməli?',
                    p8p2: 'Pivot edirsiniz. Amma məhsulu deyil—sadəcə açılış səhifənizi (landing page). Kod eyni qalır, amma marketinq materiallarında bu artıq "Korporativ B2B Süni İntellekt Logistika Mühərriki" kimi təqdim olunur.',
                    p8h1: 'Sərt Pivot Sənəti',
                    p8p3: 'Arxa tərəfin (backend) sadəcə bir yeniyetmə tərəfindən yazılmış "smart contract" olmasının heç bir fərqi yoxdur. Siz artıq "AI" şirkətisiniz. Sayta qaranlıq rejim əlavə edin, menyuya "Proqnozlaşdırma Modelləri" yazın və qiyməti 5000% artırın.',
                    p8p4: 'Startaplar məhsul pis olduğu üçün deyil, investorlara kifayət qədər inamla yalan danışa bilmədikləri üçün uğursuz olurlar.',

                    p9p1: 'Bu günlərdə hər kəsin bir veb saytı var. Bu, həqiqətən çox yorucudur. Potensial bir müştəri şirkətinizi axtarıb peşəkar bir səhifə tapanda nə olur, bilirsinizmi? Onlar sizinlə əlaqə saxlaya bilər, hətta nəsə almağa cəhd edə bilərlər. Bu qədər iş yükünə kimin ehtiyacı var?',
                    p9p2: 'Veb sayt qurmaqdan imtina edərək, siz korporativ xeyriyyəçiliyin zirvəsinə çatırsınız. Bir müştəri adınızı Google-da axtarıb heç nə tapmayanda və məyus olub axtarışdan əl çəkəndə hara gedir? Əlbəttə ki, rəqiblərinizə. Siz təkbaşınıza yerli iqtisadiyyatı ayaqda saxlayırsınız.',
                    p9h1: 'Sektorun Ən Sevilən Məğlubu Olmaq',
                    p9p3: 'Yaradacağınız müsbət imici bir düşünün! Rəqib agentliklər sizin şərəfinizə ziyafətlər təşkil edəcək, "10 dollarlıq domen almaqdan imtina edən o uca ruhlu şirkətin sağlığına" deyə qədəh qaldıracaqlar. Bu, rəqibləriniz arasında sadiqlik yaratmaq üçün dahi bir strategiyadır.',
                    p9p4: 'Nəhayət, veb sayt qurmaq bir növ təslimiyyətdir. Əgər məhsulunuz heç bir interfeys olmadan təkbaşına 10 milyon dollar gətirə bilmirsə, deməli, ən başından uduzmusunuz.',
                }
            },
            work: {
                arcSub: "Pet shopdan döymə studiyasına, pizzeriyadan elektrik şirkətinə qədər müxtəlif bizneslər üçün hazırladığımız saytlar. Hamısı yayımdadır; istədiyinizi açıb baxa bilərsiniz.",
                arcAccent: "işləyən saytlar",
                arcTitle: "Real bizneslər, işləyən saytlar.",
                reelPlay: "Showreel-i oynat",
                reelPause: "Showreel-i dayandır",
                reelLabel: "Showreel",
                count_other: "{{count}} layihə",
                count_one: "{{count}} layihə",
                accent: "işlərdən",
                headline: "Gördüyümüz işlərdən bəziləri",
                allLink: "Bütün işlər",
                pageTitle: "İşlərimiz",
                pageSubtitle: "Hər layihə biznesi və onun müştərisini tanımaqla başladı. Canlı sayta baxmaq üçün layihəyə klikləyin.",
                visit: "Sayta keç",
                demo: "Demo",
                items: {
                    petshop6: {
                        type: "Pet shop",
                        place: "Bahçelievler, Ankara",
                        desc: "Pişik və it yemi üçün onlayn mağaza. Müştəri səbəti doldurub sifarişi WhatsApp-da təsdiqləyir; Ankara daxilində çatdırılma pulsuzdur.",
                        tags: "Onlayn mağaza · WhatsApp sifarişi · Türk və ingilis dili"
                    },
                    blackinkart: {
                        type: "Döymə və pirsinq studiyası",
                        place: "Çankaya, Ankara",
                        desc: "Portfolio, ustalar, gigiyena məlumatı, onlayn rezerv və 3D döymə önizləməsi olan studiya saytı.",
                        tags: "Veb sayt · Rezerv · 3D önizləmə"
                    },
                    piercingland: {
                        type: "Pirsinq mağazası",
                        place: "Bahçelievler, Ankara",
                        desc: "Bütün Türkiyəyə göndərən onlayn mağaza: kateqoriyalar, hazır dəstlər, material bələdçiləri və pirsinqi sınamaq səhifəsi.",
                        tags: "Onlayn mağaza · Sınaq səhifəsi · Türk və ingilis dili"
                    },
                    balkabagi: {
                        type: "Təbii meyvə şirəsi dükanı",
                        place: "Bahçelievler, Ankara",
                        desc: "Menyu, dükanın hekayəsi, yol təsviri və zəng düyməsi olan sadə, rəngli sayt.",
                        tags: "Veb sayt · Menyu · Yol təsviri"
                    },
                    bagizza: {
                        type: "Baget pizza restoranı",
                        place: "Türkiyə",
                        desc: "Menyu, kampaniyalar, filiallar və françayzinq səhifələri, həmçinin sifariş düyməsi olan brend saytı.",
                        tags: "Veb sayt · Menyu · Françayzinq"
                    },
                    zet: {
                        type: "Elektrik podrat şirkəti",
                        place: "Lüleburgaz",
                        desc: "Sənaye elektrik podrat şirkəti üçün korporativ sayt: xidmətlər, referanslar, layihələr və təklif forması.",
                        tags: "Korporativ sayt · Təklif forması"
                    },
                    nukleon: {
                        type: "Laboratoriya avadanlığı istehsalçısı",
                        place: "İvedik OSB, Ankara",
                        desc: "360° 3D məhsul baxışı, filtr və müqayisə imkanı olan məhsul kataloqu. Demo kimi hazırlanıb; sifariş bağlıdır.",
                        tags: "Kataloq · 3D məhsul baxışı"
                    }
                }
            },
            marquee: {
                label: "Birlikdə işlədiyimiz bizneslər",
            },
            manifesto: {
                badge: "Niyə biz?",
                text: "Kimsə sizi axtaranda çox vaxt ilk gördüyü şey telefonundakı saytınızdır. Menyu açılmırsa, telefon nömrənizi tapmırsa, növbətiyə keçir. Biz o ilk bir neçə saniyəni möhkəm qururuq: tez açılan, nə iş gördüyünüzü aydın deyən, bir toxunuşla zəng edilə bilən sayt.",
            },
            cards: {
                menu: "Menyu · Qiymətlər · Əlaqə",
                search: "yaxınlıqdakı çörəkxana",
                pin: "Mağazanız",
                order: "Yeni sifariş",
                paid: "Ödənildi",
            },
            tech: {
                index: "Layihə siyahısı",
                reach: "Müştəriləriniz haradadırsa, orada",
                next: "Növbəti layihə",
                preparing: "Sistem hazırlanır",
                online: "Sistem onlayndır",
                local: "Saat",
                c1Label: "Veb sayt",
                c1Text: "Telefonda sürətlə açılan, etibar yaradan",
                c1Accent: "bir sayt.",
                c2Label: "Onlayn mağaza",
                c2Text: "Siz yatanda da sifariş qəbul edən",
                c2Accent: "bir mağaza.",
                c3Label: "Google və Xəritələr",
                c3Text: "Yaxınlıqda axtaran müştəri",
                c3Accent: "əvvəlcə sizi görsün.",
                c4Label: "Reklam idarəetməsi",
                c4Text: "Xərclənən hər manatın hesabını verən",
                c4Accent: "reklamlar.",
                projects_one: "{{count}} canlı layihə",
                projects_other: "{{count}} canlı layihə",
                studio: "Veb · E-ticarət · Axtarış",
                latest: "Son layihə",
                scroll: "Sürüşdür",
            },
            hero: {
                after: "",
                words: "veb sayt.|onlayn mağaza.|Google görünürlüyü.|satan reklamlar.",
                before: "Biznesiniz üçün",
                photoCaption: "Məhəllənizdəki mağazalar üçün.",
                accent: "veb sayt",
                eyebrow: "Ankarada veb studiya",
                recentLabel: "Son işlər:",
                headline: "Biznesiniz üçün veb sayt və onlayn mağaza.",
                subheadline: "Biznesinizə uyğun veb saytlar və onlayn mağazalar hazırlayır, Google-da tapılmağınıza kömək edirik. Saytınız yayımlandıqdan sonra da bir mesaj uzağındayıq.",
                primaryCta: "Pulsuz təklif alın",
                secondaryCta: "İşlərimizə baxın"
            },
            problem: {
                headline1: "Əksər mağazaların artıq saytı var. ",
                headlineHighlight: "Sadəcə o, çox iş görmür.",
                title1: "Tapılmır",
                desc1: "İnsanlar \"yaxınlıqda\" deyə axtarır, mağazanız isə Google-da və ya Xəritələrdə yoxdur, ya da məlumatlar köhnədir.",
                title2: "Telefonda istifadəsi çətindir",
                desc2: "Ziyarətçilərin çoxu telefondan gəlir. Menyu, qiymət və ya telefon nömrəsi çətin tapılırsa, saytı bağlayırlar.",
                title3: "Sifariş və ya rezerv yoxdur",
                desc3: "Müştəri saytdan sifariş vermək, vaxt götürmək və ya sizə yazmaq istəyir. Bacarmırsa, başqasına zəng edir.",
                inlineCta: "Sizinkinə baxaq"
            },
            glitch: {
                title: 'Sizin üçün mükəmməl saytlar qururuq',
                desc: 'ROI paradiqmanızı maksimuma çatdırmaq üçün blockchain SEO-dan yararlanan sinerji yönümlü agentliyik.',
                btn1: 'Bu gün başlayın',
                btn2: 'Ətraflı məlumat',
                disclaimer: 'Bir azdan görəcəkləriniz tamamilə marketinq məqsədlidir; cihazınıza heç bir giriş təmin edilmir və zərər verilmir.',
                okBtn: 'Anladım',
                terminal: {
                    line1: '> TƏHLÜKƏSİZLİK PROTOKOLLARI LƏĞV EDİLİR...',
                    line2: '> SIRADAN_ŞABLON_AŞKAR_EDİLDİ.',
                    line3: '> STATUS: QƏBUL EDİLMƏZDİR.',
                    line4: '> WEBCOM_SİSTEMİ_YÜKLƏNİR...',
                }
            },
            servicesMenu: {
                accent: "bir komandadan",
                headline: "İnternetdə ehtiyacınız olan hər şey, bir komandadan.",
                allLink: "Bütün xidmətlər",
                s1: "Veb sayt",
                d1: "Telefonda qüsursuz açılan; nə təklif etdiyinizi, harada olduğunuzu və sizə necə çatmağı ilk baxışdan göstərən sayt.",
                s2: "Google və Xəritələr",
                d2: "Yaxınlıqda axtarış edən müştərilərin sizi tapması üçün Google Biznes profilinizi və saytınızı birlikdə qururuq.",
                s3: "Reklam idarəetməsi",
                d3: "Google, Instagram və Facebook reklamlarınızı büdcənizə uyğun qurur, nə qazandırdığını sadə hesabatlarla paylaşırıq.",
                s4: "Loqo və korporativ kimlik",
                d4: "Lövhədən menyuya, sosial mediadan vizit kartına qədər hər yerdə eyni səliqə ilə görünməyinizi təmin edən kimlik.",
                s5: "Onlayn mağaza",
                d5: "Kartla ödəniş, stok izləmə və çatdırılma seçimləri hazırdır; siz yalnız sifarişlərə fokuslanın.",
                s6: "Avtomatlaşdırma",
                d6: "Onlayn rezerv, WhatsApp sifariş forması, avtomatik faktura… Hər həftə vaxtınızı alan işləri sizin yerinizə görən kiçik alətlər.",
                learnMore: "Ətraflı bax"
            },
            servicesPage: {
                title: "Xidmətlərimiz",
                subtitle: "İnternetdə güclü mövqe qazanmaq üçün lazım olan hər şeyi eyni komandadan alırsınız. Hər iş həcminə görə qiymətləndirilir; ehtiyacınızı yazın, sizə xüsusi təklif hazırlayaq.",
                btn: "Təklif alın",
                s1: {
                    title: "Veb sayt",
                    desc: "Telefonda qüsursuz açılan; nə təklif etdiyinizi, harada olduğunuzu və sizə necə çatmağı ilk baxışdan göstərən sayt.",
                    f1: "Mobil uyğun dizayn",
                    f2: "Türk və ingilis dilində versiya",
                    f3: "Zəng, xəritə və WhatsApp düymələri",
                    btn: "Ətraflı",
                    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                },
                s2: {
                    title: "Google və Xəritələr",
                    desc: "Yaxınlıqda axtarış edən müştərilərin sizi tapması üçün Google Biznes profilinizi və saytınızı birlikdə qururuq.",
                    f1: "Google Biznes profili",
                    f2: "Yerli açar sözlər",
                    f3: "Saytın sürəti və texniki düzəlişlər",
                    btn: "Ətraflı",
                    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
                },
                s3: {
                    title: "Reklam idarəetməsi",
                    desc: "Google, Instagram və Facebook reklamlarınızı büdcənizə uyğun qurur, nə qazandırdığını sadə hesabatlarla paylaşırıq.",
                    f1: "Google Ads",
                    f2: "Instagram və Facebook reklamları",
                    f3: "Aylıq nəticə hesabatı",
                    btn: "Ətraflı",
                    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                },
                s4: {
                    title: "Loqo və korporativ kimlik",
                    desc: "Lövhədən menyuya, sosial mediadan vizit kartına qədər hər yerdə eyni səliqə ilə görünməyinizi təmin edən kimlik.",
                    f1: "Loqo dizaynı",
                    f2: "Rənglər və şriftlər",
                    f3: "Lövhə, menyu və sosial media şablonları",
                    btn: "Ətraflı",
                    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                },
                s5: {
                    title: "Onlayn mağaza",
                    desc: "Kartla ödəniş, stok izləmə və çatdırılma seçimləri hazırdır; siz yalnız sifarişlərə fokuslanın.",
                    f1: "Məhsul kataloqu",
                    f2: "Kartla ödəniş",
                    f3: "Stok və sifariş izləmə",
                    btn: "Ətraflı",
                    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
                },
                s6: {
                    title: "Avtomatlaşdırma",
                    desc: "Onlayn rezerv, WhatsApp sifariş forması, avtomatik faktura… Hər həftə vaxtınızı alan işləri sizin yerinizə görən kiçik alətlər.",
                    f1: "Onlayn rezerv",
                    f2: "WhatsApp və forma ilə sifariş",
                    f3: "Sadə idarəetmə paneli",
                    btn: "Ətraflı",
                    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
                }
            },
            process: {
                more: "Prosesi ətraflı izləyin",
                s1: "Tanışlıq",
                d1: "Biznesinizi dinləyir, ehtiyacınızı dəqiqləşdirir və sizə yazılı, aydın təklif təqdim edirik.",
                s2: "Dizayn və hazırlanma",
                d2: "Saytınızı işinizə xüsusi olaraq sıfırdan dizayn edir, hər mərhələdə qaralamaları sizinlə paylaşırıq.",
                s3: "Yayım",
                d3: "Telefonda və kompüterdə diqqətlə yoxlayıb yayıma verir, Google-a qoşuruq.",
                s4: "Dəstək",
                d4: "Açılışdan sonra da yeniləmə, düzəliş və suallarınız üçün bir mesaj uzaqlığındayıq.",
                headline: "Layihə necə irəliləyir?"
            },
            trust: {
                q1: "Onlar sadəcə veb sayt yox, real gəlir mühərriki qurdular. Müştəri sayımız 3 ay içində üç dəfə artdı.",
                q2: "Strateji, sürətli və yüksək dərəcədə peşəkar. Yeni platformamız köhnə sistemimizdən işıq illəri qədər öndədir.",
                headline: 'Dünya Səviyyəli Brendlərin Güvən Seçimi',
            },
            cta: {
                accent: "nə edə biləcəyimizə",
                headline: "Biznesiniz üçün nə edə biləcəyimizə baxaq.",
                desc: "Bir neçə cümlə ilə biznesinizi danışın. Nə edəcəyimizi və neçəyə başa gələcəyini açıq yazırıq. Sizə uyğun gəlməsə də problem deyil.",
                primaryBtn: "Pulsuz təklif alın",
                secondaryBtn: "Bizə yazın"
            },
            xray: {
                titlePart1: "Gözəl vitrin işin yarısıdır.",
                titleHighlight: "Qalan yarısı altdadır",
                subtitle: "Sürgünü çəkin. Solda müştərinin gördüyü, sağda isə sifarişi və ödənişi qəbul edən kod var.",
                labelCore: "Altda işləyən hissə",
                labelSurface: "Müştərinin gördüyü",
                node1: "Verilənlər bazası",
                node2: "Keş",
                uiTitle: "Qulaqlıq",
                uiPrice: "₺2.999,00",
                uiBtn: "Səbətə əlavə et",
                uiReviews: "★★★★★ (124 rəy)"
            },
            footer: {
                bigAccent: "sizinki",
                big: "Növbəti sayt sizinki olsun.",
                tag: "Bizneslər üçün veb sayt, onlayn mağaza, Google və reklam xidmətləri.",
                links: "Səhifələr",
                legal: "Hüquqi",
                privacy: "Məxfilik Siyasəti",
                terms: "İstifadə Şərtləri",
                rights: "Bütün hüquqlar qorunur."
            },

            difference: {
                title: "Bu, zarafat idi.",
                desc: "Hələ də bir çox sayt o ilk ekrana bənzəyir. Bizimkilər belə deyil. Buyurun, baxın.",
                btn: "Saytı göstər",
                ps: "(P.S. Narahat olmayın, kompüterinizi hakləmədik.)"
            },
            about: {
                titlePart1: "İşinizi anlayan ",
                titleHighlight: "bir veb studiya.",
                desc: "Veb sayt, onlayn mağaza və Google görünürlüyü üzərində işləyirik. Hər layihəyə biznesin özünü tanımaqla başlayırıq.",
                positioningTitle: "Nəyə inanırıq",
                positioningDesc: "Yaxşı sayt mürəkkəb olmaq məcburiyyətində deyil. Tez açılmalı, telefonda qüsursuz görünməli, Google-da tapılmalı və müştərinin zəng etməsini, sifariş verməsini və ya vaxt götürməsini asanlaşdırmalıdır. Biz məhz bunu edir və idarə edilməsini sizin üçün sadə saxlayırıq.",
                btn: "Bizimlə əlaqə",
                storyTitle: "Necə başladıq",
                storyDesc1: "Bir çox biznesin gözəl görünən, amma bir dənə də müştəri gətirməyən saytlara pul ödədiyini dəfələrlə gördük: Google-da tapılmırdılar, telefondan zəng etmək olmurdu, sifariş qəbul edə bilmirdilər.",
                storyDesc2: "WebCom-u buna görə qurduq: saytı, Google tərəfini, reklamları və sonrakı dəstəyi bir yerdən, biznesin sahibi ilə birbaşa danışaraq etmək üçün.",
                valuesTitle: "İş prinsiplərimiz",
                value1Title: "Aydın ünsiyyət",
                value1Desc: "Texniki terminlərlə yox, sizin dilinizdə danışırıq. Nəyi niyə etdiyimizi həmişə bilirsiniz.",
                value2Title: "Şəffaf qiymət",
                value2Desc: "Hər iş başlamazdan əvvəl yazılı şəkildə qiymətləndirilir. Gözlənilməz faktura olmur.",
                value3Title: "Davamlı dəstək",
                value3Desc: "Saytınız yayıma çıxdıqdan sonra da dəyişiklik, düzəliş və suallarınız üçün yanınızdayıq."
            },
            contact: {
                title: "Layihənizi danışaq.",
                desc: "Yeni sayt, onlayn mağaza, yaxud Google və reklam dəstəyi… Ehtiyacınızı qısaca yazın, bir iş günü ərzində sizə cavab verək.",
                formTitle: "Bizə yazın",
                fields: {
                    fname: "Ad",
                    lname: "Soyad",
                    email: "E-poçt",
                    company: "Biznesin adı",
                    project: "Layihənizdən danışın",
                    projectPlaceholder: "Məsələn: menyumuzun olduğu və WhatsApp-dan sifariş qəbul edə biləcəyimiz sayt istəyirik."
                },
                btn: "Mesajı göndər",
                sending: "Göndərilir...",
                sent: "Mesajınız bizə çatdı. Tezliklə sizə cavab verəcəyik.",
                error: "Mesajınız göndərilmədi. Zəhmət olmasa, yenidən cəhd edin və ya bizə e-poçtla yazın.",
                infoTitle: "Əlaqə məlumatları",
                emailTitle: "E-poçt",
                officeTitle: "Ünvan",
                officeDesc: "Ankara, Türkiyə",
                callTitle: "Pulsuz ilkin görüş",
                callDesc: "Sizə uyğun vaxtda 30 dəqiqəlik görüş təyin edək.",
                callBtn: "Görüş təyin et"
            },
            common: {
                back: "Geri",
                backHome: "Ana səhifəyə qayıt",
            },
            strategy: {
                title: "Pulsuz təklif alın",
                subtitle: "Biznesinizdən qısaca danışın. Sizə zəng edək, hazırkı vəziyyəti birlikdə qiymətləndirək və sizə yazılı təklif göndərək.",
                successTitle: "Təşəkkürlər, sorğunuz bizə çatdı.",
                successDesc: "Bir iş günü ərzində zəng edərək və ya e-poçt göndərərək uyğun görüş vaxtı təyin edəcəyik.",
                noRisk: "Pulsuz və öhdəliksiz.",
                titlePart1: "Biznesiniz haqqında ",
                titleHighlight: "pulsuz 30 dəqiqəlik görüş.",
                desc: "Mövcud saytınıza və Google görünürlüyünüzə baxır, nəyi niyə dəyişməyi təklif etdiyimizi izah edir və sizə yazılı təklif göndəririk.",
                b1: "Mövcud saytınızın qısa qiymətləndirilməsi",
                b2: "Google və Xəritələrdə görünürlüyünüz",
                b3: "Görüləcək işlər üçün yazılı təklif",
                formTitle: "Görüşünüzü təyin edin",
                fields: {
                    fname: "Ad",
                    lname: "Soyad",
                    email: "E-poçt",
                    company: "Biznesin adı",
                    goals: "Necə kömək edə bilərik?",
                    goalsPlaceholder: "Biznesinizdən və dəyişmək istədiklərinizdən qısaca danışın…"
                },
                btn: "Təklif istə",
                sending: "Göndərilir...",
                error: "Forma göndərilmədi. Zəhmət olmasa, yenidən cəhd edin.",
                privacy: "Məlumatlarınızı yalnız bu sorğu ilə bağlı sizinlə əlaqə saxlamaq üçün istifadə edirik.",
                fields_placeholder: {
                    fname: "Anar",
                    lname: "Məmmədov",
                    email: "anar@magazaniz.az",
                    company: "Mağazanız",
                    project: "Biznesiniz və nəyi dəyişmək istədiyiniz barədə yazın..."
                }
            }
        }
    }
};

// the URL decides the language (/az/..., /en/..., Turkish at the root)
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: langFromPath(window.location.pathname),
        fallbackLng: 'tr',
        interpolation: {
            escapeValue: false, // react already safes from xss
        }
    });

// Keep <html lang> in sync so uppercase text uses the right rules (Turkish İ/I)
const syncLang = (lng: string) => { document.documentElement.lang = (lng || 'tr').split('-')[0]; };
syncLang(i18n.language);
i18n.on('languageChanged', syncLang);

export default i18n;
