import React from 'react';
import SkillTag from './SkillTag';
import type { Skill } from './SkillTag';

export type UserData = {
  id: string;
  name: string;
  email: string;
  online: boolean;
  avatarUrl: string;
  skills: Skill[];
};

interface UserProfileCardProps {
  user: UserData;
  onViewDetails: (id: string) => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user, onViewDetails }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: 16,
        width: 320,
        margin: 12,
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
        backgroundColor: '#fff',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        flexWrap: 'wrap'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={user.avatarUrl}
          alt={user.name}
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            objectFit: 'cover',
            marginRight: 16,
          }}
        />
        <div>
          <h3 style={{ margin: '0 0 6px', color: '#000' }}>{user.name}</h3>
          <p style={{ margin: '0 0 4px', fontSize: 14, color: '#262424' }}>{user.email}</p>
          <p style={{ margin: 0, fontSize: 14, color: user.online ? 'green' : 'gray' }}>
            ● {user.online ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>

      <div>
        <p style={{ margin: '0 0 6px', fontWeight: 'bold', color: '#262424' }}>Skills:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {user.skills.map((skill, idx) => (
            <SkillTag key={idx} skillName={skill.skillName} level={skill.level} />
          ))}
        </div>
      </div>

      <button
        onClick={() => onViewDetails(user.id)}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          padding: '12px 0',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: 16,
          width: '100%',
        }}
      >
        View Details
      </button>
    </div>
  );
};

export default UserProfileCard;
