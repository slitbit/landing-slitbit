export function formatPhoneNumber(phoneNumber : string) {
    const cleaned = phoneNumber.toString().replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    
    if (match) {
        return `(${match[1]}) ${match[2]} ${match[3]}`;
    }
  
    return phoneNumber;
  }