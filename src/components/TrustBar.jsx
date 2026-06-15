const TRUST_ITEMS = [
  { icon: 'verified', label: 'UP Government Registered' },
  { icon: 'receipt_long', label: '80G & 12A Certified' },
  { icon: 'volunteer_activism', label: 'Transparency First' },
];

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container-max">
        <div className="trust-bar-inner">
          {TRUST_ITEMS.map((item, i) => (
            <div key={item.icon} style={{ display: 'contents' }}>
              <div className="trust-item">
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="font-label-caps">{item.label}</span>
              </div>
              {i < TRUST_ITEMS.length - 1 && <div className="trust-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
