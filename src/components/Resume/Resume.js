import readingLogo from "../../images/reading-logo.webp";

export default function Resume() {
  return (
    <article class="resume">
      <header>
        <h2 class="resume__title">Resume</h2>
      </header>

      <section class="resume__timeline">
        <div class="resume__title-wrapper">
          <div class="icon-box">
            <img
              src={readingLogo}
              alt="camera icon"
              className="about__service-item-logo"
            />
          </div>

          <h3 class="resume__subtitle">Education</h3>
        </div>

        <ol class="resume__timeline-list">
          <li class="resume__timeline-item">
            <h4 class="resume__timeline-item-title">
              Quality Leadership University / University of Louisville
            </h4>

            <span>2022 - Present</span>

            <p class="resume__timeline-text">
              Bachelor of Science in Computer Science and Engineering
            </p>
          </li>
          <li></li>
        </ol>
      </section>

      <section class="resume__timeline">
        <div class="resume__title-wrapper">
          <div class="icon-box">
            <img
              src={readingLogo}
              alt="camera icon"
              className="about__service-item-logo"
            />
          </div>

          <h3 class="resume__subtitle">Experience</h3>
        </div>

        <ol class="resume__timeline-list">
          <li class="resume__timeline-item">
            <h4 class="resume__timeline-item-title">
              Support Team, Administrative Assistant
            </h4>

            <span>March 2023 — Present</span>

            <p class="resume__timeline-text">
              Codigo Infinito (Equiinet, @Work, EquiiText): Conducted user
              testing and research, contributing valuable insights to enhance
              the user experience. Managed customer interactions, handling
              inquiries, receiving payments, and updating customer information.
              Executed daily closings, including tasks such as counting out
              tips, managing petty cash, and designing promotional. Led social
              media management efforts, enhancing the company's online presence.
              Provided customer support by addressing inquiries and
              troubleshooting issues over phone and email. Facilitated the
              account setup process and resolved issues related to emails and
              passwords.
            </p>
          </li>

          <li class="resume__timeline-item">
            <h4 class="resume__timeline-item-title">
              Residence Concierge & Office Tower Concierge
            </h4>

            <span>2022</span>

            <p class="resume__timeline-text">
              Efficiently managed package deliveries, logging and notifying
              residents promptly. Coordinated visitor arrivals, ensuring a
              seamless experience for guests. Organized schedules for service
              providers and integrated them into the building's agenda.
              Scheduled service elevator use within the residence building,
              optimizing operational efficiency. Facilitated a streamlined
              process in the office tower, notifying offices about visitor
              arrivals. Coordinated job interview schedules and ensured a
              professional and welcoming atmosphere. Obtained competitive quotes
              for essential services, contributing to cost-effective operations.
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
}
