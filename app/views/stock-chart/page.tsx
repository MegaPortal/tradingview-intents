'use client';

import ChartLayout from "@/components/chart-layout";
import StockChart from "@/components/stock-chart";
import { useSearchParams } from "next/navigation";

export default function Page() {

    // getting data_source from query parameters
    const searchParams = useSearchParams()
    const original = searchParams.get('symbol');
    const comparison = searchParams.get('comparison');
    const symbol = original ? original : 'AAPL';

    const comparisonSymbols = (comparison && comparison != 'undefined' ? comparison.split(',') : []).map((symbol) => {
        return {
            symbol: symbol,
            position: "SameScale"
        }
    }) as { symbol: string; position: "SameScale" }[];

    return <ChartLayout>
        <div className="w-[600px]">
            <StockChart symbol={symbol} comparisonSymbols={comparisonSymbols} />
        </div>
    </ChartLayout>
}