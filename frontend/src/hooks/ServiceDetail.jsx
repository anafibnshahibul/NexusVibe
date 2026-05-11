import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';

function ServiceDetail({ title }) {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 border border-blue-500/50">
                <Cpu size={40} className="text-blue-500" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4">
                {title}
            </h1>
            <p className="text-slate-400 max-w-lg mb-10 text-lg">
                Detailed breakdown for {title} service is coming soon. Stay tuned for the future of digital excellence.
            </p>
            <Link to="/services" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all">
                Back to Services
            </Link>
        </div>
    );
}

export default ServiceDetail;