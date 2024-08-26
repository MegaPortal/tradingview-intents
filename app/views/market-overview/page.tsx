import ChartLayout from "@/components/chart-layout";
import MarketOverview from "@/components/market-overview";
export default function Page() {
    return <ChartLayout>
        <div className="w-[600px] h-[500px]">
            <MarketOverview />
        </div>
    </ChartLayout>
}