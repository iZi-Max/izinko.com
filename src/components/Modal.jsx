import React, { useEffect } from 'react';
import { X, Code } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, accentColor = 'cyan', modalId = '01' }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const colorClasses = {
        cyan: {
            gradient: 'from-cyan-100/50 to-neutral-50 dark:from-cyan-950/30 dark:to-neutral-900',
            status: 'bg-cyan-100/50 text-cyan-700 border-cyan-300 dark:bg-cyan-950/50 dark:text-cyan-400 dark:border-cyan-900/50'
        },
        yellow: {
            gradient: 'from-yellow-100/50 to-neutral-50 dark:from-yellow-950/30 dark:to-neutral-900',
            status: 'bg-yellow-100/50 text-yellow-700 border-yellow-300 dark:bg-yellow-950/50 dark:text-yellow-400 dark:border-yellow-900/50'
        }
    };

    const colors = colorClasses[accentColor];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-3xl bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 clip-corners-modal transition-transform flex flex-col max-h-[85vh] hover:border-neutral-400 dark:hover:border-neutral-700"
                onClick={(e) => e.stopPropagation()}
            >
                {/* MODAL HEADER IMAGE AREA */}
                <div className={`h-24 w-full bg-gradient-to-br ${colors.gradient} relative overflow-hidden shrink-0 border-b border-neutral-300 dark:border-neutral-800`}>
                    {/* Overlay grid pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>

                    {/* Decorative icon */}
                    <div className="absolute top-4 left-4">
                        <div className="w-8 h-8 rounded-full border-2 border-neutral-400/10 dark:border-white/10 flex items-center justify-center bg-neutral-200/20 dark:bg-black/20 backdrop-blur-sm">
                            <Code className="text-neutral-600/60 dark:text-white/60" size={16} />
                        </div>
                    </div>

                    {/* Title Badge */}
                    <div className={`absolute bottom-0 right-0 px-6 py-2 font-mono text-sm font-bold uppercase tracking-wider border-t border-l ${colors.status} clip-top-left`}>
                        {title}
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center bg-neutral-200/50 dark:bg-black/50 hover:bg-neutral-300/80 dark:hover:bg-black/80 border border-neutral-400 dark:border-neutral-700 hover:border-neutral-500 dark:hover:border-neutral-500 transition-colors text-neutral-900 dark:text-white"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* MODAL CONTENT */}
                <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
                    {children}
                </div>

                {/* MODAL FOOTER STRIPE */}
                <div className="h-8 w-full bg-neutral-200 dark:bg-neutral-800 border-t border-neutral-300 dark:border-neutral-700 flex justify-between items-center px-4 shrink-0">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">MODAL-ID: {modalId}</span>
                    <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                    </div>
                </div>
            </div>

            <style>{`
                .clip-corners-modal {
                    clip-path: polygon(
                        12px 0, 100% 0, 
                        100% calc(100% - 12px), calc(100% - 12px) 100%, 
                        0 100%, 0 12px
                    );
                }
                .clip-top-left {
                    clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px);
                }
            `}</style>
        </div>
    );
};

export default Modal;
