export default function Dashboard() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#dc2626', marginBottom: '2rem', textAlign: 'center' }}>
        Admin Dashboard – JoePusherPrivateVault
      </h1>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ backgroundColor: '#111', padding: '2rem', borderRadius: '1rem', width: '300px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#dc2626', marginBottom: '1rem' }}>
            Upload 4K Video/Album
          </h2>
          <p style={{ marginBottom: '1rem' }}>Drag-drop MP4 or ZIP (Bunny.net auto-optimizes)</p>
          <button style={{ backgroundColor: '#16a34a', color: '#fff', padding: '1rem', border: 'none', borderRadius: '0.5rem', cursor: 'pointer' }}>
            Upload Now
          </button>
        </div>
        <div style={{ backgroundColor: '#111', padding: '2rem', borderRadius: '1rem', width: '300px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#dc2626', marginBottom: '1rem' }}>
            Set Prices
          </h2>
          <p>Membership: $19.99/mo</p>
          <p>PPV Video: $12.99</p>
          <p>Album: $7.99</p>
          <button style={{ backgroundColor: '#9333ea', color: '#fff', padding: '1rem', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', marginTop: '1rem' }}>
            Edit Prices
          </button>
        </div>
      </div>
      <button style={{ backgroundColor: '#dc2626', color: '#fff', padding: '1rem', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', marginTop: '2rem' }}>
        Logout
      </button>
    </div>
  );
}
