import React from 'react';

interface ISectionProps {
    title: string;
}

const Section: React.FC<ISectionProps> = ({
    title
}) => {
  return (
    <div className="section">
        <h3>{title}</h3>
    </div>
  );
}

export default Section;