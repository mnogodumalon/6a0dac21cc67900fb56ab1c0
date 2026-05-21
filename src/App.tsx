import '@/lib/sentry';
import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ActionsProvider } from '@/context/ActionsContext';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorBusProvider } from '@/components/ErrorBus';
import { Layout } from '@/components/Layout';
import DashboardOverview from '@/pages/DashboardOverview';
import AdminPage from '@/pages/AdminPage';
import RechnungsverwaltungPage from '@/pages/RechnungsverwaltungPage';
import AuftragsverwaltungPage from '@/pages/AuftragsverwaltungPage';
import KundenverwaltungPage from '@/pages/KundenverwaltungPage';
import MitarbeiterverwaltungPage from '@/pages/MitarbeiterverwaltungPage';
import MotivkatalogPage from '@/pages/MotivkatalogPage';
import MaterialverwaltungPage from '@/pages/MaterialverwaltungPage';
import PublicFormRechnungsverwaltung from '@/pages/public/PublicForm_Rechnungsverwaltung';
import PublicFormAuftragsverwaltung from '@/pages/public/PublicForm_Auftragsverwaltung';
import PublicFormKundenverwaltung from '@/pages/public/PublicForm_Kundenverwaltung';
import PublicFormMitarbeiterverwaltung from '@/pages/public/PublicForm_Mitarbeiterverwaltung';
import PublicFormMotivkatalog from '@/pages/public/PublicForm_Motivkatalog';
import PublicFormMaterialverwaltung from '@/pages/public/PublicForm_Materialverwaltung';
// <public:imports>
// </public:imports>
// <custom:imports>
const NeuenAuftragErstellenPage = lazy(() => import('@/pages/intents/NeuenAuftragErstellenPage'));
const AuftragsabschlussRechnungPage = lazy(() => import('@/pages/intents/AuftragsabschlussRechnungPage'));
// </custom:imports>

export default function App() {
  return (
    <ErrorBoundary>
      <ErrorBusProvider>
        <HashRouter>
          <ActionsProvider>
            <Routes>
              <Route path="public/6a0dac21e8e2bc04096bb6fd" element={<PublicFormRechnungsverwaltung />} />
              <Route path="public/6a0dac22a4fd7adf1e0b08c7" element={<PublicFormAuftragsverwaltung />} />
              <Route path="public/6a0dac2214714c7e5a87b12b" element={<PublicFormKundenverwaltung />} />
              <Route path="public/6a0dac22f03ba44fb0d7225d" element={<PublicFormMitarbeiterverwaltung />} />
              <Route path="public/6a0dac2317018badb15ad219" element={<PublicFormMotivkatalog />} />
              <Route path="public/6a0dac233202eaacdba70a88" element={<PublicFormMaterialverwaltung />} />
              {/* <public:routes> */}
              {/* </public:routes> */}
              <Route element={<Layout />}>
                <Route index element={<DashboardOverview />} />
                <Route path="rechnungsverwaltung" element={<RechnungsverwaltungPage />} />
                <Route path="auftragsverwaltung" element={<AuftragsverwaltungPage />} />
                <Route path="kundenverwaltung" element={<KundenverwaltungPage />} />
                <Route path="mitarbeiterverwaltung" element={<MitarbeiterverwaltungPage />} />
                <Route path="motivkatalog" element={<MotivkatalogPage />} />
                <Route path="materialverwaltung" element={<MaterialverwaltungPage />} />
                <Route path="admin" element={<AdminPage />} />
                {/* <custom:routes> */}
                <Route path="intents/neuen-auftrag-erstellen" element={<Suspense fallback={null}><NeuenAuftragErstellenPage /></Suspense>} />
                <Route path="intents/auftragsabschluss-rechnung" element={<Suspense fallback={null}><AuftragsabschlussRechnungPage /></Suspense>} />
                {/* </custom:routes> */}
              </Route>
            </Routes>
          </ActionsProvider>
        </HashRouter>
      </ErrorBusProvider>
    </ErrorBoundary>
  );
}
