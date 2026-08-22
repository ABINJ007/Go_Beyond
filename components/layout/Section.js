import styles from '../../styles/Section.module.css';

export default function Section({
  id,
  className = '',
  containerClassName = '',
  children,
  ariaLabelledby,
  centered = false,
}) {
  const sectionClasses = [
    styles.section,
    'page-section',
    centered ? styles.centered : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const containerClasses = [styles.container, containerClassName].filter(Boolean).join(' ');

  return (
    <section id={id} className={sectionClasses} aria-labelledby={ariaLabelledby}>
      <div className={containerClasses}>{children}</div>
    </section>
  );
}
