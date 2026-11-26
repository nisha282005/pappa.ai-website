import React from 'react';
import SafetyDashboardShell from './SafetyDashboardShell';
import { Bell, AlertTriangle, ShieldAlert, Bus, Clock, Check, Send } from 'lucide-react';

/**
 * SafetyDashboardAlerts
 * View 4 of the Safety Carousel:
 * Instant safety notifications, unauthorized pickup interventions, and emergency alerts.
 */
export default function SafetyDashboardAlerts({ onTabChange }) {
  const alerts = [
    {
      id: 'ALT-109',
      level: 'High Priority',
      badgeClass: 'bg-rose-50 text-rose-700 border-rose-200',
      icon: ShieldAlert,
      iconBg: 'bg-rose-100 text-rose-600',
      title: 'Unverified Contact Blocked at Gate 1',
      desc: 'An individual claiming to be a cousin attempted to collect Varun K (Grade 1 - B). Denied entry. Mother contacted and verified this was unauthorized.',
      time: '6 mins ago',
      resolved: false,
      action: 'Review Incident',
    },
    {
      id: 'ALT-108',
      level: 'Attention Required',
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: Clock,
      iconBg: 'bg-amber-100 text-amber-600',
      title: 'Late Pickup Overdue (> 35 mins)',
      desc: '3 students in Junior Wing remain uncollected. Automated SMS alert dispatched to primary and secondary guardians.',
      time: '18 mins ago',
      resolved: false,
      action: 'Call Guardians',
    },
    {
      id: 'ALT-107',
      level: 'Transport Update',
      badgeClass: 'bg-sky-50 text-sky-700 border-sky-200',
      icon: Bus,
      iconBg: 'bg-sky-100 text-sky-600',
      title: 'School Bus Route #04 Delayed by 15 mins',
      desc: 'Heavy traffic on Outer Ring Road. Live GPS tracking updated and proactive broadcast message sent to 28 parents via Pappa App.',
      time: '34 mins ago',
      resolved: true,
      action: 'View Route GPS',
    },
  ];

  return (
    <SafetyDashboardShell activeTab="safety-alerts" onTabChange={onTabChange}>
      <div className="space-y-3">
        {/* Top Action Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="font-bold text-[12px] text-slate-900">
              Active Security & Safety Notifications
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <button
              type="button"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#4F46E5] text-white font-medium hover:bg-[#4338CA] cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Broadcast Parent Alert</span>
            </button>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-2">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <div
                key={alert.id}
                className="bg-white rounded-xl border border-slate-200/90 p-3 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-indigo-100 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg ${alert.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-[12px] text-slate-900 leading-snug">
                        {alert.title}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${alert.badgeClass}`}>
                        {alert.level}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">{alert.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                      {alert.desc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2 self-end sm:self-center">
                  <button
                    type="button"
                    className="px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50 text-[10px] font-semibold text-slate-700 cursor-pointer transition-colors"
                  >
                    {alert.action}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SafetyDashboardShell>
  );
}
