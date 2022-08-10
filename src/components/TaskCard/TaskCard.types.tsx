export interface TaskCardProps {
  card: TaskCardItems;
}
export interface TaskCardItems {
  title: string;
  date: string;
  description: string;
  sector: 'TI' | 'Relacionamento' | 'Suporte';
  priority: string;
  status: string;
}
