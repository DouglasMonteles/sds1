import moment from 'moment';

export const formateDate = (data: string) => {
  return moment(data).format('DD/MM/YYYY HH:mm');
} 