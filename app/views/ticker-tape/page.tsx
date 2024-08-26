import ChartLayout from "@/components/chart-layout";
import TickerTape from "@/components/ticker-tape";
export default function Page() {
    return <ChartLayout>
        <div className="w-[600px]">
            <TickerTape />
        </div>
    </ChartLayout>
}