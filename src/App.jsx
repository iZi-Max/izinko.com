import React, { useState, useEffect } from 'react';
import { User, Bot, FileText, Linkedin, Mail } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeCard from './components/WelcomeCard';
import ContactCard from './components/ContactCard';
import Skills from './components/Skills';
import Work from './components/Work';
import Personal from './components/Personal';
import Modal from './components/Modal';
import { useStats } from './utils/useStats';

const App = () => {
    const [isWelcomeCardOpen, setIsWelcomeCardOpen] = useState(true);
    const [isWelcomeCardMinimized, setIsWelcomeCardMinimized] = useState(false);

    const [birthDate, setBirthDate] = useState(() => {
        const saved = localStorage.getItem('izi_birthDate');
        return saved ? new Date(saved) : new Date('2000-09-06T00:00:00');
    });
    const [theme, setTheme] = useState(() => localStorage.getItem('izi_theme') || 'dark');
    const [cookieConsent, setCookieConsent] = useState(() => {
        const saved = localStorage.getItem('izi_cookieConsent');
        return saved ? JSON.parse(saved) : null;
    });

    useEffect(() => {
        if (cookieConsent === true) {
            localStorage.setItem('izi_birthDate', birthDate.toISOString());
            localStorage.setItem('izi_theme', theme);
            localStorage.setItem('izi_cookieConsent', 'true');
        } else if (cookieConsent === false) {
            localStorage.removeItem('izi_birthDate');
            localStorage.removeItem('izi_cookieConsent');
        }
        localStorage.setItem('izi_theme', theme);
    }, [birthDate, theme, cookieConsent]);

    const { age, progressPercentage } = useStats(birthDate);
    const [activeTab, setActiveTab] = useState('HUB');
    const [isCvModalOpen, setIsCvModalOpen] = useState(false);
    const [showCvMarker, setShowCvMarker] = useState(true);

    const handleCvDownload = (type) => {
        // Google Drive direct download link
        const humanCvUrl = 'https://drive.google.com/uc?export=download&id=1J3WHRg95ckZmloAWwujEn0OhdzIPgWiA';
        const robotCvUrl = humanCvUrl; // Update with ATS version when available

        const downloadUrl = type === 'human' ? humanCvUrl : robotCvUrl;
        window.open(downloadUrl, '_blank');

        setShowCvMarker(false);
        setTimeout(() => setIsCvModalOpen(false), 500);
    };

    return (
        <div className={`min-h-screen md:h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-sans overflow-y-auto md:overflow-hidden relative flex flex-col select-none ${theme === 'dark' ? 'dark' : ''}`}>
            <img
                src="https://i.imgur.com/aYqVX67.gif"
                alt="Animated Background GIF"
                className="fixed inset-0 w-full h-full object-cover opacity-20 dark:opacity-20 z-[0] pointer-events-none"
            />

            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-200/80 via-neutral-100/90 to-white dark:from-neutral-700/80 dark:via-neutral-900/90 dark:to-black z-0"></div>

            <div className="fixed inset-0 opacity-20 pointer-events-none z-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

            <Header
                age={age}
                progressPercentage={progressPercentage}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                onOpenCvModal={() => setIsCvModalOpen(true)}
                showCvMarker={showCvMarker}
                theme={theme}
            />

            <main className="relative z-10 flex-1 flex flex-col md:flex-row justify-between p-4 md:p-8 overflow-y-auto md:overflow-hidden gap-6 md:gap-0">
                {activeTab === 'SKILLS' ? (
                    <Skills />
                ) : activeTab === 'WORK' ? (
                    <Work />
                ) : activeTab === 'LINKS' ? (
                    <Personal />
                ) : (
                    <>
                        <div className="flex-1 relative flex items-center justify-center group min-h-[200px] md:min-h-0">
                        </div>

                        <div className="w-full md:w-80 shrink-0 flex flex-col justify-end">
                            <ContactCard />
                        </div>
                    </>
                )}
            </main>

            <WelcomeCard
                isOpen={isWelcomeCardOpen}
                onClose={() => setIsWelcomeCardOpen(false)}
                onMinimize={() => setIsWelcomeCardMinimized(true)}
                isMinimized={isWelcomeCardMinimized}
            />

            {isWelcomeCardMinimized && (
                <div
                    onClick={() => setIsWelcomeCardMinimized(false)}
                    className="fixed bottom-20 left-4 w-48 h-10 transition-opacity duration-300 z-50 cursor-pointer"
                >
                </div>
            )}

            <Modal
                isOpen={isCvModalOpen}
                onClose={() => setIsCvModalOpen(false)}
                title="Select CV Format"
            >
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            Choose your preferred format
                        </h3>
                        <p className="text-gray-500 dark:text-neutral-400 leading-relaxed">
                            I've prepared two versions of my resume. One is designed for visual appeal and human readability, while the other is optimized for Applicant Tracking Systems (ATS) and automated parsers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                            onClick={() => handleCvDownload('human')}
                            className="
                    group relative p-6 text-left flex flex-col gap-4 overflow-hidden transition-all duration-300
                    bg-white border border-gray-200 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10
                    dark:bg-neutral-800/50 dark:border-neutral-700 dark:hover:border-cyan-500/50 dark:hover:bg-neutral-800
                    "
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="
                    w-12 h-12 flex items-center justify-center transition-colors
                    bg-gray-50 border border-gray-200 group-hover:border-cyan-500 group-hover:text-cyan-600
                    dark:bg-neutral-900 dark:border-neutral-700 dark:group-hover:border-cyan-500/50 dark:group-hover:text-cyan-400
                    ">
                                <User size={24} />
                            </div>

                            <div>
                                <h4 className="
                        text-lg font-bold mb-1 transition-colors
                        text-gray-900 group-hover:text-cyan-600
                        dark:text-white dark:group-hover:text-cyan-400
                    ">
                                    For Humans
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                    Beautifully illustrated PDF with rich styling and visual hierarchy.
                                </p>
                            </div>

                            <div className="
                    mt-auto pt-4 flex items-center text-xs font-bold tracking-wider uppercase
                    text-gray-400 group-hover:text-cyan-600
                    dark:text-neutral-500 dark:group-hover:text-cyan-400
                    ">
                                <FileText size={14} className="mr-2" />
                                Download PDF
                            </div>
                        </button>

                        <button
                            onClick={() => handleCvDownload('robot')}
                            className="
                    group relative p-6 text-left flex flex-col gap-4 overflow-hidden transition-all duration-300
                    bg-white border border-gray-200 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/10
                    dark:bg-neutral-800/50 dark:border-neutral-700 dark:hover:border-yellow-500/50 dark:hover:bg-neutral-800
                    "
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="
                    w-12 h-12 flex items-center justify-center transition-colors
                    bg-gray-50 border border-gray-200 group-hover:border-yellow-500 group-hover:text-yellow-600
                    dark:bg-neutral-900 dark:border-neutral-700 dark:group-hover:border-yellow-500/50 dark:group-hover:text-yellow-400
                    ">
                                <Bot size={24} />
                            </div>

                            <div>
                                <h4 className="
                        text-lg font-bold mb-1 transition-colors
                        text-gray-900 group-hover:text-yellow-600
                        dark:text-white dark:group-hover:text-yellow-400
                    ">
                                    For Robots
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                    Clean, corporate, and ATS-friendly format optimized for parsing.
                                </p>
                            </div>

                            <div className="
                    mt-auto pt-4 flex items-center text-xs font-bold tracking-wider uppercase
                    text-gray-400 group-hover:text-yellow-600
                    dark:text-neutral-500 dark:group-hover:text-yellow-400
                    ">
                                <FileText size={14} className="mr-2" />
                                Download PDF
                            </div>
                        </button>
                    </div>
                </div>
            </Modal>

            <Footer
                birthDate={birthDate}
                setBirthDate={setBirthDate}
                theme={theme}
                setTheme={setTheme}
                cookieConsent={cookieConsent}
                setCookieConsent={setCookieConsent}
            />
        </div>
    );
};

export default App;