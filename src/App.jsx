// -----------------------------------------------------------------------------
// FILE: src/App.jsx
// LOCATION: /src/App.jsx
// -----------------------------------------------------------------------------

import React from 'react';
import { SisenseContextProvider, Chart } from '@sisense/sdk-ui';
// FIX: Import the entire data model SDK as a namespace (DM)
import * as DM from '@sisense/sdk-data';

// --- Configuration ---
const SISENSE_URL = "https://aesandbox.sisensepoc.com"; // Your provided Sisense URL
const SISENSE_WAT = import.meta.env.VITE_SISENSE_WAT; // Reads the WAT from Vercel Environment Variables
const DATA_SOURCE = "1b2b4cb1-b720-4f5e-a52c-b5511ed97994"; // Your provided Model OID

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

          {/* Chart 1: Turnover Rate vs. Annualized Rate */}
          <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '1rem' }}>Turnover Rate vs. Annualized Rate</h2>
            <Chart
              dataSet={DATA_SOURCE}
              chartType="column"
              dataOptions={{
                category: [
                  // FIX: Use the DM namespace
                  DM.attributeFactory.create({ name: 'category', Lsid: 'category' })
                ],
                value: [
                  // FIX: Use the DM namespace
                  DM.measureFactory.create({ name: 'rate_pct', aggregation: 'sum', Lsid: 'rate_pct' }),
                  DM.measureFactory.create({ name: 'annualized_rate_pct', aggregation: 'sum', Lsid: 'annualized_rate_pct' })
                ],
              }}
              styleOptions={{ height: 450 }}
            />
          </div>

          {/* Chart 2: Voluntary Turnover by Tenure */}
          <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '1rem' }}>Voluntary Turnover by Tenure</h2>
            <Chart
              dataSet={DATA_SOURCE}
              chartType="bar"
              dataOptions={{
                category: [
                  // FIX: Use the DM namespace
                  DM.attributeFactory.create({ name: 'tenure_bucket', Lsid: 'tenure_bucket' })
                ],
                value: [
                  // FIX: Use the DM namespace
                  DM.measureFactory.create({ name: 'voluntary_turnover_rate_pct', aggregation: 'sum', Lsid: 'voluntary_turnover_rate_pct' })
                ],
              }}
              styleOptions={{ 
                height: 450,
                yAxis: {
                    logarithmic: true // Using a log scale as discussed
                }
              }}
            />
          </div>

        </div>
      </div>
    </SisenseContextProvider>
  );
}

export default App;
