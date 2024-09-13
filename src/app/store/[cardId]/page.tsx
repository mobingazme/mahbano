import CardDetails from '@/template/cardDetails';
import React from 'react';

interface PageDetailsProps {
  params: {
    cardId: string;
  };
}

const PageDetails: React.FC<PageDetailsProps> = ({ params }) => {
  const cardId = parseInt(params.cardId, 10); // تبدیل cardId به عدد
  return <CardDetails cardId={cardId} />;
};

export default PageDetails;
