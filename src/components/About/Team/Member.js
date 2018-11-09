import React from 'react';

const TeamMember = props => {
  const { member } = props;
  return (
    <div>
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </div>
  )
}

export default TeamMember;
