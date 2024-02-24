import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Container(props: ContainerProps) {
  const { className, ...delegatedProps } = props;
  return (
    <div
      className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...delegatedProps}
    />
  );
}
