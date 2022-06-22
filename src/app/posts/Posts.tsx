import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";
import Tag from "../../common/ui/components/tag";
import MainLayout from "../../common/ui/layout/main-layout";
import { Job } from "../model";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import styles from "./Posts.module.scss";
import SupText from "../../common/ui/components/supportive-text";
import ImageWrapper from "../../common/ui/components/image-wrapper";

const Posts = () => {
  const [job, setJob] = useState<Job>({
    name: "Kasisto",
    image:
      "https://assets.themuse.com/uploaded/companies/15000043/small_logo.png?v=f7c2c2028042c08d343ed8215aee7a026bdb8338b1079d1aff48dbb9b0478d33",
    location: "New York",
    isFullTime: true,
    role: "Front-End Software Engineer",
    time: "5 days ago",
    description: (
      <>
        <p>
          Wir setzen Trends in allen Sprachen.
          <br />
          <br />
          Bevor Du die erste Zeile eines Codes schreibst, findest Du heraus, was
          unsere Kunden tatsächlich br/auchen. Erst dann werden verschiedene
          Wege ausprobiert und getestet, um die finale Lösung zu finden. Im Team
          genießt Du die Freiheit, neu zu denken und Deine Arbeit selbst zu
          organisieren. Erweitere und teile Dein Wissen im ständigen Austausch
          mit engagierten Siemens Teams aus der ganzen Welt. Möchtest auch Du
          Deine Ideen einbr/ingen und so mit uns gemeinsam die Basis für
          innovative Geschäftsmodelle schaffen? Wir bieten Dir alles, was Du
          dazu br/auchst.
          <br />
          <br />
          Verändere die Welt von morgen.
          <br />
          <br />
          <ul>
            <li>
              Dies ist eine besonders großartige Gelegenheit, Teil eines
              modernen Teams zu sein, das eine wichtige Rolle im Unternehmen
              einnimmt und für hardwarenahe Firmware von Speicher
              Programmierbaren Steuerungen verantwortlich ist{" "}
            </li>
            <li>
              Du br/ingst die Entwicklung von Modulen und Treibern für
              SPS-Produkte voran{" "}
            </li>
            <li>
              Du konzipierst und designst die Softwarekomponenten eigenständig
              bist aber Teil eines innovativen Teams{" "}
            </li>
            <li>
              Durch Deine engagierte Arbeit leistest Du einen Beitrag für
              Aufgaben zur kontinuierlichen Qualitätssicherung der entwickelten
              Software{" "}
            </li>
          </ul>
          <br />
          Dein Profil für \"Zukunft möglich machen\".
          <br />
          <br />
          <ul>
            <li>
              Die Basis bildet ein abgeschlossener Master-/Diplomstudiengang im
              MINT-Bereich{" "}
            </li>
            <li>
              Durch Deine erste Berufserfahrung zeichnest Du Dich durch sehr
              gute Programmierkenntnisse in C/C++ oder einer äquivalenten
              Programmiersprache aus{" "}
            </li>
            <li>
              Du verfügst über Kenntnisse im konkreten Umgang mit Tools zur
              SW-Versionsverwaltung, Fehlerverfolgung, Debugging, Programmierung
              und Test{" "}
            </li>
            <li>
              Du interessierst Dich für moderner Software-Entwicklungsmethoden
              (Clean Code, Test Driven Development, Unit Tests){" "}
            </li>
            <li>
              Die Nutzung PC-basierter Entwicklungswerkzeuge (Eclipse, Debugger,
              Simulatoren) ist Dir bekannt{" "}
            </li>
            <li>
              Erfahrung im Bereich Firmware- oder Echtzeitprogrammierung sowie
              im Umgang mit SPS und / oder elektrischer Antriebstechnik sind ein
              Plus{" "}
            </li>
            <li>
              Persönlich überzeugst Du uns durch eine schnelle Auffassungsgabe,
              analytisch konzeptionelles Denken und Deine
              Kommunikationsfähigkeit{" "}
            </li>
            <li>
              Wenn Du aufgeschlossen bist und zielorientiert,
              selbstverantwortlich und kooperativ arbeitest, bist Du bei uns
              herzlich willkommen{" "}
            </li>
            <li>
              Sehr gute Deutschkenntnisse und ausgeprägte Kollegialität und
              Teamfähigkeit runden Dein Profil ab{" "}
            </li>
          </ul>
          <br />
          Was wir bieten:
          <br />
          <br />
          <ul>
            <li>
              Ein Arbeitsumfeld, in dem sich jeder mit seiner ganzen
              Persönlichkeit einbr/ingen kann und sich als Teil von Siemens
              fühlt{" "}
            </li>
            <li>
              2 bis 3 Tage pro Woche mobiles Arbeiten als zukünftiger, globalen
              Standard{" "}
            </li>
            <li>
              Weiterbildungsmöglichkeiten sowohl für Deine berufliche als auch
              persönliche Entwicklung{" "}
            </li>
            <li>
              Die einzelnen Benefits sind jeweils zugeschnitten auf lokale
              gesetzliche Anforderungen, Vorgaben verschiedener Job-Profile und
              Standorte sowie individuelle Präferenzen.{" "}
            </li>
          </ul>
          <br />
          Wir wollen, dass Du willst: Bewerbe Dich!
          <br />
          <br />
          www.siemens.com/karriere/digitalminds - wenn Du mehr über Digital
          Minds bei Siemens erfahren willst. <br />
          <br />
          FAQ - wenn Du eine Frage zum Thema Bewerbung bei Siemens hast.
          <br />
          <br />
          Wir legen Wert auf Chancengleichheit und freuen uns über Bewerbungen
          von Menschen mit Behinderung.
          <br />
          <br />
          <b>Organization:</b> Digital Industries
          <br />
          <br />
          <b>Company:</b> Siemens AG
          <br />
          <br />
          <b>Experience Level:</b> Early Professional
          <br />
          <br />
          <b>Job Type:</b> Full-time
        </p>
      </>
    ),
  });
  const { id } = useParams();

  return (
    <MainLayout>
      <div className={styles.posts}>
        <div className={styles.sidebar}>
          <Link className={styles.backToPage} to="/">
            <ArrowRightAltIcon className={styles.flip} /> Back to search
          </Link>
          <div className={styles.apply}>
            <h4>How to apply</h4>
            <p>
              Please email a copy of your resume and online portfolio to{" "}
              <span>wes@kasisto.com</span> & CC <span>eric@kasisto.com</span>
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.job}>
            <div className={styles["job-name"]}>
              <h4>{job.role}</h4>
              {job.isFullTime && <Tag title="Full time" />}
            </div>
            <SupText type="time" title={job.time} />
          </div>

          <div className={styles.company}>
            <div className={styles["company-desc"]}>
              <ImageWrapper url={job.image} />
              <div className={styles.info}>
                <h4>{job.name}</h4>
                <SupText type="location" title={job.location} />
              </div>
            </div>
            <div className={styles["job-desc"]}>{job.description}</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Posts;
