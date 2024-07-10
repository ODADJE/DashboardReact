import React from 'react';
import { Outlet } from 'react-router-dom';
import Loading from './Loading';
import { useFeedback } from '../contexts/FeedbackContext';

function Content() {
  const { isLoading } = useFeedback();
  return (
    <div className="relative row-span-11 col-span-full xl:col-span-10 bg-base-300 xl:rounded-ss-lg p-5 min-h-full overflow-scroll no-scrollbar">
      {isLoading ? <Loading /> : <Outlet />}
    </div>
  );
}

export default Content;
