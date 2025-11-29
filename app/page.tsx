export default function Home() {
  return (
    <html style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <body style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', margin: 0, padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '4rem', color: '#dc2626', marginBottom: '1rem', textAlign: 'center' }}>
          JoePusherPrivateVault
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px' }}>
          Exclusive 4K Videos & Photo Albums – Crypto Only
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <a href="/subscribe" style={{ backgroundColor: '#16a34a', color: '#fff', padding: '1rem 2rem', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
            Subscribe $19.99/mo
          </a>
          <a href="/ppv" style={{ backgroundColor: '#9333ea', color: '#fff', padding: '1rem 2rem', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
            PPV Videos $12.99+
          </a>
        </div>
        <a href="/admin" style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '0.75rem 1.5rem', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '1rem', fontWeight: 'bold' }}>
          Admin Login
        </a>
      </body>
    </html>
  )
}
