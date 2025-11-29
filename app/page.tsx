export default function Home() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '4rem', color: '#dc2626', marginBottom: '1rem' }}>
        JoePusherPrivateVault
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '3rem' }}>
        Exclusive 4K Videos & Photo Albums – Crypto Only
      </p>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <a href="/subscribe" style={{ backgroundColor: '#16a34a', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 'bold' }}>
          Subscribe $19.99/mo
        </a>
        <a href="/ppv" style={{ backgroundColor: '#9333ea', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 'bold' }}>
          PPV Videos $12.99+
        </a>
        <a href="/admin" style={{ backgroundColor: '#3b82f6', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', textDecoration: 'none' }}>
          Admin Login
        </a>
      </div>
    </div>
  )
}
