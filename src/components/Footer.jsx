import React, { useState, useEffect, useRef } from 'react';
import { Users, Settings, Bell, Plus, MessageSquare, Linkedin, Mail, ExternalLink, Check, Calendar, Moon, Sun, Cookie, Save } from 'lucide-react';
import Modal from './Modal';

const Footer = ({ birthDate, setBirthDate, theme, setTheme, cookieConsent, setCookieConsent }) => {
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [isReferenceModalOpen, setIsReferenceModalOpen] = useState(false);
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
    const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false);
    const dateInputRef = useRef(null);

    const formatDisplayDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const parseDisplayDate = (dateStr) => {
        if (!dateStr) return null;
        const [day, month, year] = dateStr.split('/');
        const date = new Date(`${year}-${month}-${day}T00:00:00`);
        return isNaN(date.getTime()) ? null : date;
    };

    const [tempBirthDate, setTempBirthDate] = useState(formatDisplayDate(birthDate));
    const [tempTheme, setTempTheme] = useState(theme);
    const [tempCookieConsent, setTempCookieConsent] = useState(cookieConsent);

    useEffect(() => {
        if (isOptionsModalOpen) {
            setTempBirthDate(formatDisplayDate(birthDate));
            setTempTheme(theme);
            setTempCookieConsent(cookieConsent);
        }
    }, [isOptionsModalOpen, birthDate, theme, cookieConsent]);

    const handleSaveOptions = () => {
        const newDate = parseDisplayDate(tempBirthDate);
        if (newDate) {
            setBirthDate(newDate);
        }

        setTheme(tempTheme);
        setCookieConsent(tempCookieConsent);
        setIsOptionsModalOpen(false);
    };

    const handlePickerChange = (e) => {
        const dateVal = e.target.value;
        if (dateVal) {
            const [year, month, day] = dateVal.split('-');
            setTempBirthDate(`${day}/${month}/${year}`);
        }
    };

    const [email, setEmail] = useState('');
    const [notifications, setNotifications] = useState({
        live: true,
        skins: false,
        portfolio: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const subscriptionData = {
            email,
            preferences: notifications,
            timestamp: new Date().toISOString(),
            source: 'footer_modal'
        };

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            setTimeout(() => {
                setIsSuccess(false);
                setIsNotificationModalOpen(false);
                setEmail('');
                setNotifications({ live: true, skins: false, portfolio: false });
            }, 2000);
        }, 1000);
    };

    const toggleNotification = (key) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const references = [
        {
            name: "Eduard Sobotnyk",
            role: "Full Stack Software Engineer",
            text: "The attitude towards the position and responsibility at work are exceptional. He has shown precise attentiveness to the business requirements and the smallest details in UI/UX. His work for sure increased the stability and efficiency from a user perspective.",
            linkedin: "https://www.linkedin.com/in/eduard-sobotnyk-917459158"
        },
        {
            name: "Andrii Yarosh",
            role: "Software Engineer | PHP | Laravel | SQL",
            text: "I highly recommend Maksym for any project. Their creativity, attention to detail, and collaborative spirit made our project successful. I can attest to their professionalism and dedication to delivering top-notch results.",
            linkedin: "https://www.linkedin.com/in/andrii-yarosh"
        },
        {
            name: "Viktor Hryniuk",
            role: "Software Engineer",
            text: "Maksym has been an exceptional member of our team, consistently demonstrating outstanding dedication and skill. He possesses a sharp eye for detail, which has been pivotal in identifying and resolving potential issues. Moreover, Maksym excels in communication and collaboration, bringing a positive atmosphere to the team.",
            linkedin: "https://www.linkedin.com/in/vhryniuk"
        }
    ];

    return (
        <>
            <footer className="relative z-20 px-4 md:px-8 py-4 flex flex-row items-center justify-between bg-gradient-to-t from-white via-white/80 dark:from-black dark:via-black/80 to-transparent gap-2">
                <div className="flex items-center divide-x divide-neutral-400 dark:divide-neutral-700 border border-neutral-400 dark:border-neutral-700">
                    <button
                        onClick={() => setIsInfoModalOpen(true)}
                        className="flex items-center gap-2 text-sm font-bold tracking-wide text-neutral-600 dark:text-neutral-300 bg-transparent hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 px-4 py-2.5 transition-colors"
                    >
                        <span className="text-neutral-900 dark:text-white">TAB</span> INFO
                    </button>
                </div>

                <div className="flex items-center gap-0.5">

                    <button
                        onClick={() => setIsReferenceModalOpen(true)}
                        className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 font-bold text-sm tracking-wide bg-transparent border border-neutral-400 dark:border-neutral-700 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 px-4 py-2.5 transition-colors"
                    >
                        <Users size={18} />
                        <span className="text-sm font-bold">3</span>
                    </button>

                    <button
                        onClick={() => setIsNotificationModalOpen(true)}
                        className="text-yellow-400 relative cursor-pointer hover:text-yellow-300 bg-transparent border border-neutral-400 dark:border-neutral-700 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 p-2.5 transition-colors"
                    >
                        <Bell size={20} className="text-neutral-600 dark:text-neutral-300 group-hover:text-yellow-400" />
                        <div className="absolute top-0.5 right-0.5 w-2 h-2 bg-yellow-500 rounded-full border border-white dark:border-black"></div>
                    </button>

                    <button
                        onClick={() => setIsOptionsModalOpen(true)}
                        className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 font-bold text-sm tracking-wide bg-transparent border border-neutral-400 dark:border-neutral-700 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 px-4 py-2.5 transition-colors"
                    >
                        <Settings size={18} />
                        OPTIONS
                    </button>
                </div>
            </footer>

            <Modal
                isOpen={isInfoModalOpen}
                onClose={() => setIsInfoModalOpen(false)}
                title="ABOUT PROJECT"
                accentColor="cyan"
                modalId="INFO-001"
            >
                <div className="space-y-6">
                    <div className="bg-neutral-100/40 dark:bg-black/40 border border-neutral-300 dark:border-neutral-800 p-4 clip-corners-sm">
                        <h3 className="text-xs font-black text-neutral-900 dark:text-white mb-3 tracking-widest uppercase text-yellow-500">Project Overview</h3>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            I have built this personal website to showcase my skills and to finally use the domain that I bought a long time ago :D
                        </p>
                    </div>

                    <div className="bg-neutral-100/40 dark:bg-black/40 border border-neutral-300 dark:border-neutral-800 p-4 clip-corners-sm">
                        <h3 className="text-xs font-black text-neutral-900 dark:text-white mb-3 tracking-widest uppercase text-yellow-500">Inspiration</h3>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            My passion for UI/Front-End development is deeply rooted in my love for video games. The immersive interfaces, the attention to detail, and the way a good UI can enhance the user experience have always been a huge inspiration to me. This project is a tribute to that aesthetic—blending functional design with a game-like feel.
                        </p>
                    </div>

                    <div className="bg-neutral-100/40 dark:bg-black/40 border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 p-3 flex justify-between items-center text-xs font-mono uppercase tracking-wider clip-corners-sm">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-neutral-500 dark:text-neutral-600">Version</span>
                            <span className="text-neutral-700 dark:text-neutral-300">v1.0.0</span>
                        </div>
                        <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-800"></div>
                        <div className="flex flex-col text-right">
                            <span className="text-[10px] text-neutral-500 dark:text-neutral-600">Tech Stack</span>
                            <span className="text-yellow-500">React & Tailwind</span>
                        </div>
                    </div>
                </div>

                <style>{`
                    .clip-corners-sm {
                        clip-path: polygon(
                            4px 0, 100% 0, 
                            100% calc(100% - 4px), calc(100% - 4px) 100%, 
                            0 100%, 0 4px
                        );
                    }
                `}</style>
            </Modal>

            <Modal
                isOpen={isReferenceModalOpen}
                onClose={() => setIsReferenceModalOpen(false)}
                title="REFERENCES"
                accentColor="yellow"
                modalId="REF-002"
            >
                <div className="space-y-4">
                    <p className="text-[10px] text-neutral-500 mb-4 uppercase tracking-widest font-mono">
                        Professional Recommendations
                    </p>

                    <div className="grid gap-4">
                        {references.map((ref, index) => (
                            <div key={index} className="bg-neutral-100/40 dark:bg-black/40 border border-neutral-300 dark:border-neutral-800 p-4 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors clip-corners-sm">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="text-neutral-900 dark:text-white font-black text-sm uppercase tracking-tight">{ref.name}</h4>
                                        <span className="text-[10px] text-yellow-500 font-mono tracking-widest uppercase">{ref.role}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href={ref.linkedin}
                                            className="w-7 h-7 flex items-center justify-center text-neutral-500 hover:text-blue-400 transition-colors bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-blue-400"
                                        >
                                            <Linkedin size={12} />
                                        </a>
                                    </div>
                                </div>
                                <div className="h-px w-full bg-neutral-300 dark:bg-neutral-800 my-3"></div>
                                <p className="text-xs text-neutral-600 dark:text-neutral-400 italic leading-relaxed">
                                    "{ref.text}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
                    .clip-corners-sm {
                        clip-path: polygon(
                            4px 0, 100% 0, 
                            100% calc(100% - 4px), calc(100% - 4px) 100%, 
                            0 100%, 0 4px
                        );
                    }
                `}</style>
            </Modal>

            <Modal
                isOpen={isNotificationModalOpen}
                onClose={() => setIsNotificationModalOpen(false)}
                title="NOTIFICATIONS"
                accentColor="yellow"
                modalId="NOTIFY-003"
            >
                <div className="space-y-6">
                    <div className="bg-neutral-100/40 dark:bg-black/40 border border-neutral-300 dark:border-neutral-800 p-4 clip-corners-sm">
                        <h3 className="text-xs font-black text-neutral-900 dark:text-white mb-2 tracking-widest uppercase text-yellow-500">Stay Updated</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Subscribe to receive updates about my projects. No spam, just the important stuff.
                        </p>
                    </div>

                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
                            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/50">
                                <Check size={32} className="text-green-400" />
                            </div>
                            <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Subscribed!</h4>
                            <p className="text-neutral-600 dark:text-neutral-400">You've been added to the list.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubscribe} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="enter@your.email"
                                    className="w-full bg-neutral-100 dark:bg-black/50 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors placeholder:text-neutral-500 dark:placeholder:text-neutral-600 font-mono text-sm"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Interests</label>

                                <div
                                    onClick={() => toggleNotification('live')}
                                    className={`flex items-center gap-3 p-3 border cursor-pointer transition-all duration-200 ${notifications.live ? 'bg-yellow-950/20 border-yellow-500/50' : 'bg-neutral-100/20 dark:bg-black/20 border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700'}`}
                                >
                                    <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${notifications.live ? 'bg-yellow-500 border-yellow-500' : 'border-neutral-400 dark:border-neutral-600'}`}>
                                        {notifications.live && <Check size={14} className="text-black" />}
                                    </div>
                                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-400">Notify when izi.cc goes live</span>
                                </div>

                                <div
                                    onClick={() => toggleNotification('skins')}
                                    className={`flex items-center gap-3 p-3 border cursor-pointer transition-all duration-200 ${notifications.skins ? 'bg-yellow-950/20 border-yellow-500/50' : 'bg-neutral-100/20 dark:bg-black/20 border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700'}`}
                                >
                                    <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${notifications.skins ? 'bg-yellow-500 border-yellow-500' : 'border-neutral-400 dark:border-neutral-600'}`}>
                                        {notifications.skins && <Check size={14} className="text-black" />}
                                    </div>
                                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-400">Notify when skins trading platform goes live</span>
                                </div>

                                <div
                                    onClick={() => toggleNotification('portfolio')}
                                    className={`flex items-center gap-3 p-3 border cursor-pointer transition-all duration-200 ${notifications.portfolio ? 'bg-yellow-950/20 border-yellow-500/50' : 'bg-neutral-100/20 dark:bg-black/20 border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700'}`}
                                >
                                    <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${notifications.portfolio ? 'bg-yellow-500 border-yellow-500' : 'border-neutral-400 dark:border-neutral-600'}`}>
                                        {notifications.portfolio && <Check size={14} className="text-black" />}
                                    </div>
                                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-400">Notify on portfolio updates</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 uppercase tracking-widest transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Processing...' : 'Confirm Subscription'}
                            </button>
                        </form>
                    )}
                </div>
            </Modal>

            <Modal
                isOpen={isOptionsModalOpen}
                onClose={() => setIsOptionsModalOpen(false)}
                title="SYSTEM SETTINGS"
                accentColor="cyan"
                modalId="OPT-004"
            >
                <div className="space-y-8">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-bold uppercase tracking-wider text-sm">
                            <Calendar size={16} className="text-cyan-400" />
                            <h3>User Configuration</h3>
                        </div>
                        <div className="bg-neutral-100/40 dark:bg-black/40 border border-neutral-300 dark:border-neutral-800 p-4 clip-corners-sm">
                            <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Date of Birth</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={tempBirthDate}
                                    onChange={(e) => setTempBirthDate(e.target.value)}
                                    placeholder="DD/MM/YYYY"
                                    maxLength={10}
                                    className="w-full bg-neutral-100 dark:bg-black/50 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white pl-4 pr-10 py-3 focus:outline-none focus:border-cyan-500 transition-colors font-mono text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => dateInputRef.current?.showPicker()}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-cyan-400 transition-colors"
                                >
                                    <Calendar size={18} />
                                </button>
                                <input
                                    ref={dateInputRef}
                                    type="date"
                                    onChange={handlePickerChange}
                                    className="absolute inset-0 opacity-0 pointer-events-none"
                                    tabIndex={-1}
                                />
                            </div>
                            <p className="mt-2 text-[10px] text-neutral-500">
                                Format: DD/MM/YYYY. Used to calculate your Level (Age).
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-bold uppercase tracking-wider text-sm">
                            {tempTheme === 'dark' ? <Moon size={16} className="text-cyan-400" /> : <Sun size={16} className="text-cyan-400" />}
                            <h3>Interface Theme</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => setTempTheme('dark')}
                                className={`p-4 border flex flex-col items-center gap-2 transition-all ${tempTheme === 'dark' ? 'bg-cyan-950/20 border-cyan-500/50 text-cyan-400' : 'bg-neutral-100/40 dark:bg-black/40 border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-500 hover:border-neutral-400 dark:hover:border-neutral-700'}`}
                            >
                                <Moon size={24} />
                                <span className="text-xs font-bold uppercase tracking-wider">Dark Mode</span>
                            </button>
                            <button
                                onClick={() => setTempTheme('light')}
                                className={`p-4 border flex flex-col items-center gap-2 transition-all ${tempTheme === 'light' ? 'bg-cyan-950/20 border-cyan-500/50 text-cyan-400' : 'bg-neutral-100/40 dark:bg-black/40 border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-500 hover:border-neutral-400 dark:hover:border-neutral-700'}`}
                            >
                                <Sun size={24} />
                                <span className="text-xs font-bold uppercase tracking-wider">Light Mode</span>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-bold uppercase tracking-wider text-sm">
                            <Cookie size={16} className="text-cyan-400" />
                            <h3>Data Persistence</h3>
                        </div>
                        <div className="bg-neutral-100/40 dark:bg-black/40 border border-neutral-300 dark:border-neutral-800 p-4 clip-corners-sm space-y-4">
                            <p className="text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed">
                                We use local storage to save your preferences (Birthday, Theme). No data is shared with third parties.
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => setTempCookieConsent(true)}
                                    className={`flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider border transition-all ${tempCookieConsent === true ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-neutral-100/50 dark:bg-black/50 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-500'}`}
                                >
                                    Sure, save my data
                                </button>
                                <button
                                    onClick={() => setTempCookieConsent(false)}
                                    className={`flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider border transition-all ${tempCookieConsent === false ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-neutral-100/50 dark:bg-black/50 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-500'}`}
                                >
                                    Do not use cookies
                                </button>
                            </div>
                            {tempCookieConsent === false && (
                                <p className="text-[10px] text-red-400 italic">
                                    * Your settings will be lost when you refresh the page.
                                </p>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={handleSaveOptions}
                        className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                    >
                        <Save size={18} />
                        Save Changes
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default Footer;
