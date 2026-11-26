import React from 'react';
import FeesDashboardShell from './FeesDashboardShell';
import { BarChart3, TrendingUp, Download, PieChart, FileSpreadsheet } from 'lucide-react';

/**
 * FeesDashboardReports
 * View 4 of the Fees Carousel:
 * Faithful visual representation of audit-ready Financial Reports and collection analytics.
 */
export default function FeesDashboardReports() {
  const gradeCollection = [
    { grade: 'Grade 1', target: '₹ 2.4L', collected: '₹ 2.2L', percentage: 91 },
    { grade: 'Grade 2', target: '₹ 2.5L', collected: '₹ 2.1L', percentage: 84 },
    { grade: 'Grade 3', target: '₹ 2.8L', collected: '₹ 2.4L', percentage: 85 },
    { grade: 'Grade 4', target: '₹ 3.0L', collected: '₹ 2.6L', percentage: 86 },
    { grade: 'Grade 5', target: '₹ 3.2L', collected: '₹ 2.9L', percentage: 90 },
    { grade: 'Grade 6', target: '₹ 3.5L', collected: '₹ 2.8L', percentage: 80 },
  ];

  return (
    <FeesDashboardShell activeTab="reports" subtitle="Generate audit ledgers, year-end financial summaries, and collection analytics.">
      <div className="space-y-3.5">
        {/* Top Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-[11px]">
          <div className="bg-white rounded-xl border border-slate-200/90 p-3 shadow-2xs">
            <div className="text-slate-400 font-medium">Total Billed</div>
            <div className="font-bold text-[16px] text-slate-900 mt-1">₹ 18,20,000</div>
            <div className="text-[10px] text-slate-400 mt-0.5">1,248 Invoices</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200/90 p-3 shadow-2xs">
            <div className="text-slate-400 font-medium">Realized Collection</div>
            <div className="font-bold text-[16px] text-emerald-600 mt-1">₹ 14,84,000</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">81.5% Recovery</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200/90 p-3 shadow-2xs">
            <div className="text-slate-400 font-medium">Outstanding Dues</div>
            <div className="font-bold text-[16px] text-amber-600 mt-1">₹ 3,36,000</div>
            <div className="text-[10px] text-amber-600 font-semibold mt-0.5">42 Accounts</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200/90 p-3 shadow-2xs">
            <div className="text-slate-400 font-medium">Concessions Allowed</div>
            <div className="font-bold text-[16px] text-indigo-600 mt-1">₹ 72,000</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Scholarships & Staff</div>
          </div>
        </div>

        {/* Grade-wise Recovery Breakdown */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-3.5 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <div className="font-bold text-[12px] text-slate-900">Grade-wise Fee Recovery Rate</div>
            <button
              type="button"
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#4F46E5] text-white text-[10px] font-medium hover:bg-[#4338CA] cursor-pointer"
            >
              <FileSpreadsheet className="w-3 h-3" />
              <span>Download Audit Ledger</span>
            </button>
          </div>

          <div className="space-y-2 text-[11px]">
            {gradeCollection.map((g, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-16 font-semibold text-slate-700">{g.grade}</span>
                <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#4F46E5] h-full rounded-full transition-all duration-500"
                    style={{ width: `${g.percentage}%` }}
                  />
                </div>
                <span className="w-10 text-right font-bold text-slate-800">{g.percentage}%</span>
                <span className="w-24 text-right text-slate-400 text-[10px]">
                  {g.collected} / {g.target}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FeesDashboardShell>
  );
}
