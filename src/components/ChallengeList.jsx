import React from 'react';
import { Code, Target, Zap } from 'lucide-react';

const ChallengeList = () => {
    const focusItems = [
        { icon: Target, label: "UI/UX Excellence", sub: "Pixel-perfect interfaces", status: "ACTIVE" },
        { icon: Code, label: "Clean Architecture", sub: "Maintainable code", status: "ONGOING" },
        { icon: Zap, label: "Performance", sub: "Optimized delivery", status: "ONGOING" }
    ];

    return (
        <div className="w-full md:w-80 flex flex-col gap-6">
            {/* Current Focus Card - Redesigned to match Work page style */}
            <div className="group bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 clip-corners-card transition-transform hover:-translate-y-1 duration-300 flex flex-col hover:border-neutral-400 dark:hover:border-neutral-700 hover:shadow-xl">

                {/* CARD HEADER AREA */}
                <div className="h-32 w-full bg-gradient-to-br from-orange-100/50 to-neutral-50 dark:from-orange-950/30 dark:to-neutral-900 relative overflow-hidden shrink-0 border-b border-neutral-300 dark:border-neutral-800">
                    {/* Overlay grid pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>

                    {/* Decorative icon */}
                    <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 rounded-full border-2 border-neutral-400/10 dark:border-white/10 flex items-center justify-center bg-neutral-200/20 dark:bg-black/20 backdrop-blur-sm">
                            <Target className="text-orange-400" size={20} />
                        </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute bottom-0 right-0 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider border-t border-l bg-orange-100/50 text-orange-700 border-orange-300 dark:bg-orange-950/50 dark:text-orange-400 dark:border-orange-900/50 clip-top-left">
                        CURRENT FOCUS
                    </div>
                </div>

                {/* CARD CONTENT */}
                <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-black uppercase tracking-tight mb-4 text-neutral-900 dark:text-white leading-none group-hover:text-orange-400 transition-colors">
                        Active Priorities
                    </h3>

                    {/* FOCUS ITEMS */}
                    <div className="space-y-3 mb-4">
                        {focusItems.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 group/item">
                                {/* Icon container */}
                                <div className="w-8 h-8 flex items-center justify-center rounded-sm border border-orange-300 dark:border-orange-900/50 bg-orange-100/20 dark:bg-orange-950/20 text-orange-500">
                                    <item.icon size={14} strokeWidth={2.5} />
                                </div>

                                {/* Text */}
                                <div className="flex-1">
                                    <div className="text-xs font-black uppercase text-neutral-700 dark:text-neutral-300">
                                        {item.label}
                                    </div>
                                    <div className="text-[10px] font-mono uppercase text-neutral-600 tracking-wide">
                                        {item.sub}
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="text-[9px] font-bold text-orange-500 bg-orange-950/30 px-2 py-0.5 border border-orange-900/30">
                                    {item.status}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Card Footer Stripe */}
                <div className="h-8 w-full bg-neutral-200 dark:bg-neutral-800 border-t border-neutral-300 dark:border-neutral-700 flex justify-between items-center px-3">
                    <span className="text-[9px] font-mono text-neutral-600">FOCUS-ID: 001</span>
                    <div className="flex gap-1">
                        <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
                    </div>
                </div>
            </div>

            <style>{`
                .clip-corners-card {
                    clip-path: polygon(
                        10px 0, 100% 0, 
                        100% calc(100% - 10px), calc(100% - 10px) 100%, 
                        0 100%, 0 10px
                    );
                }
                .clip-corners-sm {
                    clip-path: polygon(
                        4px 0, 100% 0, 
                        100% calc(100% - 4px), calc(100% - 4px) 100%, 
                        0 100%, 0 4px
                    );
                }
                .clip-top-left {
                    clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px);
                }
            `}</style>
        </div>
    );
};

export default ChallengeList;
