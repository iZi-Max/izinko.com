import React, { useState, useMemo, useEffect } from 'react';
import {
    Code, Layout, Users, GitBranch, Terminal, Cpu, Globe, Database, Layers,
    PenTool, Palette, Figma, MessageCircle, Lightbulb, Compass, Award, Briefcase,
    Smile, Zap, CheckCircle2, Circle, Clock, Flame, Feather, Move, Type,
    UserCheck, Flag, Box, FileCode, Binary, Smartphone, Network, ShieldCheck,
    Mic, HelpingHand, HeartHandshake, BrainCircuit, RefreshCw, X
} from 'lucide-react';

// --- Configuration ---

const CATEGORIES = {
    DESIGN: { id: 'DESIGN', label: 'Design', color: '#22d3ee', text: 'text-cyan-400', border: 'border-cyan-400', bg: 'bg-cyan-400', shadow: 'shadow-cyan-400/50' },
    PROGRAMMING: { id: 'PROGRAMMING', label: 'Tech', color: '#facc15', text: 'text-yellow-400', border: 'border-yellow-400', bg: 'bg-yellow-400', shadow: 'shadow-yellow-400/50' },
    SOFTSKILLS: { id: 'SOFTSKILLS', label: 'Soft Skills', color: '#fb923c', text: 'text-orange-400', border: 'border-orange-400', bg: 'bg-orange-400', shadow: 'shadow-orange-400/50' },
};

const NODES_DATA = [
    // ROOTS
    { id: 'design_root', category: 'DESIGN', icon: PenTool, label: 'Design Core', description: 'Fundamentals of visual communication.', status: 'mastered', parents: [] },
    { id: 'prog_root', category: 'PROGRAMMING', icon: Terminal, label: 'Programming', description: 'Technical implementation and logic.', status: 'mastered', parents: [] },
    { id: 'soft_root', category: 'SOFTSKILLS', icon: Users, label: 'Soft Skills', description: 'Interpersonal and professional abilities.', status: 'mastered', parents: [] },

    // DESIGN BRANCH
    { id: 'd1', category: 'DESIGN', icon: Palette, label: 'Graphic Design', description: 'Composition, balance, and visual hierarchy.', status: 'mastered', parents: ['design_root'] },
    { id: 'd2', category: 'DESIGN', icon: Layout, label: 'Web Design', description: 'Layouts, grids, and responsiveness.', status: 'mastered', parents: ['design_root'] },
    { id: 'd6', category: 'DESIGN', icon: Type, label: 'Typography', description: 'Font pairing, hierarchy, and readability.', status: 'mastered', parents: ['d1'] },
    { id: 'd7', category: 'DESIGN', icon: Palette, label: 'Color Theory', description: 'Psychology of color and contrast accessibility.', status: 'mastered', parents: ['d1'] },
    { id: 'd11', category: 'DESIGN', icon: Box, label: '3D Design', description: 'Spline/Blender for web assets.', status: 'planned', parents: ['d1'] },
    { id: 'd9', category: 'DESIGN', icon: UserCheck, label: 'UX Research', description: 'Competitive analysis and pattern finding.', status: 'mastered', parents: ['d2'] },
    { id: 'd_ui', category: 'DESIGN', icon: Layers, label: 'UI Design', description: 'Interface crafting and visual polish.', status: 'mastered', parents: ['d2'] },
    { id: 'd8', category: 'DESIGN', icon: UserCheck, label: 'Accessibility', description: 'WCAG compliance and inclusive design.', status: 'learning', parents: ['d2'] },
    { id: 'd3', category: 'DESIGN', icon: Figma, label: 'Figma', description: 'Advanced prototyping and auto-layout mastery.', status: 'mastered', parents: ['d_ui'] },
    { id: 'd4', category: 'DESIGN', icon: Layout, label: 'Design Systems', description: 'Scalable component libraries.', status: 'learning', parents: ['d3'] },
    { id: 'd10', category: 'DESIGN', icon: PenTool, label: 'Wireframing', description: 'Low-fidelity structural planning.', status: 'mastered', parents: ['d3'] },
    { id: 'd5', category: 'DESIGN', icon: Zap, label: 'Motion', description: 'Interaction design and micro-animations.', status: 'planned', parents: ['d4', 'd10'] },

    // PROGRAMMING BRANCH
    { id: 'p1', category: 'PROGRAMMING', icon: Globe, label: 'Web Fund.', description: 'HTML5, CSS3, Semantic Web.', status: 'mastered', parents: ['prog_root'] },
    { id: 'p2', category: 'PROGRAMMING', icon: Code, label: 'JavaScript', description: 'ES6+, Async, Closures.', status: 'mastered', parents: ['prog_root'] },
    { id: 'p13', category: 'PROGRAMMING', icon: Binary, label: 'Algorithms', description: 'Data structures and complexity.', status: 'mastered', parents: ['p1'] },
    { id: 'p8', category: 'PROGRAMMING', icon: FileCode, label: 'TypeScript', description: 'Static typing and interfaces.', status: 'mastered', parents: ['p2'] },
    { id: 'p3', category: 'PROGRAMMING', icon: Cpu, label: 'React', description: 'Hooks, Context, Custom Hooks.', status: 'mastered', parents: ['p1', 'p2'] },
    { id: 'p4', category: 'PROGRAMMING', icon: CheckCircle2, label: 'Testing', description: 'Jest, React Testing Library, Cypress.', status: 'mastered', parents: ['p3'] },
    { id: 'p9', category: 'PROGRAMMING', icon: Layers, label: 'Next.js', description: 'SSR, SSG, and App Router.', status: 'learning', parents: ['p3'] },
    { id: 'p10', category: 'PROGRAMMING', icon: Smartphone, label: 'Mobile', description: 'React Native development.', status: 'planned', parents: ['p3'] },
    { id: 'p5', category: 'PROGRAMMING', icon: Database, label: 'Backend', description: 'Node.js, API design, SQL.', status: 'learning', parents: ['p2'] },
    { id: 'p11', category: 'PROGRAMMING', icon: Network, label: 'GraphQL', description: 'Apollo and schema design.', status: 'planned', parents: ['p5'] },
    { id: 'p6', category: 'PROGRAMMING', icon: GitBranch, label: 'DevOps', description: 'CI/CD pipelines, Docker.', status: 'planned', parents: ['p4', 'p5'] },
    { id: 'p12', category: 'PROGRAMMING', icon: ShieldCheck, label: 'Security', description: 'OWASP, Auth0, JWT.', status: 'planned', parents: ['p6'] },
    { id: 'p7', category: 'PROGRAMMING', icon: Zap, label: 'Performance', description: 'Optimization and Web Vitals.', status: 'learning', parents: ['p9'] },

    // SOFT SKILLS BRANCH
    { id: 'ss1', category: 'SOFTSKILLS', icon: MessageCircle, label: 'Communication', description: 'Clear technical writing and speaking.', status: 'mastered', parents: ['soft_root'] },
    { id: 'ss2', category: 'SOFTSKILLS', icon: Clock, label: 'Time Mgmt', description: 'Agile workflows and prioritization.', status: 'mastered', parents: ['soft_root'] },
    { id: 'ss7', category: 'SOFTSKILLS', icon: Mic, label: 'Public Speaking', description: 'Presentations and demos.', status: 'planned', parents: ['ss1'] },
    { id: 'ss8', category: 'SOFTSKILLS', icon: HelpingHand, label: 'Negotiation', description: 'Stakeholder management.', status: 'learning', parents: ['ss2'] },
    { id: 'ss3', category: 'SOFTSKILLS', icon: Smile, label: 'Empathy', description: 'User-centric mindset and team harmony.', status: 'mastered', parents: ['ss1'] },
    { id: 'ss9', category: 'SOFTSKILLS', icon: HeartHandshake, label: 'Conflict Resolution', description: 'Mediating technical disagreements.', status: 'mastered', parents: ['ss3'] },
    { id: 'ss4', category: 'SOFTSKILLS', icon: Lightbulb, label: 'Problem Solving', description: 'Analytical approach to complex issues.', status: 'mastered', parents: ['ss3'] },
    { id: 'ss10', category: 'SOFTSKILLS', icon: Network, label: 'Networking', description: 'Building professional relationships.', status: 'learning', parents: ['ss2'] },
    { id: 'ss5', category: 'SOFTSKILLS', icon: Compass, label: 'Mentorship', description: 'Guiding junior developers.', status: 'learning', parents: ['ss3'] },
    { id: 'ss11', category: 'SOFTSKILLS', icon: BrainCircuit, label: 'Critical Thinking', description: 'Evaluating trade-offs objectively.', status: 'learning', parents: ['ss4'] },
    { id: 'ss6', category: 'SOFTSKILLS', icon: Award, label: 'Leadership', description: 'Leading teams to successful delivery.', status: 'planned', parents: ['ss4', 'ss5'] },
    { id: 'ss12', category: 'SOFTSKILLS', icon: RefreshCw, label: 'Adaptability', description: 'Thriving in changing environments.', status: 'planned', parents: ['ss6'] },
];

const COORDS = {
    // Design
    design_root: { x: 40, y: 90 },
    d1: { x: 35, y: 80 }, d2: { x: 20, y: 75 }, d6: { x: 25, y: 70 }, d7: { x: 35, y: 70 }, d11: { x: 30, y: 65 }, d9: { x: 25, y: 55 }, d_ui: { x: 15, y: 60 }, d8: { x: 10, y: 65 }, d3: { x: 15, y: 50 }, d4: { x: 10, y: 40 }, d10: { x: 20, y: 40 }, d5: { x: 10, y: 25 },
    // Programming
    prog_root: { x: 50, y: 85 },
    p1: { x: 45, y: 70 }, p2: { x: 55, y: 70 }, p13: { x: 40, y: 60 }, p8: { x: 60, y: 60 }, p3: { x: 50, y: 55 }, p4: { x: 50, y: 40 }, p9: { x: 35, y: 35 }, p10: { x: 35, y: 45 }, p5: { x: 60, y: 40 }, p11: { x: 65, y: 30 }, p6: { x: 50, y: 25 }, p12: { x: 60, y: 10 }, p7: { x: 35, y: 20 },
    // Soft Skills
    soft_root: { x: 60, y: 90 },
    ss1: { x: 80, y: 75 }, ss2: { x: 65, y: 80 }, ss7: { x: 90, y: 65 }, ss8: { x: 70, y: 70 }, ss3: { x: 80, y: 65 }, ss9: { x: 70, y: 55 }, ss4: { x: 80, y: 55 }, ss10: { x: 65, y: 65 }, ss5: { x: 90, y: 55 }, ss11: { x: 75, y: 30 }, ss6: { x: 90, y: 35 }, ss12: { x: 90, y: 15 }
};

const Connection = ({ start, end, status, categoryColor }) => {
    if (!start || !end) return null;
    const midY = (start.y + end.y) / 2;
    const path = `M ${start.x} ${start.y} C ${start.x} ${midY}, ${end.x} ${midY}, ${end.x} ${end.y}`;

    let strokeColor = '#374151';
    let opacity = 0.2;
    let strokeDasharray = 'none';

    if (status === 'mastered') {
        strokeColor = categoryColor;
        opacity = 0.8;
    } else if (status === 'learning') {
        strokeColor = categoryColor;
        opacity = 0.4;
    } else {
        strokeColor = '#4b5563';
        opacity = 0.2;
    }

    return (
        <path
            d={path}
            fill="none"
            stroke={strokeColor}
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            opacity={opacity}
            className="transition-all duration-500 ease-in-out"
        />
    );
};

const SkillNode = ({ node, x, y, totalHeight, onClick, onMouseEnter, onMouseLeave }) => {
    const catConfig = CATEGORIES[node.category];
    const Icon = node.icon;
    const status = node.status;

    let baseClasses = "relative w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-10 shadow-lg";
    let iconClasses = "w-5 h-5 md:w-7 md:h-7 transition-colors duration-300";

    if (status === 'mastered') {
        baseClasses += ` border-2 bg-neutral-900 ${catConfig.border} ${catConfig.shadow}`;
        iconClasses += ` ${catConfig.text}`;
    } else if (status === 'learning') {
        baseClasses += ` bg-neutral-900`;
        iconClasses += ` ${catConfig.text} opacity-80`;
    } else {
        baseClasses += ` border-2 bg-neutral-950 border-neutral-800 grayscale opacity-60`;
        iconClasses += " text-neutral-500";
    }

    const style = {
        left: `${x}%`,
        top: `${(y / totalHeight) * 100}%`
    };

    return (
        <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out"
            style={style}
        >
            <div
                className={baseClasses}
                onMouseEnter={() => onMouseEnter(node)}
                onMouseLeave={onMouseLeave}
                onClick={(e) => { e.stopPropagation(); onClick(node); }}
            >
                <Icon className={iconClasses} />
                {status === 'learning' && (
                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="46" fill="none" stroke={CATEGORIES[node.category].color} strokeWidth="2" strokeDasharray="8 6" />
                    </svg>
                )}
            </div>
        </div>
    );
};

export default function Skills() {
    const [hoveredNode, setHoveredNode] = useState(null);
    const [activeTab, setActiveTab] = useState('PROGRAMMING');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { renderedDisplayNodes, renderedLines, viewBox, boxHeight } = useMemo(() => {
        const lines = [];

        const heightMultiplier = isMobile ? 1.5 : 1.0;
        const boxHeight = 100 * heightMultiplier;
        const viewBox = `0 0 100 ${boxHeight}`;

        const rootIdMap = {
            'DESIGN': 'design_root',
            'PROGRAMMING': 'prog_root',
            'SOFTSKILLS': 'soft_root'
        };
        const activeRootId = rootIdMap[activeTab];

        const xShift = isMobile && COORDS[activeRootId] ? (50 - COORDS[activeRootId].x) : 0;

        const processedNodes = new Map(NODES_DATA.map(node => {
            const base = COORDS[node.id];
            if (!base) return [node.id, null];
            return [node.id, {
                ...node,
                x: base.x + xShift,
                y: base.y * heightMultiplier,
            }];
        }).filter(([, node]) => node));

        processedNodes.forEach(child => {
            child.parents.forEach(parentId => {
                const parent = processedNodes.get(parentId);
                if (parent) {
                    lines.push({
                        key: `${parentId}-${child.id}`,
                        start: { x: parent.x, y: parent.y },
                        end: { x: child.x, y: child.y },
                        status: child.status,
                        categoryColor: CATEGORIES[child.category].color,
                        parentCategory: parent.category,
                        childCategory: child.category
                    });
                }
            });
        });

        const renderedDisplayNodes = Array.from(processedNodes.values()).filter(n =>
            !isMobile || n.category === activeTab
        );

        const renderedLines = lines.filter(line => {
            if (!isMobile) return true;
            return line.childCategory === activeTab;
        });

        return { renderedDisplayNodes, renderedLines, viewBox, boxHeight };
    }, [isMobile, activeTab]);

    return (
        <div
            className="relative w-full h-full bg-white/50 dark:bg-black/50 select-none flex flex-col md:block overflow-hidden"
            onClick={() => isMobile && setHoveredNode(null)}
        >

            <div className="md:hidden w-full flex border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md z-30 shrink-0">
                {Object.values(CATEGORIES).map((cat) => (
                    <button
                        key={cat.id}
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab(cat.id);
                            setHoveredNode(null);
                        }}
                        className={`
                            flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-all
                            ${activeTab === cat.id ? `${cat.bg} text-black` : 'text-neutral-500 hover:text-white'}
                        `}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="relative flex-grow w-full flex items-center justify-center md:h-full overflow-hidden">

                <div
                    className="relative w-full transition-all duration-500 md:h-auto md:aspect-square md:max-w-4xl"
                    style={isMobile ? { aspectRatio: `100 / ${boxHeight}` } : {}}
                >
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none z-0"
                        viewBox={viewBox}
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {renderedLines.map(line => (
                            <Connection
                                key={line.key}
                                start={line.start}
                                end={line.end}
                                status={line.status}
                                categoryColor={line.categoryColor}
                            />
                        ))}
                    </svg>

                    <div className="absolute inset-0 w-full h-full z-10">
                        {renderedDisplayNodes.map(node => (
                            <SkillNode
                                key={node.id}
                                node={node}
                                x={node.x}
                                y={node.y}
                                totalHeight={boxHeight}
                                onClick={(n) => setHoveredNode(n)}
                                onMouseEnter={(n) => !isMobile && setHoveredNode(n)}
                                onMouseLeave={() => !isMobile && setHoveredNode(null)}
                            />
                        ))}
                    </div>
                </div>

            </div>

            <div className={`
                fixed bottom-24 left-0 w-full px-4 z-40 pointer-events-none flex justify-center
                md:absolute md:bottom-0 md:p-6
                transition-all duration-300 ease-out transform
                ${hoveredNode ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}
            `}>
                <div className="bg-neutral-900/95 backdrop-blur-xl border border-neutral-800 p-6 rounded-2xl shadow-2xl w-full max-w-xl pointer-events-auto relative border-l-4 border-l-neutral-600">

                    <button
                        onClick={(e) => { e.stopPropagation(); setHoveredNode(null); }}
                        className="absolute top-3 right-3 p-2 text-neutral-500 hover:text-white md:hidden"
                    >
                        <X size={20} />
                    </button>

                    {hoveredNode && (
                        <div className="flex gap-6 items-center">
                            <div className={`
                                w-14 h-14 shrink-0 rounded-xl flex items-center justify-center border shadow-lg transform rotate-3
                                bg-neutral-800 border-neutral-700
                                ${CATEGORIES[hoveredNode.category].text}
                            `}>
                                <hoveredNode.icon size={28} />
                            </div>

                            <div className="flex-grow">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className={`text-xl font-bold ${CATEGORIES[hoveredNode.category].text}`}>
                                        {hoveredNode.label}
                                    </h3>
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-neutral-800 border border-neutral-700 text-neutral-400">
                                        {hoveredNode.status}
                                    </span>
                                </div>
                                <p className="text-neutral-300 text-xs leading-relaxed">
                                    {hoveredNode.description}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}