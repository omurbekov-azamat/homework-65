import React from 'react';

interface Props {
  title: string;
  content: string;
}
const Content: React.FC<Props> = ({title, content}) => {
  return (
    <div className='text-center mt-5'>
      <h3 className='mb-5'>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Content;