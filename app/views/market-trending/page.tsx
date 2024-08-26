'use client';

import ChartLayout from "@/components/chart-layout";
import MarketTrending from "@/components/market-trending";
import { useSearchParams } from "next/navigation";

export default function Page() {

    // getting data_source from query parameters
    const searchParams = useSearchParams()
    const original = searchParams.get('exchange');
    const dataSource = original ? original : 'US';

    return <ChartLayout>
        <div className="w-[600px]">
            <MarketTrending exchange={dataSource} />
        </div>
    </ChartLayout>
}