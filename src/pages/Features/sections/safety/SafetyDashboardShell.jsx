import React from 'react';
import {
  LayoutDashboard,
  Users,
  UserCheck,
  History,
  Bell,
  Settings,
  Search,
  ChevronDown,
  Shield,
  Car,
  Clock,
  ArrowUpRight,
  User,
} from 'lucide-react';

/**
 * SafetyDashboardShell
 * Replicates the authentic Springfield Academy Safety Dashboard frame.
 * Includes:
 * - Institution header (Springfield Academy, 6 Branches)
 * - Navigation categories (Main, Students, Safety)
 * - Top search, notification bell, admin profile, date/branch filters
 * - 4 Summary KPI cards (Students Dismissed, Pending Pickup, Late Pickup, Total Students)
 * - Inner tab navigation (Live Dismissal, Pickup Queue, Pickup History, Safety Alerts)
 * - Mobile responsive header (< sm)
 */
export default function SafetyDashboardShell({
  activeTab = 'live-dismissal',
  onTabChange,
  children,
}) {
  const tabs = [
    { id: 'live-dismissal', label: 'Live Dismissal' },
    { id: 'pickup-queue', label: 'Pickup Queue' },
    { id: 'pickup-history', label: "Pickup History" },
    { id: 'safety-alerts', label: 'Safety Alerts' },
  ];

  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col sm:flex-row text-left font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 select-none overflow-hidden text-[12px] sm:text-[13px]">
      {/* Mobile Top App Bar (< sm) */}
      <div className="flex sm:hidden items-center justify-between px-3 py-2 bg-white border-b border-slate-100 text-[11px] shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4F46E5] shrink-0">
            <Shield className="w-3.5 h-3.5 fill-[#4F46E5]/20" />
          </div>
          <span className="font-bold text-slate-900 truncate text-[11px]">Springfield Academy</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="px-2 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] font-bold text-[10px]">
            {activeTab === 'live-dismissal'
              ? 'Dismissal'
              : activeTab === 'pickup-queue'
              ? 'Queue'
              : activeTab === 'pickup-history'
              ? 'History'
              : 'Alerts'}
          </span>
          <span className="text-[10px] text-slate-400">Today</span>
        </div>
      </div>

      {/* Sidebar (Desktop & Tablet >= sm) */}
      <aside className="hidden sm:flex sm:w-44 lg:w-48 shrink-0 bg-white border-r border-slate-100 flex-col justify-between p-3 lg:p-3.5">
        <div>
          {/* Institution Header */}
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4F46E5] shrink-0">
              <Shield className="w-4 h-4 fill-[#4F46E5]/20" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-bold text-[12px] text-slate-900 leading-tight truncate">Springfield Academy</div>
              <div className="text-[10px] text-slate-400">6 Branches</div>
            </div>
            <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-slate-100 text-slate-500">K</span>
          </div>

          {/* Main Category */}
          <div className="mt-3">
            <div className="text-[9px] font-bold text-slate-400 px-2 mb-1">
              Main
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-[11px] font-medium cursor-pointer">
              <LayoutDashboard className="w-3.5 h-3.5 text-slate-400" />
              <span>Dashboard</span>
            </div>
          </div>

          {/* Students Category */}
          <div className="mt-2.5">
            <div className="text-[9px] font-bold text-slate-400 px-2 mb-1">
              Students
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-[11px] font-medium cursor-pointer">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Students</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-[11px] font-medium cursor-pointer">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                <span>Parents</span>
              </div>
            </div>
          </div>

          {/* Safety Category */}
          <div className="mt-2.5">
            <div className="text-[9px] font-bold text-slate-400 px-2 mb-1">
              Safety
            </div>
            <div className="space-y-0.5">
              <div
                className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px] font-medium transition-colors ${
                  activeTab === 'live-dismissal' || activeTab === 'pickup-queue'
                    ? 'bg-[#EEF2FF] text-[#4F46E5] font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Car className="w-3.5 h-3.5 text-[#4F46E5]" />
                <span className="truncate">Pickup & Dismissal</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-[11px] font-medium cursor-pointer">
                <UserCheck className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">Authorized Contacts</span>
              </div>
              <div
                className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px] font-medium transition-colors ${
                  activeTab === 'pickup-history'
                    ? 'bg-[#EEF2FF] text-[#4F46E5] font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <History className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">Pickup History</span>
              </div>
              <div
                className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px] font-medium transition-colors ${
                  activeTab === 'safety-alerts'
                    ? 'bg-[#EEF2FF] text-[#4F46E5] font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Bell className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">Alerts</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-[11px] font-medium cursor-pointer">
                <Settings className="w-3.5 h-3.5 text-slate-400" />
                <span>Settings</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Profile & Powered by */}
        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-center gap-2 p-1 rounded-lg hover:bg-slate-50">
            <div className="w-6 h-6 rounded-full bg-[#4F46E5] text-white font-bold text-[10px] flex items-center justify-center shrink-0">
              SJ
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-[11px] text-slate-800 leading-tight truncate">Sarah Johnson</div>
              <div className="text-[9px] text-slate-400 truncate">School Admin</div>
            </div>
          </div>
          <div className="mt-1.5 text-[9px] text-slate-400 flex items-center gap-1 px-1">
            <span>Powered by</span>
            <span className="font-bold text-[#4F46E5]">Pappa.ai</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 flex flex-col overflow-y-auto">
        {/* Top Header Bar */}
        <div className="bg-white border-b border-slate-100 px-3.5 sm:px-4 py-2.5 sm:py-3 shrink-0 flex flex-col md:flex-row md:items-center md:justify-between gap-2.5">
          <div className="min-w-0">
            <h3 className="font-bold text-[14px] sm:text-[15px] text-slate-900 leading-tight">
              Pickup & Dismissal
            </h3>
            <p className="text-[10px] sm:text-[11px] text-slate-400 truncate mt-0.5">
              Monitor student pickup, verify authorized contacts, and keep families informed in real time.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap md:flex-nowrap justify-between md:justify-end">
            {/* Search */}
            <div className="relative w-36 sm:w-44 md:w-52">
              <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                readOnly
                placeholder="Search students, parents..."
                className="w-full pl-7 pr-2 py-1 text-[10px] sm:text-[11px] rounded-lg border border-slate-200 bg-slate-50/50 text-slate-700 placeholder-slate-400 focus:outline-none"
              />
            </div>

            {/* Notification & User */}
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="relative p-1 rounded-lg text-slate-500 hover:bg-slate-100">
                <Bell className="w-3.5 h-3.5" />
                <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-rose-500 rounded-full" />
              </div>
              <div className="w-6 h-6 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-[#4F46E5] font-bold text-[10px]">
                S
              </div>
            </div>

            {/* Filter Dropdowns */}
            <div className="flex items-center gap-1.5 shrink-0 text-[10px]">
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg border border-slate-200 bg-white text-slate-700 font-medium">
                <span>Today</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg border border-slate-200 bg-white text-slate-700 font-medium">
                <span className="truncate max-w-[65px]">All Branches</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Workspace Body */}
        <div className="p-3 sm:p-4 space-y-3 sm:space-y-3.5 flex-1 flex flex-col justify-between">
          {/* Summary KPI Cards (4 cards matching the reference image) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
            {/* 1. Students Dismissed */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-2.5 sm:p-3 shadow-2xs flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <UserCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-400 font-medium truncate">Students Dismissed</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-bold text-[15px] sm:text-[17px] text-slate-900 leading-tight">128</span>
                  <span className="text-emerald-600 font-semibold text-[9px] bg-emerald-50 px-1 py-0.2 rounded">
                    ↑ 12%
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Pending Pickup */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-2.5 sm:p-3 shadow-2xs flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-400 font-medium truncate">Pending Pickup</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-bold text-[15px] sm:text-[17px] text-slate-900 leading-tight">12</span>
                  <span className="text-amber-600 font-semibold text-[9px] bg-amber-50 px-1 py-0.2 rounded">
                    ↑ 2%
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Late Pickup */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-2.5 sm:p-3 shadow-2xs flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 text-rose-500 flex items-center justify-center shrink-0">
                <Bell className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-400 font-medium truncate">Late Pickup</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-bold text-[15px] sm:text-[17px] text-slate-900 leading-tight">3</span>
                  <span className="text-rose-600 font-semibold text-[9px] bg-rose-50 px-1 py-0.2 rounded">
                    11
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Total Students */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-2.5 sm:p-3 shadow-2xs flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 text-[#4F46E5] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-400 font-medium truncate">Total Students</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-bold text-[15px] sm:text-[17px] text-slate-900 leading-tight">143</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inner Tab Bar */}
          <div className="border-b border-slate-200 flex items-center gap-4 text-[11px] font-medium pt-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  className={`pb-1.5 cursor-pointer transition-colors relative ${
                    isActive
                      ? 'text-[#4F46E5] font-bold border-b-2 border-[#4F46E5]'
                      : 'text-slate-500 hover:text-slate-800 border-b-2 border-transparent'
                  }`}
                  onClick={() => onTabChange && onTabChange(tab.id)}
                >
                  {tab.label}
                </div>
              );
            })}
          </div>

          {/* Child View */}
          <div className="flex-1 min-h-0">{children}</div>
        </div>
      </main>
    </div>
  );
}
