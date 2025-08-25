// -----------------------------------------------------------------------------
// FILE: src/App.jsx
// LOCATION: /src/App.jsx
// -----------------------------------------------------------------------------

import React from 'react';
import { SisenseContextProvider, WidgetById } from '@sisense/sdk-ui';

// --- Configuration ---
const SISENSE_URL = "https://aesandbox.sisensepoc.com"; // Your provided Sisense URL
const SISENSE_WAT = import.meta.env.VITE_SISENSE_WAT; // Reads the WAT from Vercel Environment Variables

function App() {
  // FIX: Check if the Web Access Token exists. If not, show an error.
  if (!SISENSE_WAT) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', color: 'red', textAlign: 'center' }}>
        <h1>Configuration Error</h1>
        <p>The Sisense Web Access Token is missing.</p>
        <p>Please ensure the VITE_SISENSE_WAT environment variable is set in your Vercel project settings.</p>
      </div>
    );
  }

  return (
    // The SisenseContextProvider connects your app to your Sisense instance
    <SisenseContextProvider
      url={SISENSE_URL}
      // FIX: Explicitly define the authentication method
      auth={{
        wat: SISENSE_WAT
      }}
    >
      {/* Main container for the dashboard layout */}
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f6f9' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Retensa Turnover Analytics</h1>

        {/* Grid layout for the charts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>

          {/* Widget 1: Turnover Rate vs. Annualized Rate */}
          <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '1rem' }}>Turnover Rate vs. Annualized Rate</h2>
            <WidgetById
              dashboardOid="68a65b283381e1a0b17fa86f"
              widgetOid="68a8abbe3381e1a0b17fa8d1"
              styleOptions={{ height: 450 }}
            />
          </div>

          {/* Widget 2: Voluntary Turnover by Tenure */}
          <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '1rem' }}>Voluntary Turnover by Tenure</h2>
             <WidgetById
              dashboardOid="68a65b283381e1a0b17fa86f"
              widgetOid="68a8a9a93381e1a0b17fa8ca" // IMPORTANT: Replace this placeholder
              styleOptions={{ height: 450 }}
            />
          </div>

        </div>
      </div>
    </SisenseContextProvider>
  );
}

export default App;


