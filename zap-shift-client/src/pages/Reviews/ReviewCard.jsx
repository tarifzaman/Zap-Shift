import React from 'react';

const ReviewCard = ({ reviewData }) => {
  const { userName, user_photoURL, ratings, review, date } = reviewData;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full min-h-[350px]">
      {/* Quote Icon */}
      <div className="text-4xl text-teal-600 mb-4 opacity-30">“</div>
      
      {/* Review Text */}
      <p className="text-gray-600 text-sm flex-grow leading-relaxed italic">
        {review}
      </p>

      <div className="border-t border-dashed border-gray-200 my-6"></div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <img 
          src={user_photoURL} 
          alt={userName} 
          className="w-12 h-12 rounded-full object-cover border-2 border-teal-500"
        />
        <div>
          <h4 className="font-bold text-teal-900 text-base">{userName}</h4>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-sm">★ {ratings}</span>
            <span className="text-gray-400 text-xs">| {new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;