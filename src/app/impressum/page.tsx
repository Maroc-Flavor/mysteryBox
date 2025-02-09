import StaticLayout from '@/components/StaticLayout';

export default function Impressum() {
	return (
		<StaticLayout>
			<main className="flex-grow py-12 px-4">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl font-bold mb-8">Impressum</h1>
					<div className="prose prose-lg">
						<h2>Angaben gemäß § 5 TMG</h2>
						<p>
							MysteryBox GmbH<br />
							Musterstraße 123<br />
							12345 Musterstadt
						</p>
						
						<h2>Kontakt</h2>
						<p>
							Telefon: +49 (0) 123 456789<br />
							E-Mail: info@mysterybox.de
						</p>

						<h2>Vertreten durch</h2>
						<p>
							Don Simo<br />
							Geschäftsführer
						</p>
					</div>
				</div>
			</main>
		</StaticLayout>
	);
}
