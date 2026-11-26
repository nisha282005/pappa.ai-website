import React, { useState } from 'react';
import FeesDashboardShell from './FeesDashboardShell';
import { Search, Filter, Download, ArrowUpRight, ArrowDownRight, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

/**
 * FeesDashboardPayments
 * View 3 of the Fees Carousel:
 * Faithful visual representation of the Payments ledger and real-time transaction reconciliation.
 */
export default function FeesDashboardPayments() {
  const transactions = [
    { id: 'TXN-98421', student: 'Arjun R', grade: 'Grade 5 - A', amount: '₹ 6,000', method: 'Online (UPI)', status: 'Paid', date: 'Oct 12, 2026' },
    { id: 'TXN-98420', student: 'Sahana M', grade: 'Grade 3 - B', amount: '₹ 5,000', method: 'Card (Visa)', status: 'Paid', date: 'Oct 11, 2026' },
    { id: 'TXN-98419', student: 'Kavin T', grade: 'Grade 6 - A', amount: '₹ 6,000', method: 'Net Banking', status: 'Pending', date: 'Oct 10, 2026' },
    { id: 'TXN-98418', student: 'Mathi S', grade: 'Grade 2 - A', amount: '₹ 4,000', method: 'Cash (Counter)', status: 'Paid', date: 'Oct 10, 2026' },
    { id: 'TXN-98417', student: 'Pavithra K', grade: 'Grade 4 - B', amount: '₹ 5,000', method: 'Online (UPI)', status: 'Failed', date: 'Oct 09, 2026' },
    { id: 'TXN-98416', student: 'Rohan V', grade: 'Grade 7 - C', amount: '₹ 7,500', method: 'Online (UPI)', status: 'Paid', date: 'Oct 09, 2026' },
  ];

  return (
    <FeesDashboardShell activeTab="payments" subtitle="Track real-time transactions, gateway settlements, and offline payment receipts.">
      <div className="space-y-3.5">
        {/* KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
          <div className="bg-white rounded-xl border border-slate-200/90 p-3 shadow-2xs">
            <div className="text-slate-400 font-medium">Today's Collections</div>
            <div className="flex items-center justify-between mt-1">
              <span className="font-bold text-[16px] text-slate-900">₹ 84,500</span>
              <span className="text-emerald-600 font-semibold flex items-center text-[10px]">
                <ArrowUpRight className="w-3 h-3" /> +14%
              </span>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200/90 p-3 shadow-2xs">
            <div className="text-slate-400 font-medium">Gateway Success Rate</div>
            <div className="flex items-center justify-between mt-1">
              <span className="font-bold text-[16px] text-slate-900">98.4%</span>
              <span className="text-emerald-600 font-semibold flex items-center text-[10px]">
                <ArrowUpRight className="w-3 h-3" /> +0.6%
              </span>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200/90 p-3 shadow-2xs">
            <div className="text-slate-400 font-medium">Unreconciled Offline Dues</div>
            <div className="flex items-center justify-between mt-1">
              <span className="font-bold text-[16px] text-amber-700">₹ 18,000</span>
              <span className="text-slate-400 text-[10px]">4 Vouchers</span>
            </div>
          </div>
        </div>

        {/* Transactions Table Container */}
        <div className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs">
          <div className="p-3 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <div className="font-bold text-[12px] text-slate-900">Payment Transactions Ledger</div>
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
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px]">
              <thead className="bg-slate-50/70 border-b border-slate-100 text-slate-400 font-semibold">
                <tr>
                  <th className="py-2 px-3">Student</th>
                  <th className="py-2 px-3">Grade</th>
                  <th className="py-2 px-3">Amount</th>
                  <th className="py-2 px-3">Payment Method</th>
                  <th className="py-2 px-3">Status</th>
                  <th className="py-2 px-3 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transactions.map((tx, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-2 px-3 font-semibold text-slate-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-indigo-50 text-[#4F46E5] font-bold text-[9px] flex items-center justify-center">
                        {tx.student.charAt(0)}
                      </span>
                      <span>{tx.student}</span>
                    </td>
                    <td className="py-2 px-3 text-slate-600">{tx.grade}</td>
                    <td className="py-2 px-3 font-bold text-slate-900">{tx.amount}</td>
                    <td className="py-2 px-3 text-slate-600">{tx.method}</td>
                    <td className="py-2 px-3">
                      <span
                        className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                          tx.status === 'Paid'
                            ? 'bg-emerald-50 text-emerald-700'
                            : tx.status === 'Pending'
                            ? 'bg-amber-50 text-amber-700'
                            : 'bg-rose-50 text-rose-700'
                        }`}
                      >
                        {tx.status}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-slate-400 text-right">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </FeesDashboardShell>
  );
}
