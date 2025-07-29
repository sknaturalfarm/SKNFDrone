/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

export const Brands = ({ clients, className, ...rest }) => {
  // Duplicate logos for infinite scroll
  const repeatedClients = [...clients, ...clients];

  return (
    <div className={cn("w-full overflow-hidden py-10", className)} {...rest}>
      <div className="animate-marquee flex items-center gap-20 min-w-max">
        {repeatedClients.map((client, index) => (
          <img
            key={index}
            src={client.src}
            alt={client.name}
            className="h-28 md:h-32 max-w-[220px] object-contain transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};
