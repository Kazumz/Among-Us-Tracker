import React from 'react';

interface ISectionProps {
    title: string;
}

const Section: React.FC<ISectionProps> = ({
    title
}) => {
  return (
    <div className="section">
        <h2>{title}</h2>
    </div>
  );
}

export default Section;