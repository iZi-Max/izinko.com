import React from 'react';

const RetroLogo = ({ scale = 1, className = "", theme = "light" }) => {
  // Determine colors based on theme
  const isDark = theme === 'dark';

  const colors = {
    text: isDark ? '#ffffff' : '#0a0a0a',
    cyan: isDark ? '#00ffff' : '#00bcd4',
    red: isDark ? '#ff004c' : '#ff0055',
    blend: isDark ? 'exclusion' : 'multiply',
    // Logic update: Since scanlines are now INSIDE the letters, we need contrast.
    // Dark mode (White text) -> Black lines dim it.
    // Light mode (Black text) -> White lines cut through it (like paper grain).
    scanline: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-visible ${className}`}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'left center'
      }}
    >
      <style>{`
        @keyframes shiver {
          0% { transform: translate(0,0); }
          20% { transform: translate(-1px, 0); }
          40% { transform: translate(1px, 0); }
          60% { transform: translate(0, 1px); }
          80% { transform: translate(0, -1px); }
          100% { transform: translate(0,0); }
        }

        .retro-glitch-wrapper {
          position: relative;
          font-family: 'Arial Black', 'Helvetica Neue', sans-serif;
          font-weight: 900;
          font-size: 2.5rem;
          line-height: 1; 
          letter-spacing: -0.05em;
          text-transform: lowercase;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glitch-text-container {
            position: relative;
            display: inline-block;
            transform: translateY(-0.125em); /* Optical centering */
        }

        /* Shared Layer Styles */
        .glitch-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.9;
          
          /* CLIP LOGIC: Apply scanlines to text shape only */
          background-image: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 1px,
            ${colors.scanline} 1px,
            ${colors.scanline} 2px
          );
          background-size: 100% 2px;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent; /* Hide default text fill so background shows */
        }

        .glitch-layer.cyan {
          background-color: ${colors.cyan}; /* Sets the layer color */
          transform: translate(-2px, 0);
          mix-blend-mode: ${colors.blend};
          animation: shiver 3s infinite reverse;
        }

        .glitch-layer.red {
          background-color: ${colors.red};
          transform: translate(2px, 0);
          mix-blend-mode: ${colors.blend};
          animation: shiver 2s infinite linear;
        }

        .glitch-layer.main {
          background-color: ${colors.text};
          position: relative;
          z-index: 10;
          mix-blend-mode: normal;
        }
      `}</style>

      {/* Main Glitch Text */}
      <div className="retro-glitch-wrapper z-20">
        <div className="glitch-text-container">
          <div className="glitch-layer red">max</div>
          <div className="glitch-layer cyan">max</div>
          <div className="glitch-layer main">max</div>
        </div>
      </div>
    </div>
  );
};

export default RetroLogo;