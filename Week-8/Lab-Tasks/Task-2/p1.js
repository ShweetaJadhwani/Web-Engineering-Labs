function generateInvitationMessages(guests, ...additionalDetails) {
    return guests.map(guest => {
      let invitationMessage = `Dear ${guest.name},\n`;
      invitationMessage += `You are cordially invited to our party!\n`;
      invitationMessage += `Details:\n`;
      invitationMessage += `Age: ${guest.age}\n`;
      invitationMessage += `RSVP Status: ${guest.rsvp ? 'Attending' : 'Not Attending'}\n`;
      if (additionalDetails.length > 0) {
        invitationMessage += `Additional Details: ${additionalDetails.join(', ')}\n`;
      }
      invitationMessage += `We hope to see you there!\n`;
      invitationMessage += `Best regards,\nThe Party Organizer`;
      return invitationMessage;
    });
  }
  
 
  const guests = [
    { name: 'Alice', age: 30, rsvp: true },
    { name: 'Bob', age: 25, rsvp: false },
    { name: 'Charlie', age: 40, rsvp: true }
  ];
  
  const invitations = generateInvitationMessages(guests, 'Dress code: Semi-formal', 'Location: 123 Main St.');
  console.log(invitations);
  