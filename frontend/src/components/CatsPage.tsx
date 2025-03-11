import { useQuery } from '@tanstack/react-query';
import { getAllCats } from '../services/catsService';

export function CatsPage() {
  const cats = useQuery({ queryKey: ['cats'], queryFn: getAllCats });

  return (
    <div>
      sncjakbcdkjsd
      {cats.data?.[0].name /* TODO: Figure out why that doesn't work */ } 
    </div>
  )
}
