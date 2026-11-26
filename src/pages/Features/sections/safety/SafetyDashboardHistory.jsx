import React from 'react';
import SafetyDashboardShell from './SafetyDashboardShell';
import { History, Download, Filter, ShieldCheck, CheckCircle2, QrCode, KeyRound, UserCheck } from 'lucide-react';

/**
 * SafetyDashboardHistory
 * View 3 of the Safety Carousel:
 * Complete historical audit trail and timestamped logs of student collection records.
 */
export default function SafetyDashboardHistory({ onTabChange }) {
  const historyLogs = [
    {
      time: '3:20:14 PM',
      student: 'Karthik S',
      grade: 'Grade 3 - B',
      collector: 'Suresh (Father)',
      relation: 'Father',
      method: 'QR Pass Scan',
      methodIcon: QrCode,
      gate: 'Gate B (Carpool)',
      staff: 'R. Sharma (Security)',
      status: 'Verified',
    },
    {
      time: '3:15:42 PM',
      student: 'Ananya R',
      grade: 'Grade 5 - A',
      collector: 'Priya (Mother)',
      relation: 'Mother',
      method: 'One-Time Passcode',
      methodIcon: KeyRound,
      gate: 'Gate A (Main)',
      staff: 'M. Preethi (Admin)',
      status: 'Verified',
    },
    {
      time: '3:10:05 PM',
      student: 'Sneha P',
      grade: 'Grade 4 - A',
      collector: 'Divya (Aunt)',
      relation: 'Authorized Aunt',
      method: 'Photo ID + App Authorization',
      methodIcon: UserCheck,
      gate: 'Gate B (Carpool)',
      staff: 'R. Sharma (Security)',
      status: 'Verified',
    },
    {
      time: '3:05:18 PM',
      student: 'Arjun N',
      grade: 'Grade 1 - A',
      collector: 'Driver Ramesh',
      relation: 'School Van #04',
      method: 'Van Roster Biometric',
      methodIcon: ShieldCheck,
      gate: 'Bus Bay 2',
      staff: 'K. Anand (Transport)',
      status: 'Verified',
    },
    {
      time: '2:55:50 PM',
      student: 'Deepak V',
      grade: 'KG - 2',
      collector: 'Anita V (Mother)',
      relation: 'Mother',
      method: 'QR Pass Scan',
      methodIcon: QrCode,
      gate: 'Early Dismissal Gate',
      staff: 'S. Johnson (Admin)',
      status: 'Verified',
    },
  ];

  return (
    <SafetyDashboardShell activeTab="pickup-history" onTabChange={onTabChange}>
      <div className="space-y-3">
        {/* Table & Filter Card */}
        <div className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs">
          <div className="p-2.5 sm:p-3 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <div className="font-bold text-[12px] text-slate-900 flex items-center gap-1.5">
              <History className="w-4 h-4 text-[#4F46E5]" />
              <span>Dismissal Audit & Historical Log</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-slate-200 text-slate-600 text-[10px] hover:bg-slate-50 cursor-pointer"
              >
                <Filter className="w-3 h-3 text-slate-400" />
                <span>Filter</span>
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#4F46E5] text-white text-[10px] font-medium hover:bg-[#4338CA] cursor-pointer"
              >
                <Download className="w-3 h-3" />
                <span>Export Log</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px]">
              <thead className="bg-slate-50/70 border-b border-slate-100 text-slate-400 font-semibold">
                <tr>
                  <th className="py-2 px-3">Time</th>
                  <th className="py-2 px-2.5">Student & Grade</th>
                  <th className="py-2 px-2.5">Collected By</th>
                  <th className="py-2 px-2.5">Verification Method</th>
                  <th className="py-2 px-2.5">Gate / Location</th>
                  <th className="py-2 px-2.5">Staff Sign-off</th>
                  <th className="py-2 px-3 text-right">Audit Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {historyLogs.map((log, idx) => {
                  const Icon = log.methodIcon;
                  return (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-2 px-3 font-mono font-medium text-slate-500 text-[10px]">
                        {log.time}
                      </td>
                      <td className="py-2 px-2.5">
                        <div className="font-semibold text-slate-900">{log.student}</div>
                        <div className="text-slate-400 text-[10px]">{log.grade}</div>
                      </td>
                      <td className="py-2 px-2.5">
                        <div className="font-medium text-slate-800">{log.collector}</div>
                        <div className="text-slate-400 text-[10px]">{log.relation}</div>
                      </td>
                      <td className="py-2 px-2.5">
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <Icon className="w-3 h-3 text-[#4F46E5] shrink-0" />
                          <span className="truncate">{log.method}</span>
                        </div>
                      </td>
                      <td className="py-2 px-2.5 text-slate-600 font-medium">{log.gate}</td>
                      <td className="py-2 px-2.5 text-slate-500 text-[10px]">{log.staff}</td>
                      <td className="py-2 px-3 text-right">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SafetyDashboardShell>
  );
}
