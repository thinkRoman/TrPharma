'use client';

import { CheckCircle, Link } from 'lucide-react';
import { useState } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function ProductLink({ id }: { id: string }) {
  const [linkCopied, setLinkCopied] = useState(false);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className='top-2 right-2 absolute'
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            navigator.clipboard.writeText(
              `${window.location.origin}/products/${id}`
            );
            setLinkCopied(true);
            setTimeout(() => setLinkCopied(false), 2000);
          }}
        >
          {linkCopied ? <CheckCircle size={16} /> : <Link size={16} />}
        </TooltipTrigger>
        <TooltipContent side='bottom'>
          {linkCopied ? <p>Link Copied</p> : <p>Copy Link</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
