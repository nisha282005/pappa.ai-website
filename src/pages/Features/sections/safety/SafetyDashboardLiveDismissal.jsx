import React from 'react';
import SafetyDashboardShell from './SafetyDashboardShell';
import { Phone, Car, Clock, FileText, CheckCircle2, UserCheck, AlertTriangle } from 'lucide-react';

/**
 * SafetyDashboardLiveDismissal
 * View 1 of the Safety Carousel:
 * Faithful visual representation of the Live Dismissal queue and student verification panel
 * matching the reference screenshot.
 */
export default function SafetyDashboardLiveDismissal({ onTabChange }) {
  const students = [
    {
      name: 'Ananya R',
      initial: 'A',
      color: 'bg-indigo-50 text-[#4F46E5]',
      grade: 'Grade 5 - A',
      contact: 'Priya (Mother)',
      time: '3:15 PM',
      status: 'Picked Up',
      statusClass: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      action: 'View',
      actionClass: 'text-[#4F46E5] hover:underline',
    },
    {
      name: 'Karthik S',
      initial: 'K',
      color: 'bg-purple-50 text-purple-700',
      grade: 'Grade 3 - B',
      contact: 'Suresh (Father)',
      time: '3:20 PM',
      status: 'Picked Up',
      statusClass: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      action: 'View',
      actionClass: 'text-[#4F46E5] hover:underline',
    },
    {
      name: 'Meera T',
      initial: 'M',
      color: 'bg-sky-50 text-sky-700',
      grade: 'Grade 2 - A',
      contact: 'Lakshmi (Mother)',
      time: '—',
      status: 'Pending',
      statusClass: 'bg-amber-50 text-amber-700 border-amber-100',
      action: 'Mark Picked Up',
      actionClass: 'text-indigo-600 font-semibold hover:underline',
      highlighted: true,
    },
    {
      name: 'Rohan V',
      initial: 'R',
      color: 'bg-amber-50 text-amber-700',
      grade: 'Grade 6 - B',
      contact: 'Vijay (Father)',
      time: '—',
      status: 'Pending',
      statusClass: 'bg-amber-50 text-amber-700 border-amber-100',
      action: 'Mark Picked Up',
      actionClass: 'text-indigo-600 font-semibold hover:underline',
    },
    {
      name: 'Sneha P',
      initial: 'S',
      color: 'bg-emerald-50 text-emerald-700',
      grade: 'Grade 4 - A',
      contact: 'Divya (Aunt)',
      time: '3:10 PM',
      status: 'Picked Up',
      statusClass: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      action: 'View',
      actionClass: 'text-[#4F46E5] hover:underline',
    },
    {
      name: 'Varun K',
      initial: 'V',
      color: 'bg-rose-50 text-rose-700',
      grade: 'Grade 1 - B',
      contact: 'Arun (Father)',
      time: '—',
      status: 'Late',
      statusClass: 'bg-rose-50 text-rose-700 border-rose-100',
      action: 'Contact',
      actionClass: 'text-rose-600 font-semibold hover:underline',
    },
  ];

  return (
    <SafetyDashboardShell activeTab="live-dismissal" onTabChange={onTabChange}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start h-full">
        {/* Left Side: Live Dismissal Table */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px]">
              <thead className="bg-slate-50/70 border-b border-slate-100 text-slate-400 font-semibold">
                <tr>
                  <th className="py-2 px-3">Student Name</th>
                  <th className="py-2 px-2.5">Grade / Section</th>
                  <th className="py-2 px-2.5">Authorized Contact</th>
                  <th className="py-2 px-2.5">Pickup Time</th>
                  <th className="py-2 px-2.5">Status</th>
                  <th className="py-2 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {students.map((student, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-50/70 transition-colors ${
                      student.highlighted ? 'bg-indigo-50/30' : ''
                    }`}
                  >
                    <td className="py-1.5 sm:py-2 px-3 flex items-center gap-2">
                      <span
                        className={`w-5 h-5 rounded-full font-bold text-[9px] flex items-center justify-center shrink-0 ${student.color}`}
                      >
                        {student.initial}
                      </span>
                      <span className="font-semibold text-slate-900 truncate">
                        {student.name}
                      </span>
                    </td>
                    <td className="py-1.5 sm:py-2 px-2.5 text-slate-600 truncate">
                      {student.grade}
                    </td>
                    <td className="py-1.5 sm:py-2 px-2.5 text-slate-600 truncate">
                      {student.contact}
                    </td>
                    <td className="py-1.5 sm:py-2 px-2.5 text-slate-500 font-medium">
                      {student.time}
                    </td>
                    <td className="py-1.5 sm:py-2 px-2.5">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold border ${student.statusClass}`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td className="py-1.5 sm:py-2 px-3 text-right text-[10px]">
                      <span className={`cursor-pointer ${student.actionClass}`}>
                        {student.action}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side: Student Details & Guardian Verification Card */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200/90 p-3 shadow-2xs flex flex-col justify-between">
          <div>
            {/* Header with Live Badge */}
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
              <span className="font-bold text-[12px] text-slate-900">Student Details</span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[9px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </span>
            </div>

            {/* Student Info */}
            <div className="flex items-center gap-2.5 my-2.5">
              <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-200 overflow-hidden flex items-center justify-center text-amber-700 font-bold text-[12px] shrink-0">
                MT
              </div>
              <div className="min-w-0">
                <div className="font-bold text-[13px] text-slate-900 leading-tight">Meera T</div>
                <div className="text-[10px] text-slate-400">Grade 2 - A</div>
              </div>
            </div>

            {/* Contacts */}
            <div className="space-y-1.5 text-[10px] text-slate-600 bg-slate-50/70 p-2 rounded-lg border border-slate-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 truncate">
                  <Phone className="w-3 h-3 text-[#4F46E5] shrink-0" />
                  <span className="font-medium text-slate-800 truncate">Lakshmi (Mother)</span>
                </div>
                <span className="text-slate-500 font-mono text-[9px]">+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-200/50">
                <div className="flex items-center gap-1.5 truncate">
                  <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                  <span className="font-medium text-slate-700 truncate">Ravi (Father)</span>
                </div>
                <span className="text-slate-400 font-mono text-[9px]">+91 98765 43211</span>
              </div>
            </div>

            {/* Pickup Specs */}
            <div className="grid grid-cols-2 gap-2 mt-2 text-[10px]">
              <div className="flex items-center gap-1.5 text-slate-600">
                <Car className="w-3 h-3 text-slate-400 shrink-0" />
                <div>
                  <span className="text-slate-400 text-[9px] block">Pickup Type</span>
                  <span className="font-semibold text-slate-800">Car</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600">
                <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                <div>
                  <span className="text-slate-400 text-[9px] block">Expected Pickup</span>
                  <span className="font-semibold text-slate-800">3:30 PM</span>
                </div>
              </div>
            </div>

            <div className="mt-2 text-[10px] flex items-start gap-1.5 text-slate-500 bg-amber-50/50 p-1.5 rounded border border-amber-100/60">
              <FileText className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-amber-800 font-semibold">Special Notes:</strong> Use main entrance
              </span>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            className="w-full mt-2.5 py-1.5 rounded-lg bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-[11px] shadow-xs cursor-pointer transition-all active:scale-[0.98]"
          >
            Mark as Picked Up
          </button>
        </div>
      </div>
    </SafetyDashboardShell>
  );
}
