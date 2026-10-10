import React, { useState } from 'react';
import {
  Cloud,
  Mail,
  Terminal,
  Monitor,
  Database,
  Server,
  ShieldCheck,
  Network,
  Activity,
  CheckCircle2,
  Lock,
  Cpu
} from 'lucide-react';

interface TechNode {
  id: string;
  label: string;
  subtext: string;
  icon: React.ReactNode;
  x: number; // percentage in SVG viewBox 0..100
  y: number; // percentage in SVG viewBox 0..100
  status: 'active' | 'syncing' | 'protected';
  color: string;
}

export const ServerNetworkAnimation: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [activeHoverNode, setActiveHoverNode] = useState<string | null>(null);

  // Floating nodes configuration around the central server rack
  const nodes: TechNode[] = [
    {
      id: 'cloud',
      label: 'Cloud Server',
      subtext: 'Auto-Scaling Compute',
      icon: <Cloud className="w-5 h-5 text-brand-blue" />,
      x: 18,
      y: 20,
      status: 'active',
      color: '#1769E0',
    },
    {
      id: 'email',
      label: 'Email Business',
      subtext: 'DKIM/SPF Secure Mail',
      icon: <Mail className="w-5 h-5 text-brand-cyan" />,
      x: 82,
      y: 22,
      status: 'active',
      color: '#00B8D9',
    },
    {
      id: 'linux',
      label: 'Linux Cloud',
      subtext: 'High Performance Kernel',
      icon: <Terminal className="w-5 h-5 text-emerald-500" />,
      x: 14,
      y: 56,
      status: 'active',
      color: '#10B981',
    },
    {
      id: 'windows',
      label: 'Windows Cloud',
      subtext: 'RDP / MS Ecosystem',
      icon: <Monitor className="w-5 h-5 text-sky-500" />,
      x: 86,
      y: 58,
      status: 'active',
      color: '#0284C7',
    },
    {
      id: 'storage',
      label: 'Data Storage',
      subtext: 'NVMe Redundant Storage',
      icon: <Database className="w-5 h-5 text-amber-500" />,
      x: 28,
      y: 84,
      status: 'syncing',
      color: '#F59E0B',
    },
    {
      id: 'security',
      label: 'Security & DDoS',
      subtext: 'Real-time Firewall',
      icon: <ShieldCheck className="w-5 h-5 text-indigo-500" />,
      x: 72,
      y: 84,
      status: 'protected',
      color: '#6366F1',
    },
  ];

  // Central Server Rack Node coordinates
  const centerX = 50;
  const centerY = 48;

  return (
    <div className={`relative w-full rounded-2xl bg-gradient-to-b from-navy-deep via-navy to-navy-slate p-4 sm:p-6 md:p-8 shadow-2xl border border-slate-700/50 overflow-hidden ${compact ? 'max-w-md mx-auto' : ''}`}>
      
      {/* Background Decorative Grid & Watermark Mesh */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#00B8D9_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* Subtle Glow Spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-1/4 right-10 w-40 h-40 bg-brand-cyan/20 rounded-full blur-2xl pointer-events-none" />

      {/* SVG Network Connections Layer */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient-line-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1769E0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00B8D9" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connection Lines from central rack to nodes */}
          {nodes.map((node) => {
            const isHovered = activeHoverNode === node.id;
            return (
              <g key={`connection-${node.id}`}>
                {/* Static Base Line */}
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={node.x}
                  y2={node.y}
                  stroke={isHovered ? node.color : '#1E3A5F'}
                  strokeWidth={isHovered ? '1.5' : '1'}
                  strokeDasharray="2,2"
                  className="transition-all duration-300"
                />

                {/* Animated Data Packets along path */}
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={node.x}
                  y2={node.y}
                  stroke="url(#gradient-line-1)"
                  strokeWidth={isHovered ? '2' : '1.2'}
                  strokeDasharray="3,12"
                  strokeDashoffset="0"
                  filter={isHovered ? 'url(#glow-cyan)' : undefined}
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="30"
                    to="0"
                    dur={isHovered ? '1.5s' : '3s'}
                    repeatCount="indefinite"
                  />
                </line>

                {/* Pulse Dot Moving on Connection Line */}
                <circle r={isHovered ? '1.8' : '1.2'} fill={isHovered ? node.color : '#00B8D9'}>
                  <animateMotion
                    path={`M ${centerX},${centerY} L ${node.x},${node.y}`}
                    dur={`${2.5 + (node.x % 3)}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {/* Inter-node Ring Mesh Connections */}
          <path
            d={`M 18,20 L 82,22 L 86,58 L 72,84 L 28,84 L 14,56 Z`}
            fill="none"
            stroke="#1769E0"
            strokeWidth="0.5"
            strokeDasharray="1,4"
            opacity="0.3"
          />
        </svg>

        {/* Center: Server Rack Component */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
          onMouseEnter={() => setActiveHoverNode('center-rack')}
          onMouseLeave={() => setActiveHoverNode(null)}
        >
          {/* Server Rack Box */}
          <div className="relative group cursor-pointer bg-navy-deep/95 border border-slate-600/80 hover:border-brand-cyan rounded-xl p-3 sm:p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105">
            {/* Top Status Header */}
            <div className="flex items-center justify-between gap-3 mb-2 pb-2 border-b border-slate-700/60">
              <div className="flex items-center gap-1.5">
                <Server className="w-4 h-4 text-brand-cyan" />
                <span className="text-[11px] font-bold text-white tracking-wider uppercase">
                  TN FLASH IDC RACK
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[9px] font-semibold text-emerald-400">ONLINE</span>
              </div>
            </div>

            {/* Server Blade 1 */}
            <div className="w-36 sm:w-44 bg-navy-slate/90 border border-slate-700/60 rounded-lg p-2 mb-1.5 flex items-center justify-between hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-[10px] font-mono text-slate-300">NODE-01 // Primary</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1 h-3 bg-brand-blue rounded-full animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400">99.9%</span>
              </div>
            </div>

            {/* Server Blade 2 */}
            <div className="w-36 sm:w-44 bg-navy-slate/90 border border-slate-700/60 rounded-lg p-2 mb-1.5 flex items-center justify-between hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-slate-300">NODE-02 // Backup</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1 h-3 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400">ACTIVE</span>
              </div>
            </div>

            {/* Server Blade 3 (Storage RAID) */}
            <div className="w-36 sm:w-44 bg-navy-slate/90 border border-slate-700/60 rounded-lg p-2 flex items-center justify-between hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[10px] font-mono text-slate-300">RAID NVMe // Array</span>
              </div>
              <div className="flex items-center gap-1">
                <Activity className="w-3 h-3 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span className="text-[9px] font-mono text-slate-400">SYNC</span>
              </div>
            </div>

            {/* Central Rack Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/20 to-brand-cyan/20 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500 pointer-events-none" />
          </div>

          {/* Badge Label Under Rack */}
          <div className="mt-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-deep/80 border border-brand-blue/40 text-[11px] text-slate-200 font-medium shadow-md">
            <Network className="w-3 h-3 text-brand-cyan animate-pulse" />
            <span>High-Speed Network Mesh</span>
          </div>
        </div>

        {/* Floating Technology Nodes */}
        {nodes.map((node) => {
          const isHovered = activeHoverNode === node.id;
          return (
            <div
              key={node.id}
              className="absolute z-30 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => setActiveHoverNode(node.id)}
              onMouseLeave={() => setActiveHoverNode(null)}
            >
              {/* Interactive Node Button Container */}
              <div className="relative group cursor-pointer">
                {/* Node Pill Card */}
                <div
                  className={`flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl backdrop-blur-md transition-all duration-300 ${
                    isHovered
                      ? 'bg-navy-deep border-2 border-brand-cyan shadow-lg shadow-brand-cyan/20 scale-110'
                      : 'bg-navy-deep/85 border border-slate-700/80 shadow-md hover:border-slate-500'
                  }`}
                >
                  <div className="p-1 rounded-lg bg-slate-800/80 flex items-center justify-center">
                    {node.icon}
                  </div>
                  <div className="hidden sm:flex flex-col">
                    <span className="text-xs font-semibold text-white leading-tight">
                      {node.label}
                    </span>
                    <span className="text-[10px] text-slate-400 leading-tight">
                      {node.subtext}
                    </span>
                  </div>
                </div>

                {/* Floating Node Tooltip Popup */}
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 p-2.5 rounded-xl bg-navy-deep border border-brand-cyan shadow-xl text-left z-40 animate-in fade-in zoom-in-95 duration-150 pointer-events-none">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-1.5 mb-1.5">
                      <span className="text-[11px] font-bold text-white">{node.label}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="text-[10px] text-slate-300 leading-normal">
                      {node.subtext}. Hạ tầng thiết lập dự phòng song song.
                    </p>
                    <div className="mt-1.5 flex items-center gap-1 text-[9px] font-semibold text-brand-cyan">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
                      <span>Trạng thái: Vận hành ổn định</span>
                    </div>
                  </div>
                )}

                {/* Subtle Pulse Ring around active node */}
                <span
                  className="absolute -inset-1 rounded-xl opacity-20 group-hover:opacity-60 transition duration-300 pointer-events-none"
                  style={{ backgroundColor: node.color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Info Strip inside Visualization */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Hệ thống Data Center vận hành 24/7/365</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-brand-cyan" /> Secure AES-256</span>
          <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-brand-blue" /> NVMe Enterprise</span>
        </div>
      </div>
    </div>
  );
};
