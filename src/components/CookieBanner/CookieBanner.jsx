'use client';

import { useEffect, useState } from 'react';
import styles from './CookieBanner.module.scss'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split(';').map(c => c.trim());
    const consentCookie = cookies.find(c => c.startsWith('consent='));
    if (!consentCookie) {
      setVisible(true);
    }
  }, []);

  const setConsent = (value) => {
    document.cookie = `consent=${value}; path=/; max-age=${60 * 60 * 24 * 365}`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <p className={styles.text}>
        We use cookies to improve the website experience. Do you agree?
      </p>
      <div className={styles.buttons}>
        <button
          onClick={() => setConsent('accepted')}
          className={`${styles.button} ${styles.accept}`}
        >
          Accept
        </button>
        <button
          onClick={() => setConsent('rejected')}
          className={`${styles.button} ${styles.reject}`}
        >
          Reject
        </button>
      </div>
    </div>
  );
}
