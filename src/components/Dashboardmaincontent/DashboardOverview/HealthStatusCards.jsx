import AnatomyCard from "../../Cards/AnatomyCard";
import { FaBone, FaHeart, FaLungs, FaTeeth } from "react-icons/fa";

export default function HealthStatusCards() {
  return (
    <>
      <div className="aaarange">
        <div className="card-row">
          <div>
            <AnatomyCard
              icon={<FaHeart />}
              title="Heart"
              date={new Date("23 July 2020")}
              bar={7}
            ></AnatomyCard>
          </div>
          <div>
            <AnatomyCard
              icon={<FaTeeth />}
              title="Teeth"
              date={new Date("23 July 2020")}
              bar={3}
            ></AnatomyCard>
          </div>
          <div>
            <AnatomyCard
              icon={<FaBone />}
              title="Bones"
              date={new Date("23 July 2020")}
              bar={5}
            ></AnatomyCard>
          </div>
        </div>
      </div>
    </>
  );
}
