"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Terminal, Globe, Wrench, Brain } from 'lucide-react';

// Categorize skills by domain
const categorizeSkill = (skill) => {
  const securityTerms = ['Segurança', 'EDR', 'Firewall', 'Pentesting', 'Hardening', 'Vulnerabilidade', 'Incidente', 'SIEM', 'Nessus', 'Nmap', 'OwaspZap', 'Wireshark', 'Metasploit', 'Wazuh', 'Graylog', 'Kaspersky', 'IAM'];
  const networkTerms = ['TCP/IP', 'Rede', 'Cisco', 'VPN', 'MPLS', 'Segmentação'];
  const infraTerms = ['Windows Server', 'Linux', 'Active Directory', 'Ubuntu', 'Kali'];
  const devTerms = ['Python', 'PHP', 'Bash', 'Scripting'];
  
  if (securityTerms.some(t => skill.includes(t))) {
    return { category: 'Segurança', icon: <Shield className="w-3.5 h-3.5" />, colorClass: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:border-cyan-400/40 hover:bg-cyan-500/15' };
  }
  if (networkTerms.some(t => skill.includes(t))) {
    return { category: 'Redes', icon: <Globe className="w-3.5 h-3.5" />, colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/15' };
  }
  if (infraTerms.some(t => skill.includes(t))) {
    return { category: 'Infraestrutura', icon: <Server className="w-3.5 h-3.5" />, colorClass: 'bg-violet-500/10 text-violet-400 border-violet-500/20 hover:border-violet-400/40 hover:bg-violet-500/15' };
  }
  if (devTerms.some(t => skill.includes(t))) {
    return { category: 'Dev/Scripting', icon: <Terminal className="w-3.5 h-3.5" />, colorClass: 'bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-400/40 hover:bg-green-500/15' };
  }
  return { category: 'Ferramentas', icon: <Wrench className="w-3.5 h-3.5" />, colorClass: 'bg-amber-500/10 text-amber-400 border-amber-500/20 hover:border-amber-400/40 hover:bg-amber-500/15' };
};

const Skills = ({ skills }) => {
  const hasTechnical = skills && Array.isArray(skills.technical) && skills.technical.length > 0;
  const hasSoft = skills && Array.isArray(skills.soft) && skills.soft.length > 0;

  if (!hasTechnical && !hasSoft) return null;

  // Group technical skills by category
  const grouped = {};
  if (hasTechnical) {
    skills.technical.forEach(skill => {
      const { category, icon, colorClass } = categorizeSkill(skill);
      if (!grouped[category]) {
        grouped[category] = { skills: [], icon, colorClass };
      }
      grouped[category].skills.push(skill);
    });
  }

  return (
    <section id="skills" className="py-20 md:py-28 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Habilidades & Competências</h2>
          <p className="section-subtitle">Domínios técnicos em segurança, infraestrutura, redes e desenvolvimento</p>
        </motion.div>

        {/* Technical Skills — Grouped */}
        {hasTechnical && (
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {Object.entries(grouped).map(([category, data], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${data.colorClass.split(' ').slice(0, 2).join(' ')}`}>
                    {data.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-300 cursor-default ${data.colorClass}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.03 }}
                      whileHover={{ y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Soft Skills / Frameworks */}
        {hasSoft && (
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-pink-500/10 flex items-center justify-center">
                <Brain className="w-3.5 h-3.5 text-pink-400" />
              </div>
              <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">Soft Skills & Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-300 cursor-default bg-pink-500/10 text-pink-400 border-pink-500/20 hover:border-pink-400/40 hover:bg-pink-500/15"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
