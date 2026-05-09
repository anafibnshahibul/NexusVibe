import React from 'react';
import { Settings, LogOut, Grid, Heart, Folder } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-1">
            <img src="https://i.pravatar.cc/150?u=anaf" className="rounded-full border-4 border-slate-900 w-full h-full object-cover" alt="Profile" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold">Anaf Shahibul</h2>
            <p className="text-slate-500 mb-4">Digital Creator & Student</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="px-6 py-2 bg-blue-600 rounded-full text-sm font-bold">Edit Profile</button>
              <button className="px-6 py-2 bg-slate-800 rounded-full text-sm font-bold flex items-center gap-2"><Settings size={16}/> Settings</button>
            </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="flex gap-8 border-b border-slate-800 mb-8">
          <button className="pb-4 border-b-2 border-blue-500 text-blue-500 flex items-center gap-2"><Grid size={18}/> My Works</button>
          <button className="pb-4 text-slate-500 flex items-center gap-2 hover:text-white transition"><Heart size={18}/> Liked</button>
          <button className="pb-4 text-slate-500 flex items-center gap-2 hover:text-white transition"><Folder size={18}/> Collections</button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
              <img src={`https://picsum.photos/seed/profile${i}/500/500`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition cursor-pointer" alt="Work" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;