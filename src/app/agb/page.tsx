import Layout from '@/components/layout';

export default function AGB() {
	return (
		<Layout>
			<main className="flex-grow">
				<div className="max-w-4xl mx-auto px-4 py-16">
					<h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
						Allgemeine Geschäftsbedingungen
					</h1>
					<div className="prose max-w-none space-y-6">
						{[
							{
								title: "§1 Geltungsbereich & Abwehrklausel",
								content: "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen MysteryBox (nachfolgend 'Anbieter') und dem Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich zu."
							},
							{
								title: "§2 Vertragsschluss",
								content: "Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot dar. Durch Anklicken des Buttons 'Kaufen' geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Waren ab. Die Bestätigung des Eingangs Ihrer Bestellung erfolgt zusammen mit der Annahme der Bestellung unmittelbar nach dem Absenden."
							},
							{
								title: "§3 Widerrufsrecht",
								content: "Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter die Waren in Besitz genommen haben. Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung über Ihren Entschluss informieren."
							},
							{
								title: "§4 Preise und Versandkosten",
								content: "Alle Preise verstehen sich einschließlich der gesetzlichen Mehrwertsteuer. Zusätzlich fallen Versandkosten an, die vor Abgabe der Bestellung im Warenkorb deutlich kommuniziert werden."
							},
							{
								title: "§5 Lieferung und Versand",
								content: "Die Lieferung erfolgt innerhalb Deutschlands. Die voraussichtliche Lieferzeit wird auf der jeweiligen Produktseite angegeben. Der Versand erfolgt via DHL oder einem vergleichbaren Versanddienstleister."
							},
							{
								title: "§6 Eigentumsvorbehalt",
								content: "Die gelieferte Ware bleibt bis zur vollständigen Bezahlung im Eigentum des Anbieters."
							},
							{
								title: "§7 Gewährleistung",
								content: "Es gelten die gesetzlichen Gewährleistungsrechte. Ansprüche wegen Mängeln verjähren nach 2 Jahren ab Übergabe der Kaufsache."
							},
							{
								title: "§8 Datenschutz",
								content: "Die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten erfolgt unter Beachtung unserer Datenschutzerklärung und der geltenden gesetzlichen Bestimmungen, insbesondere der DSGVO."
							}
						].map((section, index) => (
							<div key={index} className="bg-white p-8 rounded-xl shadow-sm">
								<h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
								<p className="text-gray-600">{section.content}</p>
							</div>
						))}
					</div>
				</div>
			</main>
		</Layout>
	);
}