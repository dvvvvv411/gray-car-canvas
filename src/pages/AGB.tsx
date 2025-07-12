import Logo from "@/components/Logo";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AGB = () => {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 1 Geltungsbereich</h2>
            <p className="text-gray-700 mb-4">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über Fahrzeugüberführungen, Transport- und Speditionsleistungen zwischen der Golze & Michel OHG, Internationale Spediteure (nachfolgend "Auftragnehmer" genannt) und ihren Auftraggebern (nachfolgend "Auftraggeber" genannt).
            </p>
            <p className="text-gray-700">
              Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 2 Vertragsschluss</h2>
            <p className="text-gray-700 mb-4">
              Angebote des Auftragnehmers sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung oder durch Beginn der Ausführung des Auftrags durch den Auftragnehmer zustande.
            </p>
            <p className="text-gray-700">
              Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung durch den Auftragnehmer.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 3 Leistungsumfang</h2>
            <p className="text-gray-700 mb-4">
              Der Auftragnehmer übernimmt die Überführung von Fahrzeugen nach den ADSp (Allgemeine Deutsche Spediteurbedingungen) in der jeweils gültigen Fassung, soweit nachstehend nichts anderes bestimmt ist.
            </p>
            <p className="text-gray-700 mb-4">
              Zusätzliche Leistungen wie Reinigung, Wartung oder Reparaturen sind gesondert zu vereinbaren und zu vergüten.
            </p>
            <p className="text-gray-700">
              Der Auftraggeber hat das Fahrzeug betriebsbereit, verkehrssicher und mit ausreichender Betriebsstoffmenge zu übergeben.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 4 Preise und Zahlungsbedingungen</h2>
            <p className="text-gray-700 mb-4">
              Die Preise verstehen sich netto zuzüglich der gesetzlichen Mehrwertsteuer in der jeweils gültigen Höhe.
            </p>
            <p className="text-gray-700 mb-4">
              Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.
            </p>
            <p className="text-gray-700">
              Aufrechnung ist nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen zulässig.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 5 Haftung</h2>
            <p className="text-gray-700 mb-4">
              Die Haftung des Auftragnehmers richtet sich nach den gesetzlichen Bestimmungen, insbesondere nach den §§ 407 ff. HGB sowie den ADSp.
            </p>
            <p className="text-gray-700 mb-4">
              Die Haftung für Schäden ist begrenzt auf den Betrag von 8,33 Rechnungseinheiten je Kilogramm des Rohgewichts der Sendung, höchstens jedoch 1.250.000 Rechnungseinheiten je Schadensereignis.
            </p>
            <p className="text-gray-700">
              Für die Dauer des Transports besteht keine Haftung für Schäden durch normale Abnutzung, versteckte Mängel oder Diebstahl von nicht fest mit dem Fahrzeug verbundenen Gegenständen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 6 Versicherung</h2>
            <p className="text-gray-700 mb-4">
              Der Auftragnehmer unterhält eine Transportversicherung entsprechend den gesetzlichen Bestimmungen.
            </p>
            <p className="text-gray-700">
              Eine über die gesetzlichen Bestimmungen hinausgehende Versicherung erfolgt nur auf ausdrücklichen Wunsch und auf Kosten des Auftraggebers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 7 Verjährung</h2>
            <p className="text-gray-700">
              Alle Ansprüche gegen den Auftragnehmer verjähren in einem Jahr. Die Verjährung beginnt mit dem Tag, an dem die Sendung abgeliefert wurde oder hätte abgeliefert werden sollen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 8 Erfüllungsort und Gerichtsstand</h2>
            <p className="text-gray-700 mb-4">
              Erfüllungsort für alle Verpflichtungen aus dem Vertragsverhältnis ist Berlin.
            </p>
            <p className="text-gray-700">
              Ausschließlicher Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis ist Berlin, sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 9 Salvatorische Klausel</h2>
            <p className="text-gray-700">
              Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, so berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. An die Stelle der unwirksamen oder undurchführbaren Bestimmung tritt eine wirksame und durchführbare Bestimmung, die dem wirtschaftlichen Zweck der unwirksamen am nächsten kommt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 10 Anwendbares Recht</h2>
            <p className="text-gray-700">
              Es gilt ausschließlich deutsches Recht unter Ausschluss des UN-Kaufrechts.
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

export default AGB;