export default function PPV() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#dc2626', marginBottom: '2rem' }}>
        PPV Videos – $12.99 Each
      </h1>
      <p style={{ marginBottom: '1rem' }}>
        Buy access to exclusive 4K videos (crypto only)
      </p>
      <button style={{ backgroundColor: '#9333ea', color: '#fff', padding: '1rem 2rem', border: 'none', borderRadius: '0.5rem', cursor: 'pointer' }}>
        Buy Now with Crypto
      </button>
      <a href="/" style={{ marginTop: '1rem', color: '#3b82f6', textDecoration: 'none' }}>
        Back to Home
      </a>
    </div>
  );
}
