'use client';

import ChartLayout from "@/components/chart-layout";
import StockNews from "@/components/stock-news";
import { useSearchParams } from "next/navigation";
export default function Page() {

    // getting data_source from query parameters
    const searchParams = useSearchParams()
    const original = searchParams.get('symbol');
    const symbol = original ? original : 'AAPL';

    return <ChartLayout>
        <div className="w-[600px]">
            <StockNews props={symbol} />
        </div>
    </ChartLayout>
}