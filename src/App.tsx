import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import { npoConfig } from './config/npo.config';
import { tertiaryConfig } from './config/tertiary.config';

/**
 * Multi-audience landing page demo.
 *
 * Two configurations live side-by-side, both rendered by the same <LandingPage> engine:
 *   - npoConfig       (NPO / Foundation / CSR)
 *   - tertiaryConfig  (Tertiary Institutions / SRCs / Bursary Funders)
 *
 * For preview, switch by URL hash:
 *   #/npo       -> NPO page (default)
 *   #/tertiary  -> Tertiary & SRC page
 *
 * When folding into the main corporate site, replace this with a router:
 *   <Routes>
 *     <Route path="/schools"  element={<LandingPage config={schoolsConfig} />} />
 *     <Route path="/npo"      element={<LandingPage config={npoConfig} />} />
 *     <Route path="/tertiary" element={<LandingPage config={tertiaryConfig} />} />
 *   </Routes>
 */
export default function App() {
  const [audience, setAudience] = useState<'npo' | 'tertiary'>('npo');

  useEffect(() => {
    const updateFromHash = () => {
      const h = window.location.hash.toLowerCase();
      if (h.includes('tertiary') || h.includes('src')) setAudience('tertiary');
      else if (h.includes('npo') || h.includes('csr')) setAudience('npo');
    };
    updateFromHash();
    window.addEventListener('hashchange', updateFromHash);
    return () => window.removeEventListener('hashchange', updateFromHash);
  }, []);

  const config = audience === 'tertiary' ? tertiaryConfig : npoConfig;
  return <LandingPage config={config} />;
}
