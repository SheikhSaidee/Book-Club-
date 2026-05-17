import React, { useState } from 'react';
import { PageTransition } from '../components/Layout/PageTransition';
import { CertificatePreview } from '../features/certificates/components/CertificatePreview';
import { data } from '../config/data';
import { Download } from 'lucide-react';
import { useTitle } from '../hooks/useTitle';

export function Certificate() {
  useTitle('Certificate');
  const [selectedMemberId, setSelectedMemberId] = useState(data.members[0].id);
  const selectedMember = data.members.find(m => m.id === selectedMemberId) || data.members[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <PageTransition>
      <div className="mb-12 print:hidden text-center">
        <h1 className="font-serif text-48 font-bold mb-4">Generate Certificate</h1>
        <p className="text-16 text-muted mb-8 max-w-[600px] mx-auto">
          Celebrate your completion of the book. Select a member to preview and download their personalized certificate.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-[500px] mx-auto bg-surface p-4 rounded-lg shadow-sm border border-border">
          <select 
            value={selectedMemberId}
            onChange={(e) => setSelectedMemberId(e.target.value)}
            className="w-full bg-surface-elevated border border-border rounded-md px-4 py-2 text-16 text-ink focus:outline-none focus:border-gold cursor-pointer"
          >
            {data.members.map(m => (
              <option key={m.id} value={m.id}>{m.name}</option>
            ))}
          </select>

          <button 
            onClick={handlePrint}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-ink text-primary px-6 py-2 rounded-md font-medium hover:bg-ink/90 transition-colors shrink-0"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>
      </div>

      <div className="print:m-0 print:p-0">
        <CertificatePreview member={selectedMember} book={data.currentBook} />
      </div>
    </PageTransition>
  );
}
