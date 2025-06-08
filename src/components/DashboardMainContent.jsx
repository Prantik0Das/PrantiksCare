import ActivityFeed from "./Dashboardmaincontent/ActivityFeed";
import CalendarView from "./Dashboardmaincontent/CalendarView";
import DashboardOverview from "./Dashboardmaincontent/DashboardOverview";
import UpcomingSchedule from "./Dashboardmaincontent/UpcomingSchedule";
import "./DashboardMainContent.css";
export default function DashboardMainContent() {
  return (
    <>
      <div className="wrap">
        <div className="a">
          <h1 className="x">Dashboard</h1>
          <DashboardOverview />
          <ActivityFeed />
        </div>
        <div className="b">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </>
  );
}
