export default function Contact() {
  return (
    <article class="contact" data-page="contact">
      <header>
        <h2 class="resume__title">Contact</h2>
      </header>

      <section class="contact-form">
        <form action="#" class="form" data-form>
          <div class="input-wrapper">
            <input
              type="text"
              name="fullname"
              class="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              class="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            class="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <button class="form-btn" type="submit" disabled data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}
