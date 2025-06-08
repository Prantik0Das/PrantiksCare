import AnatomySection from "./DashboardOverview/AnatomySection";
import HealthStatusCards from "./DashboardOverview/HealthStatusCards";
import "./DashboardOverview.css";
export default function DashboardOverview() {
  return (
    <>
      <div className="overview">
        <div className="anatomy-section">
          <AnatomySection />
        </div>
        <div className="health-card-status">
          <HealthStatusCards />
        </div>
      </div>
    </>
  );
}
