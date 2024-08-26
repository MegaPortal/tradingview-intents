export default function ChartLayout(props: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            {props.children}
        </div>
    );
}