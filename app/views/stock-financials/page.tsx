'use client';

import ChartLayout from "@/components/chart-layout";
import StockFinancials from "@/components/stock-financials";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
    return <Suspense fallback={<div>Loading...</div>}>
        <Wrapped />
    </Suspense>
}

export function Wrapped() {

    // getting data_source from query parameters
    const searchParams = useSearchParams()
    const original = searchParams.get('symbol');
    const symbol = original ? original : 'AAPL';

    return <ChartLayout>
        <div className="w-[600px]">
            <StockFinancials props={symbol} />
        </div>
    </ChartLayout>
}