'use client';

import ChartLayout from "@/components/chart-layout";
import StockScreener from "@/components/stock-screener";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
    return <Suspense fallback={<div>Loading...</div>}>
        <Wrapped />
    </Suspense>
}

function Wrapped() {

    // getting data_source from query parameters
    const searchParams = useSearchParams()
    const original = searchParams.get('market');
    const market = original ? original : 'AAPL';

    return <ChartLayout>
        <div className="w-[600px]">
            <StockScreener market={market} />
        </div>
    </ChartLayout>
}