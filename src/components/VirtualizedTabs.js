import React, { useState, useRef, Suspense } from 'react';

// Lazy load tab components
const Tab1 = React.lazy(() => import('./Tab1'));
const Tab2 = React.lazy(() => import('./Tab2'));
const Tab3 = React.lazy(() => import('./Tab3'));

const VirtualizedTabs = () => {
  const [activeTab, setActiveTab] = useState(0); // Track active tab
  const loadedTabs = useRef({}); // Track loaded tabs

  // Mark the current tab as loaded
  if (!loadedTabs.current[activeTab]) {
    loadedTabs.current[activeTab] = true;
  }

  return (
    <div>
      {/* Tab Buttons */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button
          onClick={() => setActiveTab(0)}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 0 ? '#007bff' : '#f8f9fa',
            color: activeTab === 0 ? '#fff' : '#000',
            border: '1px solid #ccc',
          }}
        >
          Tab 1
        </button>
        <button
          onClick={() => setActiveTab(1)}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 1 ? '#007bff' : '#f8f9fa',
            color: activeTab === 1 ? '#fff' : '#000',
            border: '1px solid #ccc',
          }}
        >
          Tab 2
        </button>
        <button
          onClick={() => setActiveTab(2)}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 2 ? '#007bff' : '#f8f9fa',
            color: activeTab === 2 ? '#fff' : '#000',
            border: '1px solid #ccc',
          }}
        >
          Tab 3
        </button>
      </div>

      {/* Tab Content */}
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        {Object.keys(loadedTabs.current).map((key) => (
          <div
            key={key}
            style={{
              display: activeTab === parseInt(key) ? 'block' : 'none',
            }}
          >
            {loadedTabs.current[key] && (
              <Suspense fallback={<div>Loading Tab {key + 1}...</div>}>
                {parseInt(key) === 0 && <Tab1 />}
                {parseInt(key) === 1 && <Tab2 />}
                {parseInt(key) === 2 && <Tab3 />}
              </Suspense>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualizedTabs;
