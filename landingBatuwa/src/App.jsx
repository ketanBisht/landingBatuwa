import './index.css'
import './App.css'

const CHROME_URL =
  'https://chromewebstore.google.com/detail/bmcinobeebahpnbpgjphaengofjiigai?utm_source=item-share-cb'

/* ─── Static data ─────────────────────────────── */
const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18M3 6h18M3 18h18" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    label: 'Multi-chain',
    title: 'Solana & Ethereum',
    desc: 'One seed phrase, two ecosystems. HD wallet derivation for both mainnet and testnets.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: 'Self-custody',
    title: 'Your keys, your coins',
    desc: 'Private keys never leave your device. Encrypted locally and fully under your control.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    label: 'Testnet-ready',
    title: 'Devnet + Sepolia',
    desc: 'Optimised for dApp development cycles. Spin up wallets, test transactions instantly.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    label: 'Browser-native',
    title: 'Chrome Extension',
    desc: 'Instantly accessible from your browser toolbar. No separate app or seed export needed.',
  },
]

const NETWORKS = [
  { name: 'Solana', tag: 'Devnet', color: '#9945FF', glow: 'rgba(153,69,255,0.4)' },
  { name: 'Ethereum', tag: 'Sepolia', color: '#38BDF8', glow: 'rgba(56,189,248,0.4)' },
]

/* ─── Sub-components ──────────────────────────── */

function Nav() {
  return (
    <nav className="nav-wrap">
      <div className="nav-inner">
        <a href="#" className="brand" aria-label="Batuwa home">
          <img src="/logo.svg" alt="" className="brand-logo" aria-hidden="true" />
          <span className="brand-name">BATUWA</span>
        </a>

        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#networks" className="nav-link">Networks</a>
          <a
            href={CHROME_URL}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            Add to Chrome
          </a>
        </div>
      </div>
    </nav>
  )
}

function HeroOrbs() {
  return (
    <div className="hero-orbs" aria-hidden="true">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
    </div>
  )
}

function WalletMockup() {
  return (
    <div className="mockup-wrap" aria-hidden="true">
      <div className="mockup-card">
        {/* Top bar */}
        <div className="mock-topbar">
          <span className="mock-dot" style={{ background: '#ff5f57' }} />
          <span className="mock-dot" style={{ background: '#febc2e' }} />
          <span className="mock-dot" style={{ background: '#28c840' }} />
        </div>

        {/* Chain pill */}
        <div className="mock-chain-row">
          <span className="mock-chain-pill mock-chain-sol">◎ Solana</span>
          <span className="mock-chain-pill mock-chain-eth">Ξ Ethereum</span>
        </div>

        {/* Balance */}
        <div className="mock-balance-section">
          <p className="mock-label">Total Balance</p>
          <p className="mock-balance">$0.00</p>
          <p className="mock-sub">Devnet · Sepolia</p>
        </div>

        {/* Actions */}
        <div className="mock-actions">
          {['Send', 'Receive', 'Swap'].map(a => (
            <button key={a} className="mock-action-btn">{a}</button>
          ))}
        </div>

        {/* Tx rows */}
        <div className="mock-tx-list">
          {[
            { label: 'SOL Airdrop', val: '+2.0 SOL', t: '10:32 AM', c: '#9945FF' },
            { label: 'ETH Transfer', val: '-0.01 ETH', t: '10:15 AM', c: '#38BDF8' },
          ].map(tx => (
            <div key={tx.label} className="mock-tx-row">
              <span className="mock-tx-dot" style={{ background: tx.c }} />
              <div className="mock-tx-info">
                <span className="mock-tx-label">{tx.label}</span>
                <span className="mock-tx-time">{tx.t}</span>
              </div>
              <span className="mock-tx-val" style={{ color: tx.c }}>{tx.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section">
      <HeroOrbs />
      <div className="hero-content">
        <div className="hero-text">
          <span className="kicker">Open-source · HD Wallet · Web3</span>
          <h1 className="hero-h1">
            Your crypto.<br />
            <span className="gradient-text">Your rules.</span>
          </h1>
          <p className="hero-lead">
            Batuwa is a minimal HD wallet extension for Solana and Ethereum.
            Self-custody, testnet-ready, and built for developers who move fast.
          </p>
          <div className="hero-actions">
            <a
              href={CHROME_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Add to Chrome &mdash; Free
            </a>
            <a href="#features" className="btn-ghost">See features ↓</a>
          </div>
          <ul className="hero-chips" aria-label="Highlights">
            <li>Non-custodial</li>
            <li>BIP-39 + BIP-44</li>
            <li>Devnet ready</li>
            <li>Open source</li>
          </ul>
        </div>
        <WalletMockup />
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="section features-section">
      <div className="section-header">
        <span className="section-kicker">What you get</span>
        <h2 className="section-title">Everything you need, nothing you don't.</h2>
      </div>
      <div className="features-grid">
        {FEATURES.map(f => (
          <article key={f.title} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <span className="feature-label">{f.label}</span>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Networks() {
  return (
    <section id="networks" className="section networks-section">
      <div className="section-header">
        <span className="section-kicker">Network support</span>
        <h2 className="section-title">Built for testing. Ready for mainnet.</h2>
      </div>
      <div className="networks-grid">
        {NETWORKS.map(n => (
          <div key={n.name} className="network-card" style={{ '--glow': n.glow, '--accent': n.color }}>
            <div className="network-orb" style={{ background: n.color }} />
            <div className="network-info">
              <p className="network-name">{n.name}</p>
              <span className="network-tag">{n.tag}</span>
            </div>
            <div className="network-status">
              <span className="status-dot" />
              Live
            </div>
          </div>
        ))}
      </div>

      <div className="networks-note">
        <span>🔒</span>
        <p>Mainnet support coming soon. All wallet keys are generated client-side and never transmitted.</p>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <div className="cta-orb" aria-hidden="true" />
        <span className="section-kicker" style={{ color: '#7dd3fc' }}>Get started</span>
        <h2 className="cta-title">Own your Web3 wallet today.</h2>
        <p className="cta-lead">
          Install Batuwa in seconds. No sign-up, no email — just a seed phrase and you're in.
        </p>
        <a
          href={CHROME_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-primary btn-large"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
          </svg>
          Install Free on Chrome
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#" className="brand" aria-label="Batuwa home">
          <img src="/logo.svg" alt="" className="brand-logo" aria-hidden="true" />
          <span className="brand-name">BATUWA</span>
        </a>
        <p className="footer-copy">
          © {new Date().getFullYear()} Batuwa · Open-source · MIT License
        </p>
        <div className="footer-links">
          <a href="https://github.com/ketanBisht/batuwa" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          <a href={CHROME_URL} target="_blank" rel="noreferrer" className="footer-link">Chrome Store</a>
        </div>
      </div>
    </footer>
  )
}

/* ─── App ─────────────────────────────────────── */
export default function App() {
  return (
    <div className="page-wrap">
      <Nav />
      <Hero />
      <Features />
      <Networks />
      <CTA />
      <Footer />
    </div>
  )
}
