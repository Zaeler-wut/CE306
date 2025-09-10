import React from 'react';

export type Skill = {
  skillName: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
};

interface SkillTagProps {
  skillName: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

const levelColors: Record<string, string> = {
  Beginner: '#c8e6c9',
  Intermediate: '#fff9c4',
  Advanced: '#ffcdd2',
};

const SkillTag: React.FC<SkillTagProps> = ({ skillName, level }) => {
  const backgroundColor = level ? levelColors[level] : '#e0e0e0';
  const fontStyle = level ? 'italic' : 'normal';

  return (
    <span
      style={{
        display: 'inline-block',
        backgroundColor,
        borderRadius: 4,
        padding: '4px 8px',
        margin: '4px 6px 4px 0',
        fontSize: 12,
        fontStyle,
        color: '#302f2fff',
      }}
    >
      {skillName} {level && <span>({level})</span>}
    </span>
  );
};

export default SkillTag;
