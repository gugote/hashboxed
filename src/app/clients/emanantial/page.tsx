"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ScreenId = "home-d" | "cat-d" | "det-d" | "nos-d" | "con-d" | "home-m" | "cat-m" | "det-m" | "nos-m" | "con-m";
type AnchorId =
  | "home-d-anchor"
  | "cat-d-anchor"
  | "det-d-anchor"
  | "nos-d-anchor"
  | "con-d-anchor"
  | "home-m-anchor"
  | "cat-m-anchor"
  | "det-m-anchor"
  | "nos-m-anchor"
  | "con-m-anchor";

type ScreenMeta = {
  label: string;
  bg: string;
  src: string;
  width: number;
  height: number;
};

const SCREEN_META: Record<ScreenId, ScreenMeta> = {
  "home-d": {
    label: "Home — Desktop",
    bg: "#F5F1EA",
    src: "/clients/emanantial/desktop-home.png",
    width: 1440,
    height: 4664,
  },
  "cat-d": {
    label: "Catálogo — Desktop",
    bg: "#F5F1EA",
    src: "/clients/emanantial/desktop-catalogo.png",
    width: 1440,
    height: 3176,
  },
  "det-d": {
    label: "Detalle Libro — Desktop",
    bg: "#FDFAF5",
    src: "/clients/emanantial/desktop-detalle.png",
    width: 1440,
    height: 2926,
  },
  "home-m": {
    label: "Home — Mobile",
    bg: "#F5F1EA",
    src: "/clients/emanantial/mobile-home.png",
    width: 390,
    height: 4046,
  },
  "cat-m": {
    label: "Catálogo — Mobile",
    bg: "#FDFAF5",
    src: "/clients/emanantial/mobile-catalogo.png",
    width: 390,
    height: 3143,
  },
  "det-m": {
    label: "Detalle Libro — Mobile",
    bg: "#FDFAF5",
    src: "/clients/emanantial/mobile-detalle.png",
    width: 390,
    height: 3396,
  },
  "nos-d": {
    label: "Nosotros — Desktop",
    bg: "#F5F1EA",
    src: "/clients/emanantial/desktop-nosotros.png",
    width: 1440,
    height: 3000,
  },
  "con-d": {
    label: "Contacto — Desktop",
    bg: "#FDFAF5",
    src: "/clients/emanantial/desktop-contacto.png",
    width: 1440,
    height: 2800,
  },
  "nos-m": {
    label: "Nosotros — Mobile",
    bg: "#F5F1EA",
    src: "/clients/emanantial/mobile-nosotros.png",
    width: 390,
    height: 3500,
  },
  "con-m": {
    label: "Contacto — Mobile",
    bg: "#FDFAF5",
    src: "/clients/emanantial/mobile-contacto.png",
    width: 390,
    height: 3200,
  },
};

interface DesktopScreenConfig {
  id: ScreenId;
  anchor: AnchorId;
  name: string;
  chromeUrl: string;
  typeLabel: string;
}

interface MobileScreenConfig {
  id: ScreenId;
  anchor: AnchorId;
  name: string;
  tagLabel: string;
}

const desktopScreens: DesktopScreenConfig[] = [
  {
    id: "home-d",
    anchor: "home-d-anchor",
    name: "Home",
    chromeUrl: "emanantial.com.ar",
    typeLabel: "Desktop",
  },
  {
    id: "cat-d",
    anchor: "cat-d-anchor",
    name: "Catálogo",
    chromeUrl: "emanantial.com.ar/shop-catalogo",
    typeLabel: "Desktop",
  },
  {
    id: "det-d",
    anchor: "det-d-anchor",
    name: "Detalle de libro",
    chromeUrl: "emanantial.com.ar/producto/la-sociedad-del-cansancio",
    typeLabel: "Desktop",
  },
  {
    id: "nos-d",
    anchor: "nos-d-anchor",
    name: "Nosotros",
    chromeUrl: "emanantial.com.ar/nosotros",
    typeLabel: "Desktop",
  },
  {
    id: "con-d",
    anchor: "con-d-anchor",
    name: "Contacto",
    chromeUrl: "emanantial.com.ar/contacto",
    typeLabel: "Desktop",
  },
];

const mobileScreens: MobileScreenConfig[] = [
  {
    id: "home-m",
    anchor: "home-m-anchor",
    name: "Home",
    tagLabel: "Mobile",
  },
  {
    id: "cat-m",
    anchor: "cat-m-anchor",
    name: "Catálogo",
    tagLabel: "Mobile",
  },
  {
    id: "det-m",
    anchor: "det-m-anchor",
    name: "Detalle de libro",
    tagLabel: "Mobile",
  },
  {
    id: "nos-m",
    anchor: "nos-m-anchor",
    name: "Nosotros",
    tagLabel: "Mobile",
  },
  {
    id: "con-m",
    anchor: "con-m-anchor",
    name: "Contacto",
    tagLabel: "Mobile",
  },
];

const desktopFabLinks = [
  { anchor: "home-d-anchor" as AnchorId, icon: "🖥", label: "Home" },
  { anchor: "cat-d-anchor" as AnchorId, icon: "📚", label: "Catálogo" },
  { anchor: "det-d-anchor" as AnchorId, icon: "📖", label: "Detalle libro" },
  { anchor: "nos-d-anchor" as AnchorId, icon: "👥", label: "Nosotros" },
  { anchor: "con-d-anchor" as AnchorId, icon: "📧", label: "Contacto" },
];

const mobileFabLinks = [
  { anchor: "home-m-anchor" as AnchorId, icon: "📱", label: "Home" },
  { anchor: "cat-m-anchor" as AnchorId, icon: "📱", label: "Catálogo" },
  { anchor: "det-m-anchor" as AnchorId, icon: "📱", label: "Detalle libro" },
  { anchor: "nos-m-anchor" as AnchorId, icon: "📱", label: "Nosotros" },
  { anchor: "con-m-anchor" as AnchorId, icon: "📱", label: "Contacto" },
];

export default function EManantialPage() {
  const [fabOpen, setFabOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState<AnchorId>("home-d-anchor");
  const fabWrapRef = useRef<HTMLDivElement>(null);

  const handleFabToggle = useCallback(() => {
    setFabOpen((prev) => !prev);
  }, []);

  const scrollToAnchor = useCallback((anchorId: AnchorId) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveAnchor(anchorId);
  }, []);

  const openImageView = useCallback((id: ScreenId) => {
    const info = SCREEN_META[id];
    if (!info) return;

    window.open(info.src, "_blank", "noopener,noreferrer");
  }, []);

  const openFullDesign = useCallback(() => {
    window.open("manantial_landing_redesign.html", "_blank", "noopener,noreferrer");
  }, []);

  useEffect(() => {
    if (!fabOpen) return undefined;

    function handleClickOutside(event: MouseEvent) {
      if (fabWrapRef.current && !fabWrapRef.current.contains(event.target as Node)) {
        setFabOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [fabOpen]);

  return (
    <div className="emanantial-page">
      <header className="site-header">
        <div className="header-logo">Ediciones Manantial</div>
        <a className="header-meta" href="/" aria-label="Hashboxed home">
          Hashboxed - 2026
        </a>
      </header>

      <section className="intro">
        <h1 className="intro-title">
          Diseño <em>Web</em> Manantial
        </h1>
        <p className="intro-sub">
          Rediseño completo del sitio editorial. 8 pantallas — Desktop &amp; Mobile.
        </p>
      </section>

      <div className="divider" />

      <div className="section-label">
        <span className="label-tag">Desktop</span>
        <span className="label-title">Pantallas de escritorio</span>
        <span className="label-rule" />
        <span className="label-count">1440px</span>
      </div>

      <div className="screens-desktop">
        {desktopScreens.map(({ id, anchor, name, chromeUrl, typeLabel }) => (
          <div
            key={id}
            className="screen-item"
            id={anchor}
            onClick={() => openImageView(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openImageView(id);
              }
            }}
          >
            <div className="screen-frame">
              <div className="screen-chrome">
                <div className="chrome-dots">
                  <div className="chrome-dot r" />
                  <div className="chrome-dot y" />
                  <div className="chrome-dot g" />
                </div>
                <div className="chrome-url">{chromeUrl}</div>
              </div>
              <div className="screen-preview">
                <DeviceScreenshot id={id} variant="desktop" />
              </div>
            </div>
            <div className="screen-info">
              <span className="screen-name">{name}</span>
              <span className="screen-type">{typeLabel}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="divider" />

      <div className="section-label">
        <span className="label-tag">Mobile</span>
        <span className="label-title">Pantallas móviles</span>
        <span className="label-rule" />
        <span className="label-count">390px</span>
      </div>

      <div className="screens-mobile">
        {mobileScreens.map(({ id, anchor, name, tagLabel }) => (
          <div
            key={id}
            className="mobile-item"
            id={anchor}
            onClick={() => openImageView(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openImageView(id);
              }
            }}
          >
            <div className="mobile-frame">
              <div className="mobile-notch" />
              <div className="mobile-preview">
                <DeviceScreenshot id={id} variant="mobile" />
              </div>
            </div>
            <div className="mobile-info">
              <span className="mobile-name">{name}</span>
              <span className="mobile-tag">{tagLabel}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="page-footer">Ediciones Manantial · Rediseño Web 2026 · Presentación de Proyecto</div>

      <div className="fab-wrap" ref={fabWrapRef}>
        <div className={`fab-panel${fabOpen ? " open" : ""}`}>
          <div className="fab-section-title">Desktop</div>
          <div className="fab-links">
            {desktopFabLinks.map(({ anchor, icon, label }) => (
              <button
                key={anchor}
                type="button"
                className={`fab-link${activeAnchor === anchor ? " active" : ""}`}
                onClick={(event) => {
                  event.stopPropagation();
                  scrollToAnchor(anchor);
                }}
              >
                <div className="fab-link-icon">{icon}</div>
                {label}
              </button>
            ))}
          </div>
          <div className="fab-section-title">Mobile</div>
          <div className="fab-links">
            {mobileFabLinks.map(({ anchor, icon, label }) => (
              <button
                key={anchor}
                type="button"
                className={`fab-link${activeAnchor === anchor ? " active" : ""}`}
                onClick={(event) => {
                  event.stopPropagation();
                  scrollToAnchor(anchor);
                }}
              >
                <div className="fab-link-icon">{icon}</div>
                {label}
              </button>
            ))}
          </div>
        </div>
        <button type="button" className={`fab-btn${fabOpen ? " open" : ""}`} onClick={handleFabToggle}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="10" r="2" fill="#1A1714" />
            <circle cx="10" cy="10" r="2" fill="#1A1714" />
            <circle cx="15" cy="10" r="2" fill="#1A1714" />
          </svg>
        </button>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0E0D0B;
          --surface: #161410;
          --card: #1C1A16;
          --border: rgba(255,255,255,0.07);
          --border-hover: rgba(255,255,255,0.14);
          --cream: #F5F1EA;
          --parchment: #EDE8DE;
          --dark: #1A1714;
          --accent: #C5A96B;
          --accent2: #9A7E45;
          --text: #E8E3DA;
          --muted: #7A7268;
          --serif: 'EB Garamond', Georgia, serif;
          --display: 'Cormorant Garamond', Georgia, serif;
          --sans: 'DM Sans', sans-serif;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: var(--sans);
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          overflow-x: hidden;
        }

        .emanantial-page {
          min-height: 100vh;
          padding-bottom: 8rem;
        }

        .site-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 3rem; height: 56px;
          background: rgba(14,13,11,0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .header-logo {
          font-family: var(--display);
          font-size: 17px; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--cream);
        }
        .header-meta {
          font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--muted); text-decoration: none;
          transition: color 0.2s ease;
        }
        .header-meta:hover,
        .header-meta:focus-visible {
          color: var(--cream);
        }

        .intro {
          padding: 120px 3rem 60px;
          display: flex; flex-direction: column; align-items: flex-start;
          gap: 1rem;
        }
        .intro-title {
          font-family: var(--display);
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 300; line-height: 1.1;
          color: var(--cream);
          text-align: left;
        }
        .intro-title em {
          font-style: italic; color: var(--accent);
        }
        .intro-sub {
          font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--muted); line-height: 1.8; text-align: left;
        }

        .divider {
          height: 1px; background: var(--border);
          margin: 0 3rem;
        }

        .section-label {
          padding: 3.5rem 3rem 1.5rem;
          display: flex; align-items: center; gap: 1.5rem;
        }
        .label-tag {
          font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase;
          color: var(--accent); padding: 4px 10px;
          border: 1px solid rgba(197,169,107,0.3);
        }
        .label-title {
          font-family: var(--display);
          font-size: 1.5rem; font-weight: 400; color: var(--cream);
        }
        .label-rule { flex: 1; height: 1px; background: var(--border); }
        .label-count {
          font-size: 11px; color: var(--muted); letter-spacing: 0.1em;
        }

        .screens-desktop {
          padding: 1rem 3rem 4rem;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
        }

        .screen-item {
          display: flex; flex-direction: column; gap: 1rem;
          cursor: pointer;
        }
        .screen-frame {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
          transition: border-color 0.3s, transform 0.3s;
          background: var(--card);
        }
        .screen-item:hover .screen-frame {
          border-color: var(--border-hover);
          transform: translateY(-4px);
        }
        .screen-frame::before {
          content: '';
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(to bottom, rgba(197,169,107,0) 70%, rgba(14,13,11,0.3) 100%);
          pointer-events: none;
        }
        .screen-chrome {
          background: #2A2724;
          padding: 8px 12px;
          display: flex; align-items: center; gap: 8px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .chrome-dots { display: flex; gap: 5px; }
        .chrome-dot {
          width: 8px; height: 8px; border-radius: 50%;
        }
        .chrome-dot.r { background: #FF5F57; }
        .chrome-dot.y { background: #FFBD2E; }
        .chrome-dot.g { background: #28C840; }
        .chrome-url {
          flex: 1; text-align: center;
          font-size: 10px; color: rgba(255,255,255,0.25);
          font-family: var(--sans);
          background: rgba(255,255,255,0.04);
          border-radius: 4px; padding: 3px 10px;
        }
        .screen-preview {
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
          position: relative;
          background: var(--card);
        }

        .device-screenshot {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: top center;
          background-repeat: no-repeat;
        }

        .screen-info {
          display: flex; align-items: baseline; justify-content: space-between;
        }
        .screen-name {
          font-size: 13px; color: var(--text); font-weight: 400;
        }
        .screen-type {
          font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--muted);
        }

        .screens-mobile {
          padding: 1rem 3rem 6rem;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem;
        }
        .mobile-item {
          display: flex; flex-direction: column; gap: 1rem;
          cursor: pointer;
        }
        .mobile-frame {
          position: relative;
          margin: 0 auto;
          width: 100%;
          max-width: 260px;
          border-radius: 28px;
          border: 8px solid #2A2724;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 40px 80px rgba(0,0,0,0.6);
          transition: transform 0.3s;
          background: var(--card);
        }
        .mobile-item:hover .mobile-frame {
          transform: translateY(-6px) scale(1.01);
        }
        .mobile-notch {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 80px; height: 22px;
          background: #2A2724;
          border-radius: 0 0 14px 14px; z-index: 10;
        }
        .mobile-preview {
          width: 100%;
          aspect-ratio: 9/19.5;
          overflow: hidden;
          position: relative;
          background: var(--card);
        }
        .mobile-info {
          display: flex; align-items: baseline; justify-content: space-between;
          padding: 0 4px;
        }
        .mobile-name {
          font-size: 13px; color: var(--text); font-weight: 400;
        }
        .mobile-tag {
          font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--muted);
        }

        .fab-wrap {
          position: fixed; bottom: 2rem; right: 2rem; z-index: 200;
        }
        .fab-panel {
          position: absolute; bottom: 64px; right: 0;
          width: 280px;
          background: rgba(22,20,16,0.96);
          backdrop-filter: blur(24px);
          border: 1px solid var(--border-hover);
          border-radius: 16px;
          padding: 20px;
          opacity: 0; pointer-events: none;
          transform: translateY(10px) scale(0.97);
          transition: opacity 0.25s, transform 0.25s;
          box-shadow: 0 32px 64px rgba(0,0,0,0.7);
        }
        .fab-panel.open {
          opacity: 1; pointer-events: all;
          transform: translateY(0) scale(1);
        }
        .fab-section-title {
          font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--muted); margin-bottom: 10px; margin-top: 16px;
        }
        .fab-section-title:first-child { margin-top: 0; }
        .fab-links {
          display: flex; flex-direction: column; gap: 2px;
        }
        .fab-link {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 10px;
          border-radius: 8px;
          font-size: 13px; color: rgba(232,227,218,0.7);
          text-decoration: none; cursor: pointer;
          transition: background 0.15s, color 0.15s;
          border: none; background: none; width: 100%; text-align: left;
        }
        .fab-link:hover { background: rgba(255,255,255,0.05); color: var(--text); }
        .fab-link.active { background: rgba(197,169,107,0.1); color: var(--accent); }
        .fab-link-icon {
          width: 28px; height: 28px;
          background: rgba(255,255,255,0.04);
          border-radius: 6px;
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; flex-shrink: 0;
        }
        .fab-link.active .fab-link-icon {
          background: rgba(197,169,107,0.12);
          border-color: rgba(197,169,107,0.3);
        }
        .fab-divider { height: 1px; background: var(--border); margin: 14px 0 0; }
        .fab-btn {
          width: 50px; height: 50px;
          border-radius: 50%;
          background: var(--accent);
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          margin-left: auto;
          box-shadow: 0 8px 24px rgba(197,169,107,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
          position: relative; z-index: 1;
        }
        .fab-btn:hover { transform: scale(1.06); box-shadow: 0 12px 32px rgba(197,169,107,0.45); }
        .fab-btn svg { transition: transform 0.3s; }
        .fab-btn.open svg { transform: rotate(45deg); }

        .lightbox { display: none; }

        .page-footer {
          text-align: center; padding: 3rem; border-top: 1px solid var(--border);
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted);
        }

        @media (max-width: 1024px) {
          .screens-desktop, .screens-mobile {
            grid-template-columns: 1fr; gap: 2rem;
          }
          .intro { flex-direction: column; align-items: flex-start; text-align: left; }
          .intro-sub { text-align: left; }
        }
      `}</style>
    </div>
  );
}

type DeviceScreenshotProps = {
  id: ScreenId;
  variant: "desktop" | "mobile";
};

function DeviceScreenshot({ id, variant }: DeviceScreenshotProps) {
  const meta = SCREEN_META[id];

  if (!meta) {
    return null;
  }

  return (
    <div
      className={`device-screenshot device-screenshot-${variant}`}
      aria-hidden
      style={{
        backgroundColor: meta.bg,
        backgroundImage: `url(${meta.src})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
