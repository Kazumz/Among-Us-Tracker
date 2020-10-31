import React from 'react';
import classnames from 'classnames';

import AddNewPlayer from './AddNewPlayer';
import ManagePlayers from './ManagePlayers';

interface IManagementProps {
    className?: string;
}

const Management: React.FC<IManagementProps> = ({
    className,
}) => {
    const managementClassName = classnames('management', className);
    return (
        <div className={managementClassName}>
            <AddNewPlayer />

            <ManagePlayers />
        </div>
    );
}

export default Management;