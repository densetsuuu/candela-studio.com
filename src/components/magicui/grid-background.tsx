'use client'

export default function GridBackground() {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
            {/* Gradient blob */}
            <div
                className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-sky-400 opacity-20 blur-[120px] rounded-full"
            />
            <div
                className="absolute top-[10%] right-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-purple-400 opacity-25 blur-[130px] rounded-full"
            />
            {/* Grid pattern */}
            <div
                className="w-full h-full"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(var(--foreground-rgb), 0.1) .1px, transparent .5px),
            linear-gradient(to bottom, rgba(var(--foreground-rgb), 0.1) .1px, transparent .5px)
          `,
                    backgroundSize: '140px 140px',
                    backgroundPosition: 'center',
                }}
            />
        </div>
    )
}
