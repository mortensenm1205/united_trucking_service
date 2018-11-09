import React from 'react';
import TeamMember from './Member';

const TeamList = props => {
  const { members } = props;
  return(
    <div>
      {members.map(member => {
        return (
          <div key={member.id}>
            <TeamMember member={member} />
          </div>
        )
      })}
    </div>
  )
}

export default TeamList;
