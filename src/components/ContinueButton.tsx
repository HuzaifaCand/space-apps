import { SelPoint } from "@/app/page";

interface Props {
  redirecting: boolean;
  setRedirecting: (thingamajig: boolean) => void;
  selectedPoint: SelPoint;
}

export default function ContinueButton({
  redirecting,
  selectedPoint,
  setRedirecting,
}: Props) {
  return (
    <div className="py-1 flex justify-end">
      <button
        disabled={Boolean(!selectedPoint)}
        onClick={() => setRedirecting(true)}
        className={`${
          selectedPoint
            ? "bg-blue-900 text-white font-medium hover:cursor-pointer"
            : "bg-blue-900/20 cursor-not-allowed font-medium text-white"
        } px-4 py-2 w-full text-xs rounded-sm shadow-md`}
      >
        {redirecting ? (
          <span className="flex items-center justify-center space-x-2">
            <svg
              className="w-4 h-4 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <span>Redirecting...</span>
          </span>
        ) : (
          "Continue"
        )}
      </button>
    </div>
  );
}
