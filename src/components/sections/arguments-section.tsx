import { Badge } from "@ui/badge";
import { WobbleCard } from "@ui/wobble-card";

export function ArgumentsSection() {

	return (
		<div className="flex flex-col justify-center items-center text-center">
			<Badge variant="outline" className="px-3 py-2 rounded-full">Pourquoi choisir Candela Studio ?</Badge>
			<h1 className="text-3xl leading-20">Une lumière claire pour guider vos projets numériques</h1>
			<p>Chez Candela Studio, nous pensons que la lumière n’est pas qu’un symbole : c’est une approche.
				Clarté
				stratégique, rigueur technique et transmission fluide sont les trois piliers de notre méthode. Résultat : des
				projets structurés, bien réalisés, et livrés sans zones d’ombre.</p>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
				<WobbleCard
					containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
					className=""
				>
					<div className="max-w-xs">
						<h2
							className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
							Gippity AI powers the entire universe
						</h2>
						<p className="mt-4 text-left  text-base/6 text-neutral-200">
							With over 100,000 mothly active bot users, Gippity AI is the most
							popular AI platform for developers.
						</p>
					</div>
					<img
						src="/linear.webp"
						width={500}
						height={500}
						alt="linear demo image"
						className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
					/>
				</WobbleCard>
				<WobbleCard containerClassName="col-span-1 min-h-[300px]">
					<h2
						className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
						No shirt, no shoes, no weapons.
					</h2>
					<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
						If someone yells “stop!”, goes limp, or taps out, the fight is over.
					</p>
				</WobbleCard>
				<WobbleCard
					containerClassName="col-span-1 lg:col-span-3 bg-slate-700 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
					<div className="max-w-lg">
						<h2
							className="max-w-lg md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
							Comme la lumière, l’information circule sans friction.
						</h2>
						<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
							Un suivi transparent, des échanges simples, des livrables sans surprise. Nous avançons en confiance.
						</p>
					</div>
					<img
						src="/linear.webp"
						width={500}
						height={500}
						alt="linear demo image"
						className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
					/>
				</WobbleCard>
			</div>
		</div>
	)
}