import Logo from "@/components/Logo";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <Link 
              to="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Verantwortlicher</h2>
            <p className="text-gray-700">
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Golze & Michel OHG<br />
              Internationale Spediteure<br />
              Beusselstr. 44 N-Q<br />
              10553 Berlin<br />
              Deutschland<br /><br />
              Geschäftsführer: Eugeniusz Rachuta<br />
              E-Mail: info@carlogix.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p className="text-gray-700 mb-4">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
            </p>
            <p className="text-gray-700">
              In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Kontakt mit uns</h2>
            <p className="text-gray-700 mb-4">
              Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung Ihrer Anfrage)
            </p>
            <p className="text-gray-700">
              <strong>Speicherdauer:</strong> Diese Daten geben wir nicht ohne Ihre Einwilligung weiter und löschen sie nach vollständiger Bearbeitung Ihrer Anfrage, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Website-Nutzung</h2>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Logfiles</h3>
            <p className="text-gray-700 mb-4">
              Bei jedem Zugriff auf unsere Website werden Nutzungsdaten durch den jeweiligen Internetbrowser übermittelt und in Protokolldateien (sogenannten Server-Logfiles) gespeichert. Dabei werden folgende Daten gespeichert:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>IP-Adresse des zugreifenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem</li>
            </ul>
            <p className="text-gray-700">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der ordnungsgemäßen Funktionsfähigkeit der Website)
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Bewerbungsverfahren</h2>
            <p className="text-gray-700 mb-4">
              Wenn Sie sich über unser Online-Formular bewerben, verarbeiten wir Ihre übermittelten Daten zur Abwicklung des Bewerbungsverfahrens.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen) und § 26 BDSG (Beschäftigtendatenschutz)
            </p>
            <p className="text-gray-700">
              <strong>Speicherdauer:</strong> Bewerbungsunterlagen werden nach Abschluss des Bewerbungsverfahrens gelöscht, spätestens nach 6 Monaten, es sei denn, Sie haben einer längeren Speicherung zugestimmt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Ihre Rechte</h2>
            <p className="text-gray-700 mb-4">
              Ihnen stehen bezüglich Ihrer bei uns gespeicherten personenbezogenen Daten grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.
            </p>
            <p className="text-gray-700 mb-4">
              Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
            </p>
            <p className="text-gray-700">
              <strong>Zuständige Aufsichtsbehörde:</strong><br />
              Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
              Friedrichstr. 219<br />
              10969 Berlin
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Datensicherheit</h2>
            <p className="text-gray-700">
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Ob eine einzelne Seite unseres Internetauftritts verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p className="text-gray-700">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand {new Date().toLocaleDateString('de-DE')}. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </div>

          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-500">
              Stand: {new Date().toLocaleDateString('de-DE')}<br />
              Golze & Michel OHG, Internationale Spediteure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;