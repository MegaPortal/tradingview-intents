'use client';

import ChartLayout from "@/components/chart-layout";
import TradingCalendar from "@/components/trading-calendar";
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
    const original = searchParams.get('country_filter');
    const filter = original && original !== 'undefined' ? original : '"ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu"';

    return <ChartLayout>
        <div className="w-[600px] h-[500px]">
            <TradingCalendar countryFilter={filter} />
        </div>
    </ChartLayout>
}