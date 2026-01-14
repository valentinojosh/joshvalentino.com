import React, { useEffect, useRef, useState } from 'react';
import Fade from '@material-ui/core/Fade';

import '../Styles/Contact.css';
import { PURPLE } from '../constants';

const EMAIL = 'valentinojosh48@gmail.com';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const copyEmail = async () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch (e) {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = EMAIL;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
    }

    timeoutRef.current = setTimeout(() => setCopied(false), 1400);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
      <div className="contact-container" style={{ position: 'relative' }}>
        {/* Overlay toast (does not affect layout) */}
        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
              position: 'fixed',
              left: '50%',
              bottom: 24,
              transform: 'translateX(-50%)',
              zIndex: 9999,
              pointerEvents: 'none',
              opacity: copied ? 1 : 0,
              transition: 'opacity 180ms ease',
            }}
        >
          <div
              role="status"
              style={{
                background: 'rgba(15, 15, 25, 0.9)',
                border: '1px solid rgba(167, 139, 250, 0.35)',
                color: 'rgba(240, 240, 255, 0.95)',
                padding: '10px 14px',
                borderRadius: 10,
                boxShadow: '0 12px 28px rgba(0,0,0,0.35)',
                fontSize: 14,
                letterSpacing: 0.2,
              }}
          >
            Email copied to clipboard
          </div>
        </div>

        <Fade in timeout={{ enter: 1200 }}>
          <div className="contact-content">
            <p>
              Have an interesting opportunity, project, or just want to chat?
              <br />
              <br />
              Feel free to shoot me an{' '}
              <button
                  type="button"
                  onClick={copyEmail}
                  style={{
                    color: PURPLE,
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    font: 'inherit',
                  }}
                  aria-label={`Copy email address ${EMAIL} to clipboard`}
                  title="Copy email to clipboard"
              >
                email
              </button>
              !

              <a
                  href={`mailto:${EMAIL}`}
                  style={{ color: PURPLE, opacity: 0.7, marginLeft: 8 }}
                  title="Open your email client"
              >
                (open)
              </a>
            </p>
          </div>
        </Fade>
      </div>
  );
};

export default Contact;
