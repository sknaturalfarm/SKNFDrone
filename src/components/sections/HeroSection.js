/* eslint-disable @next/next/no-img-element */
import { Badge, Button } from "#/base";
import { Brands } from "#/Brands";
import { cn } from "@/lib/utils";

export function HeroSection({
  badge,
  title,
  description,
  buttons,
  image,
  clientsLabel,
  clients,
  ...rest
}) {
  return (
    <section {...rest}>
      <div className="max-w-screen-xl px-6 mx-auto">
        <div className="flex flex-col justify-center items-center min-h-screen">
          {/* Title Section */}
          <div className="flex flex-col justify-center items-center gap-4 text-center max-w-3xl mx-auto mt-32 pb-12">
            <Badge {...badge} />
            <h1 className="text-6xl font-display font-semibold title-gradient">
              {title}
            </h1>
            <p className="text-xl">{description}</p>
            {buttons.length > 0 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button} />
                ))}
              </div>
            )}
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-5xl px-4">
            <img
              src={image.src}
              alt={image.alt}
              className={cn("w-full h-auto", image.className)}
            />
          </div>

          {/* Clients Section */}
          <div className="text-base font-medium mt-10 mb-4 text-gray-700 dark:text-gray-300">
            {clientsLabel}
          </div>
          <Brands clients={clients} />
        </div>
      </div>
    </section>
  );
}
