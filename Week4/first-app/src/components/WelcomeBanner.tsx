import React from 'react'

interface WelcomeBannerProps {
    title: string;
    children: React.ReactNode;

}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({title, children}) => {
    return (
        <div style={{ backgroundColor: 'lightblue', padding: '10px'}}>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default WelcomeBanner;