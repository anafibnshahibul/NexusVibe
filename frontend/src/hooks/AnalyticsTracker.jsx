import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function AnalyticsTracker() {
    const location = useLocation();

    useEffect(() => {
        const trackUser = async () => {
            console.log("Sending data to server for:", location.pathname);
            try {
                const response = await fetch('http://localhost:5000/api/analytics', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ page: location.pathname }),
                });

                if (response.ok) {
                    console.log("Server received data!");
                } else {
                    console.log("Server rejected data:", response.status);
                }
            } catch (error) {
                console.error("Network Error:", error);
            }
        };

        trackUser();
    }, [location]);

    return null; // This component doesn't render anything visually
}

export default AnalyticsTracker;