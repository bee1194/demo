import { format } from "date-fns";

const DEFAULT_DATE_FORMAT = "dd/MM/yyyy HH:mm";

export const formatDate = (
  date: Date | string,
  formatValue = DEFAULT_DATE_FORMAT
): string => {
  return format(new Date(date), formatValue);
};
