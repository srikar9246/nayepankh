import useReveal from '../hooks/useReveal';

const GOVT_IMG = 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-15-at-9.17.30-pm-AVLPXr08jETq2nyv.jpeg';

export default function Impact() {
  const headerRef = useReveal();
  const largeRef = useReveal('stagger-1');
  const small1Ref = useReveal('stagger-2');
  const small2Ref = useReveal('stagger-3');

  return (
    <section className="impact-section">
      <div className="container-max">
        {/* Header */}
        <div ref={headerRef} className="impact-header reveal">
          <h2 className="font-headline-lg">Driven by Impact</h2>
          <p className="font-body-md">
            India's Biggest Student led NGO making a tangible difference every
            single day.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Large Feature */}
          <div
            ref={largeRef}
            className="bento-feature-large bento-card reveal stagger-1"
          >
            <img className="bento-bg-img" src={GOVT_IMG} alt="Government registration ceremony" />
            <div className="bento-gradient-overlay" />
            <div className="bento-icon-bg">
              <span className="material-symbols-outlined">corporate_fare</span>
            </div>
            <div className="bento-card-content">
              <h3 className="font-headline-md">Government Recognition</h3>
              <p className="font-body-md">
                Fully registered under the UP Government with 80G and 12A
                status, ensuring 100% transparency and tax benefits for our
                donors.
              </p>
            </div>
          </div>

          {/* Small Feature 1 */}
          <div
            ref={small1Ref}
            className="bento-small bento-card bento-primary reveal stagger-2"
          >
            <span className="material-symbols-outlined">diversity_3</span>
            <div>
              <h4 className="font-headline-md">Student Led</h4>
              <p className="font-body-md">
                Empowered by youth energy across multiple cities.
              </p>
            </div>
          </div>

          {/* Small Feature 2 */}
          <div
            ref={small2Ref}
            className="bento-small bento-card bento-secondary reveal stagger-3"
          >
            <span className="material-symbols-outlined">school</span>
            <div>
              <h4 className="font-headline-md">Education First</h4>
              <p className="font-body-md">
                Transforming lives through knowledge and skill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
