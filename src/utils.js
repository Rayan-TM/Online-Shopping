export const getDateAndTime = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const fullDate = `${year}-${month}-${day}`;

    const hour = date.getHours()
    const minute = date.getMinutes()

    const fullTime = `${hour}:${minute}`
    return {fullTime, fullDate};
  };