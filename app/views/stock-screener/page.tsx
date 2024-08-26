'use client';

import ChartLayout from "@/components/chart-layout";
import StockScreener from "@/components/stock-screener";
import { useSearchParams } from "next/navigation";
export default function Page() {

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