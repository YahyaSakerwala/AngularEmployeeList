export function correctFormDateFormat(formvalue_wrongDateFormat:any){
    const date = new Date(formvalue_wrongDateFormat.dateOfJoining);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    formvalue_wrongDateFormat.dateOfJoining=formattedDate
    var correctedObject=formvalue_wrongDateFormat
    return correctedObject
  }