import React from 'react';
import SafetyDashboardShell from './SafetyDashboardShell';
import { Car, CheckCircle2, Clock, ArrowRight, ShieldCheck, UserCheck, AlertCircle } from 'lucide-react';

/**
 * SafetyDashboardQueue
 * View 2 of the Safety Carousel:
 * Vehicle queue management, carpool lane tracking, and instant guardian call-out system.
 */
export default function SafetyDashboardQueue({ onTabChange }) {
  const queueItems = [
    {
      pos: '1',
      plate: 'KA-01-MJ-4821',
      car: 'White Honda City',
      guardian: 'Vijay (Father)',
      student: 'Rohan V',
      grade: 'Grade 6 - B',
      lane: 'Lane 1 (Gate A)',
      status: 'Boarding',
      statusClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      action: 'Release Vehicle',
      actionClass: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    },
    {
      pos: '2',
      plate: 'KA-03-AB-9012',
      car: 'Silver Swift Dzire',
      guardian: 'Lakshmi (Mother)',
      student: 'Meera T',
      grade: 'Grade 2 - A',
      lane: 'Lane 1 (Gate A)',
      status: 'Called',
      statusClass: 'bg-indigo-50 text-[#4F46E5] border-indigo-200',
      action: 'Verify & Board',
      actionClass: 'bg-[#4F46E5] hover:bg-[#4338CA] text-white',
    },
    {
      pos: '3',
      plate: 'KA-05-CD-1144',
      car: 'Blue Hyundai Creta',
      guardian: 'Suresh (Father)',
      student: 'Karthik S',
      grade: 'Grade 3 - B',
      lane: 'Lane 2 (Gate B)',
      status: 'Arrived',
      statusClass: 'bg-sky-50 text-sky-700 border-sky-200',
      action: 'Call Student',
      actionClass: 'border border-[#4F46E5] text-[#4F46E5] hover:bg-indigo-50',
    },
    {
      pos: '4',
      plate: 'KA-04-EF-7729',
      car: 'Grey Toyota Innova',
      guardian: 'Divya (Aunt)',
      student: 'Sneha P',
      grade: 'Grade 4 - A',
      lane: 'Lane 2 (Gate B)',
      status: 'Approaching (2m)',
      statusClass: 'bg-amber-50 text-amber-700 border-amber-200',
      action: 'Prepare Pass',
      actionClass: 'border border-slate-300 text-slate-600 hover:bg-slate-50',
    },
  ];

  return (
    <SafetyDashboardShell activeTab="pickup-queue" onTabChange={onTabChange}>
      <div className="space-y-3">
        {/* Real-time Queue Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px]">
          <div className="bg-white rounded-xl border border-slate-200/90 p-2.5 shadow-2xs">
            <div className="text-slate-400 font-medium">Avg. Dismissal Pace</div>
            <div className="flex items-center justify-between mt-1">
              <span className="font-bold text-[15px] text-slate-900">42 sec / car</span>
              <span className="text-emerald-600 font-semibold text-[10px] bg-emerald-50 px-1.5 py-0.5 rounded">
                Fast Flow
              </span>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200/90 p-2.5 shadow-2xs">
            <div className="text-slate-400 font-medium">Active Vehicles in Lane</div>
            <div className="flex items-center justify-between mt-1">
              <span className="font-bold text-[15px] text-[#4F46E5]">8 Cars In Queue</span>
              <span className="text-slate-500 text-[10px]">Gate A & B</span>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200/90 p-2.5 shadow-2xs">
            <div className="text-slate-400 font-medium">Guardian Verification Method</div>
            <div className="flex items-center justify-between mt-1">
              <span className="font-bold text-[15px] text-slate-900">Digital QR Pass</span>
              <span className="text-emerald-600 font-semibold text-[10px] flex items-center gap-0.5">
                <ShieldCheck className="w-3 h-3" /> 100% Match
              </span>
            </div>
          </div>
        </div>

        {/* Live Carpool Queue Table */}
        <div className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs">
          <div className="p-2.5 sm:p-3 border-b border-slate-100 flex items-center justify-between">
            <div className="font-bold text-[12px] text-slate-900 flex items-center gap-1.5">
              <Car className="w-4 h-4 text-[#4F46E5]" />
              <span>Carpool Pickup Lane Queue</span>
            </div>
            <span className="text-[10px] text-slate-400">
              Auto-refreshes with gate RFID reader
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px]">
              <thead className="bg-slate-50/70 border-b border-slate-100 text-slate-400 font-semibold">
                <tr>
                  <th className="py-2 px-3">#</th>
                  <th className="py-2 px-2.5">Vehicle Details</th>
                  <th className="py-2 px-2.5">Guardian</th>
                  <th className="py-2 px-2.5">Student & Grade</th>
                  <th className="py-2 px-2.5">Lane</th>
                  <th className="py-2 px-2.5">Status</th>
                  <th className="py-2 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {queueItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-2 px-3 font-bold text-slate-400">{item.pos}</td>
                    <td className="py-2 px-2.5">
                      <div className="font-bold text-slate-900 font-mono text-[11px]">
                        {item.plate}
                      </div>
                      <div className="text-slate-400 text-[10px]">{item.car}</div>
                    </td>
                    <td className="py-2 px-2.5 font-medium text-slate-700">{item.guardian}</td>
                    <td className="py-2 px-2.5">
                      <div className="font-semibold text-slate-900">{item.student}</div>
                      <div className="text-slate-400 text-[10px]">{item.grade}</div>
                    </td>
                    <td className="py-2 px-2.5 text-slate-600 font-medium">{item.lane}</td>
                    <td className="py-2 px-2.5">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold border ${item.statusClass}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-right">
                      <button
                        type="button"
                        className={`px-2.5 py-1 rounded-md text-[10px] font-semibold cursor-pointer transition-all ${item.actionClass}`}
                      >
                        {item.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SafetyDashboardShell>
  );
}
