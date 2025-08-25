// components/Policy/Policy.jsx

import styles from "./policy.module.scss";

export default function Policy() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.glowA} />
      <div className={styles.glowB} />

      <section className={styles.container}>
        <h1 className={styles.title}>Privacy&nbsp;Policy</h1>
        <p className={styles.date}>Last updated: May&nbsp;2025</p>

        {/* ───────── 1. introduction ───────── */}
        <h2>1.  Who We Are</h2>
        <p>
          This website is operated by <strong>Beauty&nbsp;Academy&nbsp;LLC</strong> (“<em>we</em>, <em>our</em>,
          <em>us</em>"). We provide online and onsite beauty-education courses
          throughout the United&nbsp;States.
        </p>

        {/* ───────── 2. data we collect ─────── */}
        <h2>2.  Information We Collect</h2>
        <ul>
          <li>
            <strong>Full Name</strong> &mdash; to personalize communication and
            enrollment documents.
          </li>
          <li>
            <strong>Email Address</strong> &mdash; for course materials,
            confirmations and marketing updates (with opt-out).
          </li>
          <li>
            <strong>Phone&nbsp;Number</strong> &mdash; for time-sensitive
            reminders (class rescheduling, payment issues, etc.).
          </li>
          <li>
            <strong>Course Interests / History</strong> &mdash; which programs
            you viewed, requested or purchased, so we can recommend relevant
            content and provide tailored support.
          </li>
          <li>
            <strong>Site Preferences</strong> &mdash; non-personalized settings
            (e.g., theme, language, last viewed modules) stored locally in your
            browser’s <code>localStorage</code> to enhance your experience.
          </li>
        </ul>

        {/* ───────── 3. why ─────────────────── */}
        <h2>3.  How & Why We Use It</h2>
        <p>We process the data above in order to:</p>
        <ol>
          <li>create and manage your student account;</li>
          <li>send invoices, schedules and course materials;</li>
          <li>answer questions and provide customer service;</li>
          <li>improve our curriculum and marketing campaigns;</li>
          <li>
            remember your site preferences (theme, language, last viewed
            modules) via <code>localStorage</code> so you don’t have to set them
            on each visit;
          </li>
          <li>comply with U.S. laws, payment processing and tax regulations.</li>
        </ol>

        {/* ───────── 4. sharing ─────────────── */}
        <h2>4.  Sharing & Disclosure</h2>
        <p>
          We <strong>never sell</strong> your personal data. We share it only with:
        </p>
        <ul>
          <li>PCI-compliant payment processors (e.g., Stripe);</li>
          <li>email/SMS platforms to deliver messages you’ve opted in to;</li>
          <li>
            government agencies when required by law, subpoena or court order.
          </li>
        </ul>

        {/* ───────── 5. retention ───────────── */}
        <h2>5.  Retention</h2>
        <p>
          Records are kept for as long as you maintain an account or up to&nbsp;
          <strong>5 years</strong> after your last interaction, whichever is
          longer, unless a shorter period is required by law.
        </p>

        {/* ───────── 6. your rights ─────────── */}
        <h2>6.&nbsp; Your Privacy Rights (U.S.)</h2>
        <p>
          Depending on your state (e.g., California&nbsp;CCPA/CPRA, Colorado&nbsp;CPA,
          Virginia&nbsp;VCDPA) you may have the right to:
        </p>
        <ul>
          <li>request a copy of the personal data we hold about you;</li>
          <li>ask us to correct or delete that data;</li>
          <li>opt-out of marketing communications at any time;</li>
          <li>limit or object to certain types of processing.</li>
        </ul>
        <p>
          To exercise any of these rights, email us at&nbsp;
          <a href="mailto:privacy@beautyacademy.com">privacy@beautyacademy.com</a>.
        </p>

        {/* ───────── 7. security ───────────── */}
        <h2>7.  Security</h2>
        <p>
          We use TLS encryption, secure server environments and role-based
          access controls. No method of transmission is 100 % secure, but we
          follow industry best practices to protect your data.
        </p>

        {/* ───────── 8. children ───────────── */}
        <h2>8.  Children</h2>
        <p>
          Our services are not directed to minors under 13. We do not knowingly
          collect personal information from children. If you believe a child has
          provided us data, please contact us immediately.
        </p>

        {/* ───────── 9. changes ─────────────── */}
        <h2>9.  Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of significant changes by posting the revised policy on this page
          and, if appropriate, by email.
        </p>

        {/* ───────── 10. contact ───────────── */}
        <h2>10.  Contact Us</h2>
        <p>
          Questions? Email us at&nbsp;
          <a href="mailto:privacy@beautyacademy.com">privacy@beautyacademy.com</a>&nbsp;
          or write to Beauty Academy LLC, 123 Blush Ave, Miami FL 33101 USA.
        </p>
      </section>
    </main>
  );
}