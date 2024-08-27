'use client';

import ChartLayout from "@/components/chart-layout";
import MarketHeatmap from "@/components/market-heatmap";
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
    const original = searchParams.get('data_source');
    const volume = searchParams.get('volume');
    const dataSource = original && original !== 'undefined' ? original : 'AllUS';
    const volumeValue = volume && volume !== 'undefined' ? volume : 'market_cap_basic';

    return <ChartLayout>
        <div className="w-[600px] h-[500px]">
            <MarketHeatmap dataSource={dataSource} volume={volumeValue} />
        </div>
    </ChartLayout>
}