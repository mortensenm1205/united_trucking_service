import React from 'react';
import TeamMember from './Member';

const TeamList = props => {
  const { members } = props;
  return(
    <div>
      {members.map(member => {
        return <TeamMember />
      })}
    </div>
  )
}

export default TeamList;
