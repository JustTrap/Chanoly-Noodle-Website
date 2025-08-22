// components/MenuCard.tsx
interface MenuCardProps {
  title: string;
  items: { name: string; price: string }[];
}

export function MenuCard({ title, items }: MenuCardProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-2xl font-black text-chanoly mb-4 border-b-2 border-chanoly pb-2">
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex justify-center items-center">
            <h4 className="font-medium text-gray-800 text-sm text-center">{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
