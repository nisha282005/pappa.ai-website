import React from 'react';
import {
  LayoutDashboard,
  CreditCard,
  FileText,
  Receipt,
  BarChart3,
  Settings,
  Search,
  Bell,
  ChevronDown,
  Shield,
} from 'lucide-react';

/**
 * FeesDashboardShell
 * Provides the authentic Springfield Academy dashboard frame for Fees views.
 * Replicates the sidebar, top search bar, academic year/branch filters, and user profile.
 * Responsively collapses the sidebar on mobile to prioritize workspace readability.
 */
export default function FeesDashboardShell({ activeTab = 'overview', subtitle = '', children }) {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'structure', label: 'Fee Structure', icon: FileText },
    { id: 'invoices', label: 'Invoices', icon: Receipt },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-full h-full bg-[#F8FAFC] flex flex-col sm:flex-row text-left font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 select-none overflow-hidden text-[12px] sm:text-[13px]">
      {/* Mobile Top App Bar (visible only on mobile < sm) */}
      <div className="flex sm:hidden items-center justify-between px-3.5 py-2.5 bg-white border-b border-slate-100 text-[11px] shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4F46E5] shrink-0">
            <Shield className="w-3.5 h-3.5 fill-[#4F46E5]/20" />
          </div>
          <span className="font-bold text-slate-900 truncate">Springfield Academy</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="px-2 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] font-bold text-[10px] capitalize">
            {activeTab}
          </span>
          <span className="text-[10px] text-slate-400">2026-27</span>
        </div>
      </div>

      {/* Sidebar (Left, visible on sm and up) */}
      <aside className="hidden sm:flex sm:w-48 lg:w-56 shrink-0 bg-white border-r border-slate-100 flex-col justify-between p-3.5 sm:p-4">
        <div>
          {/* Institution Header */}
          <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100/80">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4F46E5] shrink-0">
              <Shield className="w-4 h-4 fill-[#4F46E5]/20" />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-[13px] text-slate-900 leading-tight truncate">Springfield Academy</div>
              <div className="text-[11px] text-slate-400">6 Branches</div>
            </div>
          </div>

          {/* Nav Categories */}
          <div className="mt-4">
            <div className="text-[10px] font-bold text-slate-400 px-2 mb-1.5">
              Main
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 text-[12px] font-medium cursor-pointer">
              <LayoutDashboard className="w-3.5 h-3.5 text-slate-400" />
              <span>Dashboard</span>
            </div>
          </div>

          <div className="mt-3.5">
            <div className="text-[10px] font-bold text-slate-400 px-2 mb-1.5">
              Fees
            </div>
            <div className="space-y-0.5">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = item.id === activeTab;
                return (
                  <div
                    key={item.id}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
                      isActive
                        ? 'bg-[#EEF2FF] text-[#4F46E5] font-semibold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <IconComponent
                      className={`w-3.5 h-3.5 ${isActive ? 'text-[#4F46E5]' : 'text-slate-400'}`}
                    />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* User Info Bottom */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-[11px] shrink-0">
              SJ
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-[11px] text-slate-900 leading-tight truncate">Sarah Johnson</div>
              <div className="text-[10px] text-slate-400">School Admin</div>
            </div>
          </div>
          <div className="text-[9px] text-slate-400 mt-2 flex items-center gap-1">
            <span>Powered by</span>
            <span className="font-semibold text-slate-600">Pappa.ai</span>
          </div>
        </div>
      </aside>

      {/* Main Workspace (Right) */}
      <div className="flex-1 min-w-0 flex flex-col bg-[#F8FAFC] overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-100 px-3.5 sm:px-6 py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-2.5 shrink-0">
          <div className="min-w-0">
            <h4 className="font-bold text-[15px] sm:text-[18px] text-slate-900 leading-tight">Fees</h4>
            <p className="hidden sm:block text-[11px] sm:text-[12px] text-slate-500 leading-none mt-0.5 truncate">
              {subtitle || 'Manage fee collection, payments, and financial records across all branches.'}
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Academic Year Dropdown */}
            <div className="flex items-center gap-1 bg-white border border-slate-200/90 rounded-lg px-2 sm:px-2.5 py-1 text-[11px] text-slate-700 font-medium">
              <span className="text-slate-400 text-[10px] hidden sm:inline">Year:</span>
              <span>2026 - 2027</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>

            {/* Branch Dropdown */}
            <div className="hidden md:flex items-center gap-1 bg-white border border-slate-200/90 rounded-lg px-2.5 py-1 text-[11px] text-slate-700 font-medium">
              <span className="text-slate-400 text-[10px]">Branch:</span>
              <span>All Branches</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>

            {/* Notification Bell */}
            <div className="relative w-7 h-7 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600">
              <Bell className="w-3.5 h-3.5" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-red-500" />
            </div>
          </div>
        </header>

        {/* View Body */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5">
          {children}
        </div>
      </div>
    </div>
  );
}
