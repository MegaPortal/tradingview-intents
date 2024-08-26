'use client';

import ChartLayout from "@/components/chart-layout";
import EtfHeatMap from "@/components/etf-heatmap";
import { useSearchParams } from 'next/navigation'

export default function Page() {

    // getting data_source from query parameters
    const searchParams = useSearchParams()
    const original = searchParams.get('data_source');
    const dataSource = original ? original : 'AllUSEtf';

    return <ChartLayout>
        <div className="w-[600px] h-[500px]">
            <EtfHeatMap dataSource={dataSource} />
        </div>
    </ChartLayout>
}