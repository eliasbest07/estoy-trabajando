import React, { ReactNode } from 'react';

interface BoxDarkProps {
    color: string;
    height: number;
    width: number;
    left: number;
    children: ReactNode;
}

const BoxDark: React.FC<BoxDarkProps> = ({ color, height, width, left, children }) => {
    return (
        <div style={{
            height: `${height}px`,
            width: `${width}px`,
            background: `${color}`,
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.35), inset -1px 0px 2px rgba(201, 201, 201, 0.1), inset 5px -5px 12px rgba(255, 255, 255, 0.05), inset -5px 5px 12px rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(6px)',
            borderRadius: '20px',
            marginLeft: `${left}px`,
            marginTop: `${left}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {children}
        </div>
    );
};

export default BoxDark;