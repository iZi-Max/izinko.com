import React, { useState } from 'react';
import { Check, Lock, Code, Terminal, Cpu, Database, Layout, Box, Star, Shield, Trophy, Palette, Film, CheckCircle } from 'lucide-react';

const Work = () => {
    const projects = [
        {
            id: 1,
            title: "Prompt Marketplace",
            image: "https://i.imgur.com/qbPJhyV.png",
            description: "Laprompt.com – A dual-sided marketplace connecting AI talent with prompt buyers. Features robust user authentication and secure payment processing.",
            gradient: "from-neutral-800 to-neutral-900",
            accent: "border-purple-400",
            status: "DONE",
            complexity: "HIGH",
            tech: "Next.js / TypeScript",
            type: "dev",
            milestones: [
                { icon: Cpu, label: "System Architecture", sub: "Figma Wireframing", completed: true },
                { icon: Database, label: "Design System", sub: "Tailwind Implementation", completed: true },
                { icon: Layout, label: "Frontend Logic", sub: "Component Library", completed: true }
            ]
        },
        {
            id: 2,
            title: "Asset Trading Protocol",
            image: "https://i.imgur.com/VjveHlx.png",
            description: "Easy Skins – A high-frequency trading platform for CS2 virtual assets. Built for speed with real-time inventory synchronization and secure liquidity.",
            gradient: "from-neutral-800 to-neutral-900",
            accent: "border-teal-400",
            status: "PLANNED",
            complexity: "EXTREME",
            tech: "Next.js / REST API",
            type: "dev",
            milestones: [
                { icon: Layout, label: "Visual Interface", sub: "Gaming Aesthetic", completed: false },
                { icon: Shield, label: "Secure Gateway", sub: "Payment Integration", completed: false },
                { icon: Database, label: "Live Inventory", sub: "WebSocket Sync", completed: false }
            ]
        },
        {
            id: 3,
            title: "Subscription Analytics",
            image: "https://i.imgur.com/qEeMgwA.png",
            description: "A financial intelligence tool for tracking recurring digital expenses. Provides spending visualization and automated renewal forecasting.",
            gradient: "from-neutral-900 to-neutral-950",
            accent: "border-cyan-400",
            status: "DONE",
            complexity: "MED",
            tech: "React / MongoDB",
            type: "dev",
            milestones: [
                { icon: Database, label: "Data Pipeline", sub: "Spending Analytics", completed: true },
                { icon: Layout, label: "Dashboard UI", sub: "Visual Tracking", completed: true },
                { icon: Star, label: "Alert System", sub: "Renewal Notifications", completed: true }
            ]
        },
        {
            id: 4,
            title: "Link Infrastructure",
            image: "https://i.imgur.com/m2lEO1m.png",
            description: "izi.cc – High-performance URL shortener with deep UTM analytics. Architecture is being refactored for API-first external business integration.",
            gradient: "from-neutral-900 to-neutral-950",
            accent: "border-yellow-400",
            status: "IN-PROGRESS",
            complexity: "MED",
            tech: "Node.js / Redis",
            type: "dev",
            milestones: [
                { icon: Terminal, label: "Core Engine", sub: "Redirect Service", completed: true },
                { icon: Layout, label: "UI Overhaul", sub: "V2 Design System", completed: false },
                { icon: Box, label: "Public API", sub: "B2B Integration", completed: false }
            ]
        },
        {
            id: 5,
            title: "AI Adversarial Testing",
            description: "Quality assurance for GrandslamAI. Executed black-box testing strategies to identify security vulnerabilities and logic flaws in image generation models.",
            gradient: "from-neutral-900 to-neutral-950",
            accent: "border-emerald-400",
            status: "IN-PROGRESS",
            complexity: "HIGH",
            tech: "Manual / Automation",
            type: "dev",
            milestones: [
                { icon: Shield, label: "Security Audit", sub: "Vulnerability Scans", completed: true },
                { icon: CheckCircle, label: "Scenario Testing", sub: "Black Box Methods", completed: true },
                { icon: Layout, label: "UX Fidelity", sub: "Bug Elimination", completed: true }
            ]
        },
        {
            id: 6,
            title: "SaaS Loan Portal",
            image: "https://i.imgur.com/vJBA6SD.png",
            description: "Comprehensive QA for a white-label home loan platform. Validated end-to-end data flows and custom branding modules for enterprise clients.",
            gradient: "from-neutral-900 to-neutral-950",
            accent: "border-orange-400",
            status: "DONE",
            complexity: "HIGH",
            tech: "Selenium / API",
            type: "dev",
            milestones: [
                { icon: CheckCircle, label: "E2E Validation", sub: "Critical User Flows", completed: true },
                { icon: Shield, label: "Integration", sub: "SaaS Features", completed: true },
                { icon: Database, label: "Data Integrity", sub: "Loan Processing", completed: true }
            ]
        },
        {
            id: 7,
            title: "FinTech Mobile Security",
            image: "https://play-lh.googleusercontent.com/KQFjO7GlKcmiKSeyP1ziai0Z-iL-EBF94QRSWLEtgFeJMoBHhdqmJ1Y6bC-HfgdcfxY=w2560-h1440-rw",
            description: "Android ecosystem assurance. Developed automation scripts using Appium to secure sensitive financial data and ensure stability across device fragments.",
            gradient: "from-neutral-900 to-neutral-950",
            accent: "border-blue-400",
            status: "DONE",
            complexity: "HIGH",
            tech: "Android / Appium",
            type: "dev",
            milestones: [
                { icon: CheckCircle, label: "Platform Tests", sub: "Android Ecology", completed: true },
                { icon: Shield, label: "Security Audit", sub: "Financial Data", completed: true },
                { icon: Layout, label: "Auto-Scripts", sub: "UI Automation", completed: true }
            ]
        },
        {
            id: 8,
            title: "Microservices Architecture QA",
            description: "Lead QA for a distributed microservices environment. Orchestrated data export validation and API stability for high-volume business data extraction.",
            gradient: "from-neutral-900 to-neutral-950",
            accent: "border-purple-400",
            status: "DONE",
            complexity: "EXTREME",
            tech: "Go / K8s / API",
            type: "dev",
            milestones: [
                { icon: Box, label: "Service Mesh", sub: "Microservices QA", completed: true },
                { icon: Database, label: "Data Pipelines", sub: "Export Logic", completed: true },
                { icon: Trophy, label: "Leadership", sub: "QA Strategy Lead", completed: true }
            ]
        },
        {
            id: 9,
            title: "Brand Identity System",
            description: "Visual design architect for Ukrainian Leadership Academy. Created cohesive event campaigns, partnership assets, and internal team graphics.",
            gradient: "from-neutral-900 to-neutral-950",
            accent: "border-pink-400",
            status: "DONE",
            complexity: "MED",
            tech: "Figma / Illustrator",
            type: "design",
            milestones: [
                { icon: Palette, label: "Campaign Visuals", sub: "Event Posters", completed: true },
                { icon: Star, label: "Partnerships", sub: "Brand Collateral", completed: true },
                { icon: Layout, label: "Internal UI", sub: "Team Assets", completed: true }
            ]
        },
        {
            id: 10,
            title: "Content Ecosystem",
            description: "End-to-end YouTube channel management. Handled content ideation, scriptwriting, video editing (Premiere Pro), and community growth strategy.",
            gradient: "from-neutral-900 to-neutral-950",
            accent: "border-red-400",
            status: "DONE",
            complexity: "MED",
            tech: "Premiere / Photoshop",
            type: "design",
            milestones: [
                { icon: Film, label: "Production", sub: "Edit & Motion", completed: true },
                { icon: Terminal, label: "Narrative", sub: "Script & Concept", completed: true },
                { icon: Star, label: "Growth", sub: "Community Ops", completed: true }
            ]
        },
        {
            id: 11,
            title: "Personal Portfolio",
            description: "izinko.com – A Lo-Fi Sci-Fi interactive experience. Custom 3D modeling, retro-futuristic UI components, and a unique digital identity.",
            gradient: "from-neutral-900 to-neutral-950",
            accent: "border-indigo-400",
            status: "IN-PROGRESS",
            complexity: "HIGH",
            tech: "Next.js / 3D",
            type: "dev",
            milestones: [
                { icon: Layout, label: "Aesthetic", sub: "Lo-Fi Sci-Fi UI", completed: true },
                { icon: Box, label: "3D Assets", sub: "Model Integration", completed: false },
                { icon: Cpu, label: "Optimization", sub: "Performance", completed: false }
            ]
        }
    ];

    return (
        <div className="w-full h-full bg-white/40 dark:bg-black/40 text-neutral-900 dark:text-neutral-200 font-sans selection:bg-yellow-500/30 p-4 md:p-8 overflow-y-auto overflow-x-hidden rounded-lg border border-neutral-300 dark:border-neutral-800 shadow-2xl backdrop-blur-sm">

            <div className="max-w-7xl mx-auto mb-8">
                <div className="flex items-center gap-4 mb-2">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black tracking-widest text-gray-900 dark:text-white uppercase">
                            Senior Developer
                        </h1>
                        <p className="text-yellow-600/90 dark:text-yellow-500/80 font-mono text-sm tracking-wider uppercase">
                            React • TypeScript • Node.js • Design
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
                {projects.map((project) => (
                    <div key={project.id} className="group relative bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 clip-corners-card transition-transform hover:-translate-y-1 duration-300 flex flex-col h-full hover:border-neutral-400 dark:hover:border-neutral-700 hover:shadow-xl">

                        <div className="h-40 w-full relative overflow-hidden shrink-0 border-b border-neutral-800 bg-neutral-900">

                            {project.image ? (
                                <>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-neutral-900/30 group-hover:bg-neutral-900/0 transition-colors duration-500"></div>
                                </>
                            ) : (
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}></div>
                            )}

                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay pointer-events-none"></div>

                            <div className="absolute top-4 left-4 z-10">
                                <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md shadow-lg">
                                    {project.type === 'design' ? (
                                        <Palette className="text-white/90" size={14} />
                                    ) : (
                                        <Code className="text-white/90" size={14} />
                                    )}
                                </div>
                            </div>

                            <div className={`
                                absolute bottom-0 right-0 z-10 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider border-t border-l backdrop-blur-md
                                ${project.status === 'DONE' ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/30' :
                                    project.status === 'IN-PROGRESS' ? 'bg-yellow-950/80 text-yellow-400 border-yellow-500/30' :
                                        'bg-neutral-900/80 text-neutral-400 border-neutral-700'}
                                clip-top-left
                            `}>
                                {project.status}
                            </div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col">
                            <h3 className="text-xl font-black uppercase tracking-tight mb-2 text-neutral-900 dark:text-white leading-none group-hover:text-yellow-500 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 font-medium">
                                {project.description}
                            </p>

                            <div className="bg-neutral-100/40 dark:bg-black/40 border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 p-2 mb-6 flex justify-between items-center text-xs font-mono uppercase tracking-wider clip-corners-sm mt-auto">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-neutral-600">Complexity</span>
                                    <span className="text-neutral-700 dark:text-neutral-300">{project.complexity}</span>
                                </div>
                                <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-800"></div>
                                <div className="flex flex-col text-right">
                                    <span className="text-[10px] text-neutral-600">Tech Stack</span>
                                    <span className="text-yellow-500">{project.tech}</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {project.milestones.map((milestone, idx) => (
                                    <div key={idx} className="flex items-center gap-3 group/item">
                                        <div className={`
                      w-8 h-8 flex items-center justify-center rounded-sm border
                      ${milestone.completed
                                                ? 'border-yellow-900/50 bg-yellow-950/20 text-yellow-500'
                                                : 'border-neutral-800 text-neutral-600 bg-transparent'}
                    `}>
                                            {milestone.completed ? <Check size={16} strokeWidth={4} /> : <milestone.icon size={16} />}
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1">
                                            <div className={`text-xs font-black uppercase ${milestone.completed ? 'text-neutral-700 dark:text-neutral-300' : 'text-neutral-500 dark:text-neutral-600'}`}>
                                                {milestone.label}
                                            </div>
                                            <div className="text-[10px] font-mono uppercase text-neutral-600 tracking-wide">
                                                {milestone.sub}
                                            </div>
                                        </div>

                                        <div className={`text-xs font-bold ${milestone.completed ? 'text-emerald-500' : 'text-neutral-700'}`}>
                                            {milestone.completed ? "COMPLETED" : "PENDING"}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-800 border-t border-neutral-300 dark:border-neutral-700 flex justify-between items-center px-2">
                            <span className="text-[8px] font-mono text-neutral-600">PROJ-ID: 00{project.id}</span>
                            <div className="flex gap-1">
                                <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
                                <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                ))}
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

export default Work;
