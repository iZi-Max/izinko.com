import React, { useState } from 'react';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';

const ContactCard = () => {
    const [copied, setCopied] = useState(false);

    const handleContactClick = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('max@izi.cc');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full md:w-80 flex flex-col justify-end gap-4 relative z-10">
            <div className="group bg-white/60 dark:bg-black/60 backdrop-blur-md border border-neutral-300 dark:border-neutral-800 p-1 relative overflow-hidden transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">

                <div className="h-40 bg-neutral-200 dark:bg-neutral-900 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-700"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                    <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/80 dark:bg-black/80 backdrop-blur border border-neutral-300 dark:border-neutral-700 px-2 py-1">
                        <MapPin size={12} className="text-yellow-500" />
                        <span className="text-[10px] font-bold text-neutral-700 dark:text-neutral-300 tracking-wider uppercase">Toronto, Canada</span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                        <div className="bg-yellow-500 text-black text-[10px] font-black px-2 py-0.5 uppercase tracking-tighter">
                            Open for Work
                        </div>
                    </div>
                </div>

                <div className="bg-white/90 dark:bg-neutral-900/90 border-t border-neutral-300 dark:border-neutral-800 p-4 space-y-4">
                    <a
                        href=""
                        onClick={handleContactClick}
                        target="_self"
                        className="relative w-full group/btn overflow-hidden block cursor-pointer"
                    >
                        <div className={`absolute inset-0 bg-yellow-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out ${copied ? 'translate-y-0' : ''}`}></div>
                        <div className="relative bg-neutral-200 dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-700 group-hover/btn:border-yellow-500 py-3 px-4 flex items-center justify-between transition-colors duration-300">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-neutral-400/50 dark:bg-black/50 group-hover/btn:bg-black/20 flex items-center justify-center rounded-sm border border-neutral-600/20 dark:border-white/10">
                                    <Mail size={14} className="text-neutral-800 dark:text-white group-hover/btn:text-black transition-colors" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="text-xs font-black tracking-widest uppercase text-neutral-900 dark:text-white group-hover/btn:text-black transition-colors">
                                        {copied ? 'Email Copied!' : 'Contact Me'}
                                    </span>
                                </div>
                            </div>
                            <ArrowUpRight size={16} className={`opacity-50 group-hover/btn:opacity-100 transition-opacity text-neutral-900 dark:text-white **group-hover/btn:text-black** ${copied ? 'opacity-100 rotate-45' : ''}`} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;