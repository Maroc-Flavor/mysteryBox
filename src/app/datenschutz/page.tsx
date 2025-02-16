import Layout from '@/components/layout';

export default function Datenschutz() {
	return (
		<Layout>
			<main className="flex-grow">
				<div className="max-w-4xl mx-auto px-4 py-16">
					<h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
						Datenschutzerklärung
					</h1>
					<div className="prose max-w-none space-y-6">
						{[
							{
								title: "1. Datenschutz auf einen Blick",
								content: "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung."
							},
							{
								title: "2. Verantwortliche Stelle",
								content: "Verantwortlich für die Datenverarbeitung auf dieser Website ist: MysteryBox [Ihre vollständige Adresse]. Telefon: [Ihre Telefonnummer], E-Mail: [Ihre E-Mail]"
							},
							{
								title: "3. Datenerfassung auf unserer Website",
								content: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Ihre Daten werden zum einen durch Ihre Eingabe im Shop erhoben, zum anderen werden automatisch beim Besuch der Website technische Daten durch unsere IT-Systeme erfasst. Dies sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs)."
							},
							{
								title: "4. Cookies",
								content: "Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Ihr Browser greift auf diese Dateien zu. Durch den Einsatz von Cookies erhöht sich die Benutzerfreundlichkeit und Sicherheit dieser Website."
							},
							{
								title: "5. Bestellprozess",
								content: "Im Rahmen des Bestellprozesses erheben wir personenbezogene Daten wie Name, Anschrift, Kontakt- und Zahlungsdaten. Diese Daten sind zur Vertragserfüllung erforderlich und werden ausschließlich für die Abwicklung der Bestellung verwendet."
							},
							{
								title: "6. Ihre Rechte",
								content: "Sie haben jederzeit das Recht auf Auskunft über die Sie betreffenden personenbezogenen Daten. Sie können der Verarbeitung widersprechen, die Berichtigung oder Löschung Ihrer Daten verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden."
							},
							{
								title: "7. SSL-Verschlüsselung",
								content: "Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 'http://' auf 'https://' wechselt und an dem Schloss-Symbol in Ihrer Browserzeile."
							},
							{
								title: "8. PayPal",
								content: "Auf unserer Website bieten wir u.a. die Bezahlung via PayPal an. Anbieter dieses Zahlungsdienstes ist die PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg. Wenn Sie mit PayPal bezahlen, werden die von Ihnen eingegebenen Zahlungsdaten an PayPal übermittelt."
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