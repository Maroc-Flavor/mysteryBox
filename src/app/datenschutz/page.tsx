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
								title: "4. Cookies und deren Verwendung",
								content: `Unsere Website verwendet verschiedene Arten von Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Wir unterscheiden zwischen:

1. Notwendige Cookies (Essential Cookies):
Diese Cookies sind für den Betrieb der Website unbedingt erforderlich. Sie ermöglichen grundlegende Funktionen wie die Seitennavigation und den Zugriff auf sichere Bereiche der Website. Die Website kann ohne diese Cookies nicht richtig funktionieren.

2. Analyse-Cookies (Analytics Cookies):
Diese Cookies helfen uns, zu verstehen, wie Besucher mit unserer Website interagieren. Sie sammeln Informationen über die Nutzung unserer Website, z.B. welche Seiten am häufigsten besucht werden. Alle Informationen, die diese Cookies sammeln, sind aggregiert und daher anonym.

3. Marketing-Cookies:
Diese Cookies werden verwendet, um Besuchern auf unserer Website gezielte Werbung anzuzeigen. Sie werden auch verwendet, um die Anzahl der Aufrufe einer Anzeige zu begrenzen und die Effektivität von Werbekampagnen zu messen.

Sie können Ihre Cookie-Einstellungen jederzeit über unser Cookie-Banner anpassen. Notwendige Cookies können nicht deaktiviert werden, da sie für das Funktionieren der Website erforderlich sind.`
							},
							{
								title: "5. Speicherdauer von Cookies",
								content: "Die von uns gesetzten Cookies haben unterschiedliche Laufzeiten: Notwendige Cookies werden für die Dauer Ihrer Sitzung gespeichert, während Analyse- und Marketing-Cookies für die Dauer von einem Jahr gespeichert werden. Sie können Cookies jederzeit in Ihren Browsereinstellungen löschen."
							},
							{
								title: "6. Bestellprozess",
								content: "Im Rahmen des Bestellprozesses erheben wir personenbezogene Daten wie Name, Anschrift, Kontakt- und Zahlungsdaten. Diese Daten sind zur Vertragserfüllung erforderlich und werden ausschließlich für die Abwicklung der Bestellung verwendet."
							},
							{
								title: "7. Ihre Rechte",
								content: "Sie haben jederzeit das Recht auf Auskunft über die Sie betreffenden personenbezogenen Daten. Sie können der Verarbeitung widersprechen, die Berichtigung oder Löschung Ihrer Daten verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden."
							},
							{
								title: "8. SSL-Verschlüsselung",
								content: "Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 'http://' auf 'https://' wechselt und an dem Schloss-Symbol in Ihrer Browserzeile."
							},
							{
								title: "9. PayPal",
								content: "Auf unserer Website bieten wir u.a. die Bezahlung via PayPal an. Anbieter dieses Zahlungsdienstes ist die PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg. Wenn Sie mit PayPal bezahlen, werden die von Ihnen eingegebenen Zahlungsdaten an PayPal übermittelt."
							}
						].map((section, index) => (
							<div key={index} className="bg-white p-8 rounded-xl shadow-sm">
								<h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
								<p className="text-gray-600 whitespace-pre-line">{section.content}</p>
							</div>
						))}
					</div>
				</div>
			</main>
		</Layout>
	);
}