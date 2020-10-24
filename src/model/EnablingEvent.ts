export default interface EnablingEvent {
  id: string;
  title: string;
  bg: string;
  summary: string;
  startDate: string;
  organizer: string;
  location: string;
  endDate: string;
  salesStartDate?: string;
  salesEndDate?: string;
  publishDate: string;
  privacy: string;
}
