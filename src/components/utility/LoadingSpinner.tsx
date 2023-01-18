export default function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center">
            <div className="grid gap-2">
                <div className="flex items-center justify-center ">
                    <div className="w-24 h-24 border-l-2 border-white rounded-full animate-spin"></div>
                </div>

            </div>

        </div>
    )
}