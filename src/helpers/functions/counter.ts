import { CounterResponse } from '@/interfaces/counter';

export const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then(resp => resp.json());
  return data;
};
