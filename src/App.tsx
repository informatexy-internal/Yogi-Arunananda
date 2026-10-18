import logo from "./assets/brand/logo.png";
import heroImg from "./assets/images/home/hero.jpg";
import aboutImg from "./assets/images/home/about.jpg";
import teachingsImg from "./assets/images/home/teachings.jpg";
import ashramImg from "./assets/images/home/ashram.jpg";
import educationImg from "./assets/images/services/education.jpg";
import communityImg from "./assets/images/services/community.jpg";
import reliefImg from "./assets/images/services/relief.jpg";
import journeyImg from "./assets/images/home/journey.jpg";
import arrowLg from "./assets/icons/ui/arrow-lg.svg";
import arrowSm from "./assets/icons/ui/arrow-sm.svg";
import practiceIcon from "./assets/icons/feature/lotus-dark.svg";
import teachingIcon from "./assets/icons/feature/book-dark.svg";
import arrowMd from "./assets/icons/ui/arrow-md.svg";
import yogaIcon from "./assets/icons/feature/lotus-light.svg";
import ayurvedaIcon from "./assets/icons/feature/book-light.svg";
import wisdomIcon from "./assets/icons/feature/leaf-light.svg";
import arrowXs from "./assets/icons/ui/arrow-xs.svg";
import arrowMd2 from "./assets/icons/ui/arrow-md-alt.svg";
import youtubeIcon from "./assets/icons/social/youtube.svg";
import instagramIcon from "./assets/icons/social/instagram.svg";
import facebookIcon from "./assets/icons/social/facebook.svg";

const YOUTUBE_URL = "https://www.youtube.com/@yogiarunanandamuni";
const MAPS_URL = "https://maps.app.goo.gl/xAjotHF2LP7RF91o7";
const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029Vb6wcL9GU3BBZR7YyC0w";

const WHATSAPP_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d={WHATSAPP_PATH} />
    </svg>
  );
}

const aboutCards = [
  { icon: practiceIcon, title: "His Practice", lines: ["Yoga, meditation &", "spiritual practice"] },
  { icon: teachingIcon, title: "His Teachings", lines: ["Traditional wisdom &", "knowledge"] },
  { icon: practiceIcon, title: "His Service", lines: ["Selfless service &", "community work"] },
];

const teachingItems = [
  {
    icon: yogaIcon,
    title: "Yoga & Meditation",
    lines: ["Traditional practices for balance, awareness, and inner", "growth."],
  },
  {
    icon: ayurvedaIcon,
    title: "Ayurveda & Tantra",
    lines: ["Exploring ancient knowledge and its role in mindful", "living."],
  },
  {
    icon: wisdomIcon,
    title: "Spiritual Wisdom",
    lines: ["Sharing teachings that encourage deeper understanding", "and conscious living."],
  },
];

const services = [
  {
    img: educationImg,
    title: "Tribal Education",
    body: "Teaching Bhagavad Gita, Yoga, Meditation, and values of life to tribal children.",
  },
  {
    img: communityImg,
    title: "Community Support",
    body: "Supporting communities through food, essential supplies, and other practical initiatives.",
  },
  {
    img: reliefImg,
    title: "Relief & Care",
    body: "Extending support during times of need, including flood relief and Gau Seva.",
  },
];

function ArrowBadge({ src, size }: { src: string; size: "sm" | "md" | "lg" | "xs" }) {
  return (
    <span className={`badge badge-${size}`}>
      <img src={src} alt="" />
    </span>
  );
}

export default function App() {
  return (
    <>
      {/* Hero */}
      <section className="hero" id="home">
        <div className="container hero-inner">
          <header className="nav">
            <a className="brand" href="#home">
              <img className="brand-logo" src={logo} alt="" />
              <span className="brand-name">Arunananda</span>
            </a>
            <div className="nav-right">
              <nav className="nav-links" aria-label="Primary">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#teachings">Teaching</a>
                <a href="#services">Services</a>
              </nav>
              <a className="btn btn-outline-light btn-nav" href={YOUTUBE_URL} target="_blank" rel="noreferrer">
                Watch YouTube
                <ArrowBadge src={arrowLg} size="lg" />
              </a>
            </div>
          </header>

          <div className="hero-body">
            <div className="hero-copy">
              <span className="eyebrow">YOGA · MEDITATION · SPIRITUAL WISDOM</span>
              <div className="hero-text">
                <div>
                  <h1 className="h-xl">
                    A Journey of Yoga, {" "}<br />
                    Spiritual Practice {" "}<br />
                    &amp; Selfless Service
                  </h1>
                  <p className="lead lead-light hero-lead">
                    Sharing the wisdom of Yoga, Meditation, and spiritual
                    {" "}<br />
                    living through practice and service.
                  </p>
                </div>
                <div className="hero-actions">
                  <a className="btn btn-outline-light btn-sm" href="#about">
                    <span className="badge badge-dot badge-dot-solid">
                      <img src={arrowSm} alt="" />
                    </span>
                    Explore Journey
                  </a>
                  <a className="btn btn-light btn-sm" href={YOUTUBE_URL} target="_blank" rel="noreferrer">
                    <span className="badge badge-dot badge-dot-outline">
                      <img src={arrowSm} alt="" />
                    </span>
                    Watch YouTube
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-photo">
              <img src={heroImg} alt="Yogi Arunananda Muni" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="container about-wrap">
          <div className="about-panel">
            <div className="about-photo">
              <img src={aboutImg} alt="Yogi Arunananda Muni in meditation" />
            </div>
            <div className="about-copy">
              <div className="about-top">
                <div>
                  <p className="kicker">ABOUT</p>
                  <h2 className="h-xl">A Life Rooted in practice, Teaching &amp; Service</h2>
                </div>
                <p className="lead">
                  Yogi Arunananda Muni is a practitioner and teacher of Yoga, Meditation, Tantra, Ayurveda, and
                  spiritual wisdom. He shares traditional knowledge through practice, teaching, and selfless service.
                </p>
                <div className="about-cards">
                  {aboutCards.map((c) => (
                    <div className="about-card" key={c.title}>
                      <span className="icon-disc icon-disc-light">
                        <img src={c.icon} alt="" />
                      </span>
                      <div className="about-card-text">
                        <h3>{c.title}</h3>
                        <p>
                          {c.lines[0]}
                          {" "}<br />
                          {c.lines[1]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <a className="btn btn-green btn-sm btn-end" href="#teachings">
                Learn More About Him
                <ArrowBadge src={arrowMd} size="md" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Teachings */}
      <section className="teachings" id="teachings">
        <div className="container">
          <div className="section-head">
            <p className="kicker kicker-center">Teachings</p>
            <h2 className="h-lg">Sharing Traditional Wisdom</h2>
            <p className="lead center">
              He shares the teachings of Yoga, Ayurveda, Tantra, meditation, and spiritual wisdom through simple and
              practical guidance.
            </p>
          </div>
          <div className="teachings-row">
            <div className="teachings-list">
              {teachingItems.map((t, i) => (
                <div className={`teaching-item${i === 0 ? " is-active" : ""}`} key={t.title}>
                  <span className="icon-disc icon-disc-green">
                    <img src={t.icon} alt="" />
                  </span>
                  <div className="teaching-text">
                    <h3>{t.title}</h3>
                    <p>
                      {t.lines[0]}
                      {" "}<br />
                      {t.lines[1]}
                    </p>
                  </div>
                </div>
              ))}
              <a className="btn btn-green btn-md" href="#ashram">
                Learn More about him
                <ArrowBadge src={arrowXs} size="xs" />
              </a>
            </div>
            <div className="teachings-photo">
              <img src={teachingsImg} alt="Yogi Arunananda Muni in saffron robes" />
            </div>
          </div>
        </div>
      </section>

      {/* Ananda Ashram */}
      <section className="ashram" id="ashram">
        <div className="container">
          <div className="ashram-head">
            <div className="ashram-title">
              <p className="kicker">ANANDA ASHRAM DANG</p>
              <h2 className="h-xl">
                A Life of Practice
                {" "}<br />
                <span className="indent">in the Heart of Dang</span>
              </h2>
            </div>
            <div className="ashram-side">
              <p className="lead">
                Nestled among the forests and mountains of Dang, Ananda Ashram is a place of spiritual practice,
                learning, and service.
              </p>
              <a className="btn btn-green btn-lg" href="#journey">
                Explore Ananda Ashram
                <ArrowBadge src={arrowMd2} size="md" />
              </a>
            </div>
          </div>
          <figure className="ashram-figure">
            <div className="ashram-photo">
              <img src={ashramImg} alt="Ananda Ashram in the forests of Dang" />
            </div>
            <figcaption className="lead center">
              A place where spiritual practice, teaching, and service come together.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-head section-head-services">
            <p className="kicker kicker-center kicker-semibold">SELFLESS SERVICE</p>
            <h2 className="h-xl">Serving With Purpose</h2>
            <p className="lead center">
              Through education, community support, and relief efforts, he continues to serve communities in need with
              compassion and care.
            </p>
          </div>
          <div className="services-wrap">
            <a className="services-link" href="#journey">
              Explore His Services
              <ArrowBadge src={arrowLg} size="lg" />
            </a>
            <div className="services-grid">
              {services.map((s) => (
                <article className="service-card" key={s.title}>
                  <div className="service-photo">
                    <img src={s.img} alt="" />
                  </div>
                  <div className="service-body">
                    <div className="service-text">
                      <h3>{s.title}</h3>
                      <p>{s.body}</p>
                    </div>
                    <a className="btn btn-green btn-pill" href={YOUTUBE_URL} target="_blank" rel="noreferrer">
                      Read more
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey CTA */}
      <section className="journey" id="journey">
        <div className="container journey-row">
          <div className="journey-copy">
            <div className="journey-text">
              <div>
                <p className="journey-kicker">EXPERIENCE THE JOURNEY</p>
                <h2 className="h-xl">
                  Explore a Life of Practice,
                  {" "}<br />
                  Wisdom &amp; Service
                </h2>
              </div>
              <p className="lead">
                Discover his teachings, explore his work, and
                {" "}<br />
                experience a journey rooted in yoga, meditation,
                {" "}<br />
                spiritual wisdom, and selfless service.
              </p>
            </div>
            <a className="btn btn-green btn-lg btn-end" href={YOUTUBE_URL} target="_blank" rel="noreferrer">
              Explore the Journey
              <ArrowBadge src={arrowMd2} size="md" />
            </a>
          </div>
          <div className="journey-photo">
            <img src={journeyImg} alt="Anandashram entrance gate" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">
              <img src={logo} alt="" />
            </span>
            <span>Arunananda</span>
          </div>
          <div className="footer-cols">
            <div className="footer-col footer-col-explore">
              <h4>Explore</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#teachings">Teachings</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#ashram">Ananda&nbsp; Ashram</a></li>
              </ul>
            </div>
            <div className="footer-col footer-col-connect">
              <h4>Connect</h4>
              <ul className="social">
                <li>
                  <a href={YOUTUBE_URL} target="_blank" rel="noreferrer">
                    <img src={youtubeIcon} alt="" />
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img src={instagramIcon} alt="" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_CHANNEL_URL} target="_blank" rel="noreferrer">
                    <span className="social-wa">
                      <WhatsAppIcon size={20} />
                    </span>
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={facebookIcon} alt="" />
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col footer-col-contact">
              <h4>Contact</h4>
              <ul>
                <li>Email</li>
                <li>
                  <a href={MAPS_URL} target="_blank" rel="noreferrer">
                    Location
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_CHANNEL_URL} target="_blank" rel="noreferrer">
                    Get in Touch
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="footer-legal">
            <p>© 2026 Yogi Arunananda Muni. All rights reserved.</p>
            <p>
              All videos are from Yogi Arunananda Muni's official YouTube channel, @yogiarunanandamuni. Shared for
              educational purposes only and not a substitute for professional medical advice, diagnosis, or
              treatment.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
