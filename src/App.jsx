// -----------------------------------------------------------------------------
// FILE: src/App.jsx
// LOCATION: /src/App.jsx
// -----------------------------------------------------------------------------

import React from 'react';
// FIX: Import WidgetById instead of Chart
import { SisenseContextProvider, WidgetById } from '@sisense/sdk-ui';

// --- Configuration ---
const SISENSE_URL = "https://aesandbox.sisensepoc.com"; // Your provided Sisense URL
const SISENSE_WAT = import.meta.env.VITE_SISENSE_WAT; // Reads the WAT from Vercel Environment Variables

function App() {
  return (
    // The SisenseContextProvider connects your app to your Sisense instance
    <SisenseContextProvider
      url={SISENSE_URL}
      wat={SISENSE_WAT}
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
              // IMPORTANT: Replace with your actual Dashboard and Widget IDs
              dashboardOid="662a9b85d1e1ae0017fa0d01"
              widgetOid="662a9b85d1e1ae0017fa0d06"
              styleOptions={{ height: 450 }}
            />
          </div>

          {/* Widget 2: Voluntary Turnover by Tenure */}
          <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '1rem' }}>Voluntary Turnover by Tenure</h2>
             <WidgetById
              // IMPORTANT: Replace with your actual Dashboard and Widget IDs
              dashboardOid="662a9b85d1e1ae0017fa0d01"
              widgetOid="YOUR_SECOND_WIDGET_OID"
              styleOptions={{ height: 450 }}
            />
          </div>

        </div>
      </div>
    </SisenseContextProvider>
  );
}

export default App;
