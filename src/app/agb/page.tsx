import StaticLayout from '@/components/StaticLayout';

export default function AGB() {
	return (
		<StaticLayout>
			<main className="flex-grow py-12 px-4">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
					<div className="prose prose-lg">
						<h2>§1 Geltungsbereich</h2>
						<p>
							Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen, die Kunden über den Online-Shop der MysteryBox GmbH tätigen.
						</p>
						
						<h2>§2 Vertragsschluss</h2>
						<p>
							Mit der Bestellung einer Mystery Box gibt der Kunde ein verbindliches Angebot zum Kauf des betreffenden Produkts ab.
						</p>

						<h2>§3 Widerrufsrecht</h2>
						<p>
							Aufgrund der Natur unserer Mystery Boxes (Überraschungspakete) ist ein Widerrufsrecht nach erfolgreicher Bestellung ausgeschlossen.
						</p>
					</div>
				</div>
			</main>
		</StaticLayout>
	);
}
