'use client';

import { Link } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function ProductLink({ id }: { id: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className='top-2 right-2 absolute'
          onClick={() =>
            navigator.clipboard.writeText(
              `${window.location.origin}/products#${id}`
            )
          }
        >
          <Link size={16} />
        </TooltipTrigger>
        <TooltipContent side='bottom'>
          <p>Copy Link</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
