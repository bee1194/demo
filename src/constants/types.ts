export interface APIDataState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
