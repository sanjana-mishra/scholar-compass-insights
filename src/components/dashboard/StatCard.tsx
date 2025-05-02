
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  className?: string;
  bgColor?: string;
  textColor?: string;
}

const StatCard = ({
  title,
  value,
  description,
  className,
  bgColor = "bg-blue-100",
  textColor = "text-blue-700",
}: StatCardProps) => {
  return (
    <div className={cn("rounded-xl p-5", bgColor, className)}>
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl font-bold mb-1">{value}</h3>
        <p className={cn("font-medium", textColor)}>{title}</p>
        {description && <p className="text-sm mt-1 opacity-70">{description}</p>}
      </div>
    </div>
  );
};

export default StatCard;
