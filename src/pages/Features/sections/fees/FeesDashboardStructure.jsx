import React from 'react';
import FeesDashboardShell from './FeesDashboardShell';
import { Layers, Calendar, Plus, Download, CheckCircle2 } from 'lucide-react';

/**
 * FeesDashboardStructure
 * View 2 of the Fees Carousel:
 * Faithful visual representation of the Fee Structure management interface built with React components.
 */
export default function FeesDashboardStructure() {
  const feeSlabs = [
    {
      grade: 'Primary Wing (Grade 1 - 5)',
      tuition: '₹ 32,000',
      lab: '₹ 6,000',
      activity: '₹ 5,000',
      exam: '₹ 5,000',
      total: '₹ 48,000',
      students: 420,
    },
    {
      grade: 'Middle Wing (Grade 6 - 8)',
      tuition: '₹ 42,000',
      lab: '₹ 8,000',
      activity: '₹ 6,000',
      exam: '₹ 6,000',
      total: '₹ 62,000',
      students: 310,
    },
    {
      grade: 'Secondary Wing (Grade 9 - 10)',
      tuition: '₹ 52,000',
      lab: '₹ 11,000',
      activity: '₹ 7,000',
      exam: '₹ 6,000',
      total: '₹ 76,000',
      students: 245,
    },
  ];

  return (
    <FeesDashboardShell activeTab="structure" subtitle="Configure and maintain academic fee slabs, categories, and payment terms.">
      <div className="space-y-4">
        {/* Top Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2 border-b border-slate-200/70">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[13px] text-slate-800">Academic Fee Slabs</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 text-[#4F46E5] font-semibold">
              3 Active Wings
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-[11px] font-medium text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              <Download className="w-3 h-3 text-slate-400" />
              <span>Export Structure</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#4F46E5] text-white text-[11px] font-medium hover:bg-[#4338CA] cursor-pointer shadow-xs"
            >
              <Plus className="w-3 h-3" />
              <span>Add Fee Slabs</span>
            </button>
          </div>
        </div>

        {/* Slabs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {feeSlabs.map((slab, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200/90 p-3.5 shadow-2xs hover:border-indigo-200 transition-colors">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="font-bold text-[13px] text-slate-900 leading-tight">{slab.grade}</div>
                <span className="text-[10px] text-slate-400">{slab.students} Enrolled</span>
              </div>

              <div className="mt-2.5 space-y-1.5 text-[11px]">
                <div className="flex justify-between text-slate-600">
                  <span>Tuition Fee</span>
                  <span className="font-medium text-slate-800">{slab.tuition}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Computer & Lab</span>
                  <span className="font-medium text-slate-800">{slab.lab}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Activity & Sports</span>
                  <span className="font-medium text-slate-800">{slab.activity}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Exam & Assessment</span>
                  <span className="font-medium text-slate-800">{slab.exam}</span>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500">Annual Total</span>
                <span className="text-[14px] font-bold text-[#4F46E5]">{slab.total}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Installment Term Schedule */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-3.5 shadow-2xs">
          <div className="flex items-center gap-2 mb-2.5">
            <Calendar className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span className="font-bold text-[12px] text-slate-800">Installment Schedule (2026 - 2027)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px]">
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-800">Term 1 (40%)</div>
                <div className="text-[10px] text-slate-400">Due: June 10, 2026</div>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-[10px]">
                Completed
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-800">Term 2 (30%)</div>
                <div className="text-[10px] text-slate-400">Due: Oct 15, 2026</div>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 font-semibold text-[10px]">
                Active Collection
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-800">Term 3 (30%)</div>
                <div className="text-[10px] text-slate-400">Due: Jan 20, 2027</div>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold text-[10px]">
                Upcoming
              </span>
            </div>
          </div>
        </div>
      </div>
    </FeesDashboardShell>
  );
}
