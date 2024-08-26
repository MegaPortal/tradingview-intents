import ChartLayout from "@/components/chart-layout";
import StockPrice from "@/components/stock-price";
export default function Page() {
    return <ChartLayout>
        <div className="w-[600px]">
            <StockPrice props={"AAPL"} />
        </div>
    </ChartLayout>
}