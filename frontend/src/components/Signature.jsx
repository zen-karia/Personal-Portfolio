import { useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi';

export default function Signature() {
  const [animKey, setAnimKey] = useState(0);

  return (
    <div className="relative inline-block group -rotate-2 mt-1">
      {/* The key change forces React to remount the span, restarting the animation */}
      <span
        key={animKey}
        className="font-signature text-5xl text-blue-500 dark:text-blue-400 inline-block signature-animate leading-tight select-none"
      >
        Zenil Karia
      </span>

      {/* Replay button — visible on hover */}
      <button
        onClick={() => setAnimKey(k => k + 1)}
        aria-label="Replay signature"
        className="absolute -bottom-4 -right-6 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 shadow-sm transition-all duration-150 opacity-0 group-hover:opacity-100 hover:scale-110"
      >
        <FiRefreshCw size={11} />
      </button>
    </div>
  );
}
