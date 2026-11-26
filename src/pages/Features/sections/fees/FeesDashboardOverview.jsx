import React from 'react';

/**
 * FeesDashboardOverview
 * View 1 of the Fees Carousel:
 * Uses the authentic high-resolution Fees Dashboard screenshot from the project assets.
 */
export default function FeesDashboardOverview() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white select-none overflow-hidden">
      <picture className="w-full h-full flex items-center justify-center">
        <source srcSet="/images/features/fees-overview-dashboard.webp" type="image/webp" />
        <img
          src="/images/features/fees-overview-dashboard.png"
          alt="Pappa.ai Fees Dashboard Overview showing summary cards, recent payments ledger, grade collection chart, and payment status breakdown"
          className="w-full h-full object-contain block select-none"
          loading="eager"
          draggable={false}
        />
      </picture>
    </div>
  );
}
