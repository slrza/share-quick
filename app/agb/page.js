export default function AGB() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      {/* English Version */}
      <div className="mb-20" id="english">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">§1 Scope</h2>
            <p className="text-gray-600 mb-4">
              These General Terms and Conditions apply to all current and future
              business relationships between ShareQuick GmbH (hereinafter
              "Provider") and the customer (hereinafter "User").
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              §2 Subject Matter of the Contract
            </h2>
            <p className="text-gray-600 mb-4">
              The Provider offers the User a digital platform for creating and
              managing digital identity cards. The exact features are specified
              in the respective product description.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              §3 Conclusion of Contract
            </h2>
            <p className="text-gray-600 mb-4">
              The presentation of products in the online shop does not
              constitute a legally binding offer, but rather an invitation to
              place an order. The contract is concluded when the Provider
              accepts the customer's order.
            </p>
          </div>
        </section>
      </div>

      {/* German Version */}
      <div className="border-t pt-20" id="german">
        <h1 className="text-3xl font-bold mb-8">
          Allgemeine Geschäftsbedingungen
        </h1>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">§1 Geltungsbereich</h2>
            <p className="text-gray-600 mb-4">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle
              gegenwärtigen und zukünftigen Geschäftsbeziehungen zwischen der
              ShareQuick GmbH (nachfolgend "Anbieter") und dem Kunden
              (nachfolgend "Nutzer").
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              §2 Vertragsgegenstand
            </h2>
            <p className="text-gray-600 mb-4">
              Der Anbieter stellt dem Nutzer eine digitale Plattform zur
              Erstellung und Verwaltung digitaler Identitätskarten zur
              Verfügung. Die genauen Leistungsmerkmale ergeben sich aus der
              jeweiligen Produktbeschreibung.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">§3 Vertragsschluss</h2>
            <p className="text-gray-600 mb-4">
              Die Darstellung der Produkte im Online-Shop stellt kein rechtlich
              bindendes Angebot, sondern eine Aufforderung zur Bestellung dar.
              Der Vertrag kommt durch die Annahme der Kundenbestellung durch den
              Anbieter zustande.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              §4 Preise und Zahlung
            </h2>
            <p className="text-gray-600 mb-4">
              Alle Preise verstehen sich in Euro inklusive der gesetzlichen
              Mehrwertsteuer. Die Zahlung erfolgt per Vorkasse durch die
              angebotenen Zahlungsmethoden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">§5 Widerrufsrecht</h2>
            <p className="text-gray-600 mb-4">
              Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Die
              Einzelheiten ergeben sich aus der Widerrufsbelehrung, die dem
              Kunden vor Vertragsschluss zur Verfügung gestellt wird.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">§6 Haftung</h2>
            <p className="text-gray-600 mb-4">
              Der Anbieter haftet unbeschränkt für Vorsatz und grobe
              Fahrlässigkeit. Für leichte Fahrlässigkeit haftet der Anbieter nur
              bei Verletzung einer wesentlichen Vertragspflicht und der Höhe
              nach beschränkt auf die vertragstypisch vorhersehbaren Schäden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              §7 Schlussbestimmungen
            </h2>
            <p className="text-gray-600 mb-4">
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
              des UN-Kaufrechts. Erfüllungsort und ausschließlicher
              Gerichtsstand ist der Sitz des Anbieters.
            </p>
          </div>
        </section>
      </div>

      {/* Language Toggle */}
      <div className="fixed bottom-8 right-8 bg-white shadow-lg rounded-full px-4 py-2 space-x-4">
        <a
          href="#english"
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          EN
        </a>
        <span className="text-gray-300">|</span>
        <a
          href="#german"
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          DE
        </a>
      </div>
    </div>
  );
}
