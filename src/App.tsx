/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-zinc-50 flex font-sans text-zinc-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 mt-16 overflow-y-auto bg-zinc-50/50">
          {activeTab === 'dashboard' ? (
            <Dashboard />
          ) : (
            <div className="p-8 max-w-7xl mx-auto flex items-center justify-center h-full">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-zinc-400 mb-2">Módulo em Desenvolvimento</h2>
                <p className="text-zinc-500">A seção "{activeTab}" estará disponível em breve.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
