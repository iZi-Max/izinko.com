import React, { useState } from 'react';
import { HeartHandshake, X, Minus, Linkedin, Mail, CheckCircle } from 'lucide-react';

const LINKEDIN_URL = "https://www.linkedin.com/in/max-zinko/";
const EMAIL_ADDRESS = "max@izi.cc";

const WelcomeCard = ({ isOpen, onClose, onMinimize, isMinimized }) => {

    const [copied, setCopied] = useState(false);

    if (!isOpen && !isMinimized) return null;

    const FlowingContent = (
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Welcome!
            <br />
            Here, you'll find a concise summary of my professional experience, core technical skills, and key projects. I am always open to new challenges and collaborative opportunities.
            <br /><br />
            Let's connect and build something impactful together.
        </p>
    );

    const baseClasses = isMinimized
        ? "fixed bottom-20 left-4 w-48 h-10 transition-all duration-300 z-50 clip-corners-card-sm"
        : "absolute md:fixed top-[100px] md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 w-[95%] max-w-sm md:max-w-xl md:w-[400px] transition-all duration-300 z-50";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(EMAIL_ADDRESS).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className={baseClasses}>
            <div className="group bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 clip-corners-card flex flex-col hover:border-neutral-400 dark:hover:border-neutral-700 hover:shadow-xl h-full">

                <div className="h-10 w-full bg-neutral-200/50 dark:bg-neutral-800/50 border-b border-neutral-300 dark:border-neutral-700 flex justify-between items-center px-3 shrink-0">
                    <div className="flex items-center gap-2">
                        <HeartHandshake className="text-orange-500" size={14} />
                        <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
                            {isMinimized ? 'WELCOME' : 'A GREETING'}
                        </span>
                    </div>
                    <div className="flex gap-1">
                        <button
                            onClick={onMinimize}
                            className="w-5 h-5 flex items-center justify-center text-neutral-500 hover:text-white transition-colors hover:bg-neutral-700"
                            aria-label="Minimize"
                        >
                            <Minus size={12} />
                        </button>
                        <button
                            onClick={onClose}
                            className="w-5 h-5 flex items-center justify-center text-neutral-500 hover:text-red-400 transition-colors hover:bg-red-900/50"
                            aria-label="Close"
                        >
                            <X size={12} />
                        </button>
                    </div>
                </div>

                {(!isMinimized) && (
                    <>
                        <div className="p-6 flex-1 flex flex-col justify-center text-left">
                            <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-neutral-900 dark:text-white leading-tight group-hover:text-orange-400 transition-colors">
                                Let's Connect
                            </h3>

                            <div className="mb-6">
                                {FlowingContent}
                            </div>

                            <div className="flex gap-4 pt-2 border-t border-neutral-300 dark:border-neutral-800">
                                <a
                                    href={LINKEDIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-blue-400 transition-colors bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-blue-400 clip-corners-sm"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin size={16} />
                                </a>

                                <button
                                    onClick={handleCopyEmail}
                                    className={`
                                        w-10 h-10 flex items-center justify-center transition-colors bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 clip-corners-sm
                                        ${copied
                                            ? 'text-green-500 border-green-500 hover:border-green-500'
                                            : 'text-neutral-500 hover:text-white hover:border-white'
                                        }
                                    `}
                                    aria-label="Copy Email Address"
                                >
                                    {copied ? <CheckCircle size={16} /> : <Mail size={16} />}
                                </button>
                                <span className={`text-xs text-green-500 transition-opacity duration-300 self-center ${copied ? 'opacity-100' : 'opacity-0'}`}>
                                    Email Copied!
                                </span>
                            </div>
                        </div>

                        <div className="h-8 w-full bg-neutral-200 dark:bg-neutral-800 border-t border-neutral-300 dark:border-neutral-700 flex justify-center items-center px-3 shrink-0">
                            <span className="text-[9px] font-mono text-neutral-600 dark:text-neutral-500">PORTFOLIO V.1.0</span>
                        </div>
                    </>
                )}
            </div>
            <style>{`
                .clip-corners-card {
                    clip-path: polygon(
                        10px 0, 100% 0, 
                        100% calc(100% - 10px), calc(100% - 10px) 100%, 
                        0 100%, 0 10px
                    );
                }
                .clip-corners-card-sm {
                    clip-path: polygon(
                        4px 0, 100% 0, 
                        100% calc(100% - 4px), calc(100% - 4px) 100%, 
                        0 100%, 0 4px
                    );
                }
                .clip-corners-sm {
                    clip-path: polygon(
                        4px 0, 100% 0, 
                        100% calc(100% - 4px), calc(100% - 4px) 100%, 
                        0 100%, 0 4px
                    );
                }
            `}</style>
        </div>
    );
};

export default WelcomeCard;