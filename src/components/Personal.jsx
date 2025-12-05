import React from 'react';

const socialLinks = [
    {
        id: 1,
        title: 'GitHub',
        sub: 'Code & Repos',
        url: 'https://github.com/iZi-Max/izinko.com',
        image: 'https://i.imgur.com/b5Hn8nM.jpeg?auto=format&fit=crop&q=80&w=1000',
        color: 'hover:border-purple-500',
        mobilePosition: '40% 20%'
    },
    {
        id: 2,
        title: 'LinkedIn',
        sub: 'Professional',
        url: 'https://www.linkedin.com/in/max-zinko/',
        image: 'https://i.imgur.com/5yGIFeI.png?auto=format&fit=crop&q=80&w=1000',
        color: 'hover:border-blue-500',
        mobilePosition: '20% 40%'
    },
    {
        id: 3,
        title: 'YouTube',
        sub: 'Content Creation',
        url: 'https://www.youtube.com/@izinko',
        image: 'https://i.imgur.com/DuNpPLQ.png?auto=format&fit=crop&q=80&w=1000',
        color: 'hover:border-red-500',
        mobilePosition: '20% 30%'
    },
    {
        id: 4,
        title: 'Behance',
        sub: 'Design Portfolio',
        url: 'https://www.behance.net/izinko',
        image: 'https://i.imgur.com/NXchUNM.jpeg?auto=format&fit=crop&q=80&w=1000',
        color: 'hover:border-blue-400',
        mobilePosition: 'center'
    },
    {
        id: 5,
        title: 'Letterboxd',
        sub: 'Film Reviews',
        url: 'https://www.letterboxd.com/izinko',
        image: 'https://i.imgur.com/q28qs8A.png?auto=format&fit=crop&q=80&w=1000',
        color: 'hover:border-green-500',
        mobilePosition: '50% 60%'
    }
];

const Personal = () => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row gap-4 overflow-y-auto md:overflow-hidden p-1">
            {socialLinks.map((link) => (
                <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                        relative group overflow-hidden cursor-pointer
                        border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900
                        transition-all duration-500 ease-out
                        
                        /* Mobile Sizing: Full width, fixed height */
                        w-full shrink-0 min-h-[200px]
                        
                        /* Desktop Sizing: Equal width, Full height, Expand on hover */
                        md:w-auto md:flex-1 md:h-full md:min-h-0 md:hover:grow-[1.25]
                        
                        ${link.color} hover:border-opacity-100
                    `}
                >
                    <div className="absolute inset-0 bottom-24 overflow-hidden">
                        <div className="w-full h-full relative">
                            <div className="absolute inset-0 bg-white/10 dark:bg-neutral-900/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img
                                src={link.image}
                                alt={link.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                style={{ objectPosition: link.mobilePosition || 'center' }}
                            />
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-300 dark:border-neutral-800 flex flex-col justify-center px-6 z-20 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-900 transition-colors duration-300">
                        <h3 className="text-2xl font-black uppercase text-neutral-700 dark:text-neutral-300 tracking-tighter group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                            {link.title}
                        </h3>
                        <p className="text-xs font-mono text-neutral-600 dark:text-neutral-500 uppercase tracking-widest group-hover:text-neutral-700 dark:group-hover:text-neutral-400">
                            {link.sub}
                        </p>

                        <div className={`absolute bottom-0 left-0 h-[2px] bg-current opacity-0 group-hover:opacity-100 w-full transition-all duration-500 ease-out`} />
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Personal;