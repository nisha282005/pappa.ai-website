import React from 'react';
import { cn } from '../../utils/helpers';

/**
 * Clean separator line using design-system border color.
 */
export default function Divider({ className = '' }) {
  return <hr className={cn('border-t border-[#E5E7EB] my-8 w-full', className)} />;
}
