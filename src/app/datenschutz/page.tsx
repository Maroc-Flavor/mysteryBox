import StaticLayout from '@/components/StaticLayout';

export default function Datenschutz() {
	return (
		<StaticLayout>
			<main className="flex-grow py-12 px-4">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
					<div className="prose prose-lg">
						<h2>1. Datenschutz auf einen Blick</h2>
						<p>
							Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen.
						</p>
						
						<h2>2. Erhebung und Verarbeitung von Daten</h2>
						<p>
							Wenn Sie auf unserer Webseite Mystery Boxes bestellen, erheben wir nur die Daten, die für die Abwicklung Ihrer Bestellung notwendig sind.
						</p>

						<h2>3. Cookies</h2>
						<p>
							Unsere Website verwendet Cookies, um Ihnen ein optimales Einkaufserlebnis zu bieten. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden.
						</p>

						<h2>4. Newsletter</h2>
						<p>
							Mit Ihrer Einwilligung nutzen wir Ihre E-Mail-Adresse zum Versand unseres Newsletters. Die Abmeldung ist jederzeit möglich.
						</p>
					</div>
				</div>
			</main>
		</StaticLayout>
	);
}
