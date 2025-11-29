export default function Dashboard() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ color: '#dc2626', marginBottom: '2rem', textAlign: 'center' }}>
        Admin Dashboard
      </h1>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#111', padding: '2rem', borderRadius: '1rem' }}>
          <h2 style={{ color: '#16a34a' }}>Upload 4K Video / Album</h2>
          <p>Drag-drop MP4 or ZIP</p>
          <button style={{ backgroundColor: '#16a34a', color: 'white', padding: '1rem', border: 'none', borderRadius: '0.5rem', marginTop: '1rem' }}>
            Upload Now
          </button>
        </div>
        <div style={{ backgroundColor: '#111', padding: '2rem', borderRadius: '1rem' }}>
          <h2 style={{ color: '#9333ea' }}>Prices</h2>
          <p>Sub: $19.99/mo</p>
          <p>PPV: $12.99</p>
          <button style={{ backgroundColor: '#9333ea', color: 'white', padding: '1rem', border: 'none', borderRadius: '0.5rem', marginTop: '1rem' }}>
            Edit Prices
          </button>
        </div>
      </div>
      <p style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="/" style={{ color: '#3b82f6' }}>← Back to Home</a>
      </p>
    </div>
  );
}
