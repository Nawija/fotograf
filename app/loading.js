export default function Loading() {
    return (
        <div className="w-full h-[90vh] flex items-center justify-center opacityAnimation">
            <div className="h-12 w-12 rounded-full border-4 border-t-red-800 animate-spin" />
        </div>
    );
}
