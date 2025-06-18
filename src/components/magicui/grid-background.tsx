'use client'

export default function GridBackground() {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
            {/* Gradient blob */}
            <div
                className="absolute top-0 left-0 w-[400px] h-[400px] bg-sky-400 opacity-20 blur-[150px] rounded-full"/>
            <div
                className="absolute top-1/10 right-0 w-[500px] h-[500px] bg-purple-400 opacity-25 blur-[160px] rounded-full"/>

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
