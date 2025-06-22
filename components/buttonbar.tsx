import React from 'react';

const PageControls = ({ onPrev, onPrevMany, onNext, onNextMany }: any) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 transition-opacity duration-300 bg-black bg-opacity-40 hover:bg-opacity-80 rounded-full px-6 py-2 flex gap-3 z-50">
      <button
        onClick={onPrevMany}
        className="text-white text-lg hover:scale-110 transition-transform"
        title="Go back several pages"
      >
        ⏪
      </button>
      <button
        onClick={onPrev}
        className="text-white text-lg hover:scale-110 transition-transform"
        title="Go back one page"
      >
        ⬅️
      </button>
      <button
        onClick={onNext}
        className="text-white text-lg hover:scale-110 transition-transform"
        title="Go forward one page"
      >
        ➡️
      </button>
      <button
        onClick={onNextMany}
        className="text-white text-lg hover:scale-110 transition-transform"
        title="Go forward several pages"
      >
        ⏩
      </button>
    </div>
  );
};

export default PageControls;
