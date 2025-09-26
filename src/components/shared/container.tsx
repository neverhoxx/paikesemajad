import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
    return (
        <div className={cn('mx-auto max-w-[1240px] w-full px-[5px] __container h-full', className)}>
            {children}
        </div>
    );
};