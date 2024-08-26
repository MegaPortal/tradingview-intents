'use client';

import ChartLayout from "@/components/chart-layout";
import MarketHeatmap from "@/components/market-heatmap";
import { useSearchParams } from "next/navigation";

export default function Page() {

    // getting data_source from query parameters
    const searchParams = useSearchParams()
    const original = searchParams.get('data_source');
    const dataSource = original ? original : 'AllUS';

    return <ChartLayout>
        <div className="w-[600px] h-[500px]">
            <MarketHeatmap dataSource={dataSource} />
        </div>
    </ChartLayout>
}