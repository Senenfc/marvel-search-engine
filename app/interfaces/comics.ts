export interface Comics {
  id: number;
  title: string;
  image: string;
  dates: TDates[];
}

export type TDates = {
  type: string;
  date: string;
};
