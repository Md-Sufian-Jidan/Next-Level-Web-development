import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const AnalyticsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h1>This is analytics Layouts</h1>
            <div className='space-x-5 my-5'>
                <Button asChild>
                    <Link href="/dashboard/analytics/weekly">Weekly</Link>
                </Button>
                <Button asChild>
                    <Link href="/dashboard/analytics/monthly">Monthly</Link>
                </Button>
                <div className='mt-5'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AnalyticsLayout;