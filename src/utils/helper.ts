

export const getFormattedDate = (date: string) => {
    if (!date) return '';
    const formatted = new Intl.DateTimeFormat('en-GB', {
        month: 'short',  
        day: '2-digit',  
        year: 'numeric' 
      }).format(new Date(date));
    return formatted;
  }