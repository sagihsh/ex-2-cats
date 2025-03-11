import { useQuery } from '@tanstack/react-query';
import { getAllCats } from '../services/catsService';

export function CatsPage() {
  const cats = useQuery({ queryKey: ['cats'], queryFn: getAllCats });

  return (
    <div>
      {cats.data?.map(cat => (
        <span>
          <br /> {cat.name}
        </span>
      )) } 
    </div>
  )
}
