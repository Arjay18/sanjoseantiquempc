import * as React from "react";
import Image from "next/image";

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

type HeroCollageProps = {
  title: React.ReactNode;
  subtitle: string;
  stats: { value: string; label: string }[];
  images: string[];
} & Omit<React.HTMLAttributes<HTMLDivElement>, "title">;

const animationStyle = `
  @keyframes float-up {
    0% { transform: translateY(0px); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
    50% { transform: translateY(-15px); box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3); }
    100% { transform: translateY(0px); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
  }
  .animate-float-up {
    animation: float-up 6s ease-in-out infinite;
  }
`;

const HeroCollage = React.forwardRef<HTMLDivElement, HeroCollageProps>(
  ({ className, title, subtitle, stats, images, ...props }, ref) => {

    const displayImages = images.slice(0, 7);

    return (
      <>
        <style>{animationStyle}</style>
        <section
          ref={ref}
          className={cn(
            "relative w-full bg-background font-sans py-20 sm:py-32 overflow-hidden",
            className
          )}
          {...props}
        >
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              {title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">
              {subtitle}
            </p>
          </div>

          <div className="relative z-0 mt-20 h-[600px] flex items-center justify-center">
            <div className="relative h-full w-full max-w-6xl">
              {displayImages[0] && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-auto w-[300px] rounded-2xl shadow-2xl z-20 animate-float-up">
                  <Image
                    src={displayImages[0]}
                    alt="Main feature"
                    width={300}
                    height={200}
                    className="h-auto w-full rounded-2xl object-cover"
                    style={{ animationDelay: "0s" }}
                  />
                </div>
              )}

              {displayImages[1] && (
                <div className="absolute left-[22%] top-[15%] h-auto w-52 rounded-xl shadow-lg z-10 animate-float-up">
                  <Image
                    src={displayImages[1]}
                    alt="Feature 2"
                    width={208}
                    height={160}
                    className="h-auto w-full rounded-xl object-cover"
                    style={{ animationDelay: "-1.2s" }}
                  />
                </div>
              )}

              {displayImages[2] && (
                <div className="absolute right-[24%] top-[10%] h-auto w-48 rounded-xl shadow-lg z-10 animate-float-up">
                  <Image
                    src={displayImages[2]}
                    alt="Feature 3"
                    width={192}
                    height={160}
                    className="h-auto w-full rounded-xl object-cover"
                    style={{ animationDelay: "-2.5s" }}
                  />
                </div>
              )}

              {displayImages[3] && (
                <div className="absolute right-[20%] bottom-[12%] h-auto w-60 rounded-xl shadow-lg z-30 animate-float-up">
                  <Image
                    src={displayImages[3]}
                    alt="Feature 4"
                    width={240}
                    height={180}
                    className="h-auto w-full rounded-xl object-cover"
                    style={{ animationDelay: "-3.5s" }}
                  />
                </div>
              )}

              {displayImages[4] && (
                <div className="absolute right-[5%] top-1/2 -translate-y-[60%] h-auto w-52 rounded-xl shadow-lg z-10 animate-float-up">
                  <Image
                    src={displayImages[4]}
                    alt="Feature 5"
                    width={208}
                    height={160}
                    className="h-auto w-full rounded-xl object-cover"
                    style={{ animationDelay: "-4.8s" }}
                  />
                </div>
              )}

              {displayImages[5] && (
                <div className="absolute left-[18%] bottom-[8%] h-auto w-56 rounded-xl shadow-lg z-30 animate-float-up">
                  <Image
                    src={displayImages[5]}
                    alt="Feature 6"
                    width={224}
                    height={170}
                    className="h-auto w-full rounded-xl object-cover"
                    style={{ animationDelay: "-5.2s" }}
                  />
                </div>
              )}

              {displayImages[6] && (
                <div className="absolute left-[5%] top-[25%] h-auto w-48 rounded-xl shadow-lg z-10 animate-float-up">
                  <Image
                    src={displayImages[6]}
                    alt="Feature 7"
                    width={192}
                    height={160}
                    className="h-auto w-full rounded-xl object-cover"
                    style={{ animationDelay: "-6s" }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="container relative z-10 mx-auto mt-16 px-4">
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold tracking-tight text-blue-600">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
);

HeroCollage.displayName = "HeroCollage";

export { HeroCollage };

