import React, { useState } from 'react';
import RetroLogo from './RetroLogo';
import { navItems, currencies } from '../data/mockData';
import { CircleDollarSign, Clock, Star, Menu, X } from 'lucide-react';

const Header = ({ age, progressPercentage, activeTab, onTabChange, onOpenCvModal, showCvMarker, theme }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const getCurrencyIcon = (id) => {
        switch (id) {
            case 'invested': return <CircleDollarSign size={18} />;
            case 'time': return <Clock size={18} />;
            case 'stars': return <Star size={18} />;
            default: return null;
        }
    };

    const getCurrencyColor = (id) => {
        switch (id) {
            case 'invested': return 'text-emerald-400';
            case 'time': return 'text-blue-400';
            case 'stars': return 'text-yellow-400';
            default: return 'text-neutral-400';
        }
    };

    const handleTabClick = (item) => {
        const isCv = item.label === 'CV';
        if (isCv) {
            onOpenCvModal();
        } else {
            onTabChange(item.label);
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className="relative z-20 flex flex-nowrap items-center justify-between px-4 md:px-8 py-3.5 bg-white/90 dark:bg-black/90 border-b border-neutral-300 dark:border-neutral-800 gap-4">

                <div className="flex items-center gap-4 md:gap-6 shrink-0">
                    <RetroLogo />

                    <div className="flex items-center pl-4 md:pl-6 border-l border-neutral-400 dark:border-neutral-700 gap-2">
                        <div
                            className="w-9 h-9 rounded-full border border-neutral-400 dark:border-neutral-600 flex items-center justify-center text-xs font-bold text-neutral-900 dark:text-white relative shrink-0"
                            style={{
                                background: theme === 'dark'
                                    ? `conic-gradient(rgba(255, 255, 255, 0.7) ${progressPercentage}%, #27272a ${progressPercentage}%)`
                                    : `conic-gradient(rgba(64, 64, 64, 0.7) ${progressPercentage}%, #e5e5e5 ${progressPercentage}%)`,
                            }}
                            title={`Progress to next birthday: ${progressPercentage}%`}
                        >
                            <div className="absolute inset-0 m-[3px] rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center border border-neutral-300 dark:border-neutral-700">
                                <span className="text-sm font-bold text-neutral-900 dark:text-white">{age}</span>
                            </div>
                        </div>
                    </div>
                </div>


                <nav className="hidden md:flex items-center gap-2">
                    {navItems.map((item) => {
                        const isCv = item.label === 'CV';
                        const isActive = activeTab === item.label;
                        const showBadge = isCv ? showCvMarker : item.badge;

                        return (
                            <button
                                key={item.label}
                                onClick={() => handleTabClick(item)}
                                className={`
                                    relative group px-4 py-2 text-sm font-bold tracking-widest transition-all duration-150 border whitespace-nowrap
                                    ${isActive && !isCv
                                        ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white border-neutral-400 dark:border-neutral-600 shadow-lg'
                                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/30 dark:hover:bg-neutral-800/30 border-transparent hover:border-neutral-400 dark:hover:border-neutral-700'
                                    }
                                `}
                            >
                                {item.label}
                                {showBadge && (
                                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                                )}
                            </button>
                        );
                    })}
                </nav>


                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-neutral-400 dark:border-neutral-700 hover:bg-neutral-100/30 dark:hover:bg-neutral-800/30 transition-colors"
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>


                <div className="hidden md:flex items-center">
                    {currencies.map((curr, idx) => (
                        <React.Fragment key={curr.id}>
                            {idx > 0 && (

                                <div className="h-5 w-px bg-gray-300 dark:bg-neutral-700 mx-5"></div>
                            )}
                            <div className="group relative flex items-center gap-2 cursor-help">
                                <span className={`font-bold ${getCurrencyColor(curr.id)}`}>
                                    {getCurrencyIcon(curr.id)}
                                </span>
                                <span className="text-base font-bold tracking-wide text-gray-900 dark:text-neutral-200">{curr.value}</span>

                                <div className="
                                    absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 rounded-md text-xs font-medium opacity-0 
                                    group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl z-50
                                    bg-white border border-gray-300 text-gray-700
                                    dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300
                                ">
                                    {curr.label}
                                    <div className="
                                        absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45
                                        bg-white border-t border-l border-gray-300
                                        dark:bg-neutral-900 dark:border-neutral-700
                                    "></div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </header>


            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-[73px] left-0 right-0 z-30 bg-white dark:bg-neutral-900 border-b border-neutral-300 dark:border-neutral-800 shadow-lg">
                    <nav className="flex flex-col p-4 gap-2">
                        {navItems.map((item) => {
                            const isCv = item.label === 'CV';
                            const isActive = activeTab === item.label;
                            const showBadge = isCv ? showCvMarker : item.badge;

                            return (
                                <button
                                    key={item.label}
                                    onClick={() => handleTabClick(item)}
                                    className={`
                                        relative text-left px-4 py-3 text-sm font-bold tracking-widest transition-all duration-150 border
                                        ${isActive && !isCv
                                            ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white border-neutral-400 dark:border-neutral-600'
                                            : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/30 dark:hover:bg-neutral-800/30 border-transparent hover:border-neutral-400 dark:hover:border-neutral-700'
                                        }
                                    `}
                                >
                                    <span className="flex items-center gap-2">
                                        {item.label}
                                        {showBadge && (
                                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                                        )}
                                    </span>
                                </button>
                            );
                        })}
                    </nav>
                </div>
            )}
        </>
    );
};

export default Header;