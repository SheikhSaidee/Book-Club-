import { useEffect } from 'react';
import { data } from '../config/data';

export function useTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | ${data.club.name}`;
  }, [title]);
}
